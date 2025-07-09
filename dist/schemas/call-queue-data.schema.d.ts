import { Document, Types, Schema as MongooseSchema, Model } from 'mongoose';
import { CallType, CampaignType, CallQueueStatus, QueueStatus } from '../enums/user-enums';
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
    queueStatus: QueueStatus;
    startDateTime?: Date;
    endDateTime?: Date;
    createdAt: Date;
    updatedAt: Date;
}
export type CallQueueDataDocument = CallQueueData & Document;
export declare const CallQueueDataSchema: MongooseSchema<CallQueueData, Model<CallQueueData, any, any, any, Document<unknown, any, CallQueueData, any> & CallQueueData & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, CallQueueData, Document<unknown, {}, import("mongoose").FlatRecord<CallQueueData>, {}> & import("mongoose").FlatRecord<CallQueueData> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=call-queue-data.schema.d.ts.map