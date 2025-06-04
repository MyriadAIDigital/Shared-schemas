import { Document, Types, Schema as MongooseSchema } from 'mongoose';
import { listType, CountryCode } from '../enums/user-enums';
export type ContactListDocument = ContactList & Document;
export declare class ContactList {
    listType: listType;
    name: string;
    countryCode: CountryCode;
    totalCustomers: number;
    isLiveMode: boolean;
    contactListIsBusy: boolean;
    userId: Types.ObjectId;
    tenantID: string;
    createdAt: Date;
    updatedAt: Date;
}
export declare const ContactListSchema: MongooseSchema<ContactList, import("mongoose").Model<ContactList, any, any, any, Document<unknown, any, ContactList, any> & ContactList & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ContactList, Document<unknown, {}, import("mongoose").FlatRecord<ContactList>, {}> & import("mongoose").FlatRecord<ContactList> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=contact-list.schema.d.ts.map