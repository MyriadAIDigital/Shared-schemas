import { Types } from 'mongoose';
import { IAlternateContact } from './call-history.interface';
export interface IContact {
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
    alternateContact: IAlternateContact;
    additionalInfo: Record<string, any> | string;
    /**
    * 🆕 Metadata field
    * Used to store dynamic key–value pairs related to the contact.
    * Example:
    * {
    *   "name": "Sateesh",
    *   "secondName": "Test",
    *   "preferredLanguage": "English"
    * }
    */
    metadata: Record<string, any>;
    createdAt: Date;
    updatedAt: Date;
}
//# sourceMappingURL=contact.interface.d.ts.map