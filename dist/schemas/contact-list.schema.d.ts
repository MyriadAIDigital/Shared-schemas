import { Document, Types, Schema as MongooseSchema, Model } from 'mongoose';
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
export declare const ContactListSchema: MongooseSchema<ContactListDocument, Model<ContactListDocument>>;
//# sourceMappingURL=contact-list.schema.d.ts.map