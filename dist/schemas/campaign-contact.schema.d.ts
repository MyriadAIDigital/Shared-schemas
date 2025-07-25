import { Document, Types, Schema as MongooseSchema, Model } from 'mongoose';
import { CallStatus } from '../enums/user-enums';
export type CampaignContactDocument = CampaignContact & Document;
export declare class CampaignContact {
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
    additionalInfo: Record<string, any> | string;
    lastCallStatus: string;
    createdAt: Date;
    updatedAt: Date;
}
export declare const CampaignContactSchema: MongooseSchema<CampaignContactDocument, Model<CampaignContactDocument>>;
//# sourceMappingURL=campaign-contact.schema.d.ts.map