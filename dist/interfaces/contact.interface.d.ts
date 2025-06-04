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
    createdAt: Date;
    updatedAt: Date;
}
//# sourceMappingURL=contact.interface.d.ts.map