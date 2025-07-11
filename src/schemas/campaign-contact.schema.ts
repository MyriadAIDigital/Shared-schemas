// src/schemas/campaign-contact.schema.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import moment from 'moment';
import { Document, Types, Schema as MongooseSchema, Model } from 'mongoose';
import { CallStatus } from '../enums/user-enums';


export type CampaignContactDocument = CampaignContact & Document;

@Schema({
    timestamps: true,
    autoCreate: false,
    autoIndex: false,
})
export class CampaignContact {
    @Prop({ required: true, type: Types.ObjectId, ref: 'Campaign' })
    campaignId!: Types.ObjectId;

    @Prop({ required: true, type: Types.ObjectId, ref: 'Contact' })
    contactId!: Types.ObjectId;

    @Prop({ required: true, type: Types.ObjectId, ref: 'ContactList' })
    contactListId!: Types.ObjectId;

    @Prop({ required: true })
    contactListName!: string;

    @Prop({ required: true })
    name!: string;

    @Prop({ required: true, enum: CallStatus, default: CallStatus.NOT_STARTED })
    status!: CallStatus;

    @Prop({ required: true })
    contactNumber!: string;

    @Prop({ required: true, default: false })
    isConnected!: boolean;

    @Prop({ required: true })
    email!: string;

    @Prop({ required: false, default: '' })
    companyName!: string;

    @Prop({ type: Number, default: 0 })
    connectedAttempt!: number;

    @Prop({ type: Number, default: 0 })
    callMade!: number;

    @Prop({ type: MongooseSchema.Types.Mixed, default: 'N/A' })
    additionalInfo!: Record<string, any> | string;

    @Prop({ type: String, default: CallStatus.NOT_STARTED })
    lastCallStatus!: string;

    @Prop({ type: Date, default: () => moment().utc().toDate() })
    createdAt!: Date;

    @Prop({ type: Date, default: () => moment().utc().toDate() })
    updatedAt!: Date;
}

export const CampaignContactSchema = SchemaFactory.createForClass(CampaignContact) as unknown as MongooseSchema<
    CampaignContactDocument,
    Model<CampaignContactDocument>
>;
