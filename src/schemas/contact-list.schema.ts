// src/schemas/contact-list.schema.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types, Schema as MongooseSchema, Model } from 'mongoose';
import { listType, CountryCode } from '../enums/user-enums';


export type ContactListDocument = ContactList & Document;

@Schema({
    timestamps: true,
    versionKey: false,
    autoCreate: false,
    autoIndex: false,
})
export class ContactList {
    @Prop({ required: true, enum: listType, default: listType.DEFAULT })
    listType!: listType;

    @Prop({ required: true, unique: true, index: true })
    name!: string;

    @Prop({ required: true, enum: CountryCode, default: CountryCode.INDIA })
    countryCode!: CountryCode;

    @Prop({ default: 0 })
    totalCustomers!: number;

    @Prop({ default: true })
    isLiveMode!: boolean;

    @Prop({ default: false })
    contactListIsBusy!: boolean;

    @Prop({ required: true, type: Types.ObjectId, ref: 'User' })
    userId!: Types.ObjectId;

    @Prop({ required: true })
    tenantID!: string;

    @Prop({ type: Date, default: () => new Date(), index: true })
    createdAt!: Date;

    // updatedAt will be handled automatically by timestamps: true
    updatedAt!: Date;
}

export const ContactListSchema = SchemaFactory.createForClass(ContactList) as unknown as MongooseSchema<
    ContactListDocument,
    Model<ContactListDocument>
>;
