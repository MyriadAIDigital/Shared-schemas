import { Document, Types, Schema as MongooseSchema, Model } from 'mongoose';
import { CallType, FollowUpStatus } from '../enums/user-enums';
export type FollowUpCallDocument = FollowUpCall & Document;
export declare class FollowUpCall {
    campaignId: Types.ObjectId;
    contactListId: Types.ObjectId;
    contactId: Types.ObjectId;
    followUpDateTimeUtc: Date;
    followUpDateTimeInTimeZone: Date;
    campaignTimeZone: string;
    callType: CallType;
    status: FollowUpStatus;
    notes: string | null;
}
export declare const FollowUpCallSchema: MongooseSchema<FollowUpCallDocument, Model<FollowUpCallDocument>>;
//# sourceMappingURL=follow-up-call.schema.d.ts.map