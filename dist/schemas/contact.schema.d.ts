import { Document, Types, Schema as MongooseSchema } from 'mongoose';
export type ContactDocument = Contact & Document;
export declare class Contact {
    name: string;
    tenantID: string;
    userId: Types.ObjectId;
    email: string;
    phoneNumber: string;
    contactListId: Types.ObjectId;
    contactListName: string;
    companyName: string;
    clientCompanyName: string;
    isDeleteButton: boolean;
    attemptsMade: number;
    isLiveMode: boolean;
    isContacted: boolean;
    isNotContacted: boolean;
    callId: string;
    alternateContact: {
        name: string;
        phone: string;
        email: string;
    };
    additionalInfo: Record<string, any> | string;
    createdAt: Date;
    updatedAt: Date;
}
export declare const ContactSchema: MongooseSchema<Contact, import("mongoose").Model<Contact, any, any, any, Document<unknown, any, Contact, any> & Contact & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Contact, Document<unknown, {}, import("mongoose").FlatRecord<Contact>, {}> & import("mongoose").FlatRecord<Contact> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=contact.schema.d.ts.map