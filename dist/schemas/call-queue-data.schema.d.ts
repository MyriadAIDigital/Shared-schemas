import { Document, Types, Schema as MongooseSchema, Model } from 'mongoose';
import { CallType, CampaignType, CallQueueStatus } from '../enums/user-enums';
export declare class CallQueueData {
    tenantId: string;
    campaignId: Types.ObjectId;
    contactId: Types.ObjectId;
    campaignContactId: Types.ObjectId;
    callId: string;
    callType: CallType;
    timezone?: string;
    campaignType?: CampaignType;
    isLiveMode?: boolean;
    startDate?: string;
    startTime?: string;
    endTime?: string;
    status: CallQueueStatus;
    startDateTime?: Date;
    endDateTime?: Date;
    createdAt: Date;
    updatedAt: Date;
}
export type CallQueueDataDocument = CallQueueData & Document;
export declare const CallQueueDataSchema: MongooseSchema<CallQueueDataDocument, Model<CallQueueDataDocument>>;
//# sourceMappingURL=call-queue-data.schema.d.ts.map