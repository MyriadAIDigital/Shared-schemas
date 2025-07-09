// src/schemas/contact.schema.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import moment from 'moment';
import {
    Document,
    Types,
    Schema as MongooseSchema,
    SchemaTypes,
    Model,
} from 'mongoose';

export type ContactDocument = Contact & Document;

@Schema({
    timestamps: true, autoCreate: false, // ✅ Prevents "NamespaceExists" error in Azure Cosmos DB
})
export class Contact {
    @Prop({ required: true })
    name!: string;

    @Prop({ required: true })
    tenantID!: string;

    @Prop({ required: true, type: Types.ObjectId, ref: 'User' })
    userId!: Types.ObjectId;

    @Prop({ required: true })
    email!: string;

    @Prop({ required: true })
    phoneNumber!: string;

    @Prop({ required: true, type: Types.ObjectId, ref: 'ContactList' })
    contactListId!: Types.ObjectId;

    @Prop({ required: true })
    contactListName!: string;

    @Prop({ required: false, default: '' })
    companyName!: string;

    @Prop({ required: false, default: '' })
    clientCompanyName!: string;

    @Prop({ default: true })
    isDeleteButton!: boolean;

    @Prop({ default: 0 })
    attemptsMade!: number;

    @Prop({ default: true })
    isLiveMode!: boolean;

    @Prop({ default: false })
    isContacted!: boolean;

    @Prop({ default: true })
    isNotContacted!: boolean;

    @Prop({ default: '' })
    callId!: string;

    @Prop({
        type: {
            name: { type: String, default: '' },
            phone: { type: String, default: '' },
            email: { type: String, default: '' },
        },
        default: {},
        _id: false,
    })
    alternateContact!: {
        name: string;
        phone: string;
        email: string;
    };

    @Prop({ type: SchemaTypes.Mixed, default: {} })
    additionalInfo!: Record<string, any> | string;

    @Prop({ type: Date, default: () => moment().utc().toDate(), index: true })
    createdAt!: Date;

    // updatedAt will be populated automatically by timestamps: true
    updatedAt!: Date;
}

export const ContactSchema = SchemaFactory.createForClass(Contact) as unknown as MongooseSchema<
    ContactDocument,
    Model<ContactDocument>
>;
