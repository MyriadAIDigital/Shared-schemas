import { Document, Types, Schema as MongooseSchema } from 'mongoose';
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
export declare const CampaignContactSchema: MongooseSchema<CampaignContact, import("mongoose").Model<CampaignContact, any, any, any, Document<unknown, any, CampaignContact, any> & CampaignContact & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, CampaignContact, Document<unknown, {}, import("mongoose").FlatRecord<CampaignContact>, {}> & import("mongoose").FlatRecord<CampaignContact> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=campaign-contact.schema.d.ts.map