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
    createdAt: Date;
    updatedAt: Date;
}
//# sourceMappingURL=campaign-contact.interface.d.ts.map