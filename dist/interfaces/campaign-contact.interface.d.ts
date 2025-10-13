import { Types } from 'mongoose';
import { CallStatus } from '../enums/user-enums';
export interface ICampaignContact {
    _id: Types.ObjectId;
    campaignId: Types.ObjectId;
    contactId: Types.ObjectId;
    contactListId: Types.ObjectId;
    contactListName: string;
    name: string;
    status: CallStatus;
    contactNumber: string;
    isConnected: boolean;
    email: string;
    companyName: string;
    connectedAttempt: number;
    callMade: number;
    lastCallStatus: string;
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
//# sourceMappingURL=campaign-contact.interface.d.ts.map