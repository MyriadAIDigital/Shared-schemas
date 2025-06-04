import { Document, Types, Schema as MongooseSchema } from 'mongoose';
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
export declare const FollowUpCallSchema: MongooseSchema<FollowUpCall, import("mongoose").Model<FollowUpCall, any, any, any, Document<unknown, any, FollowUpCall, any> & FollowUpCall & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, FollowUpCall, Document<unknown, {}, import("mongoose").FlatRecord<FollowUpCall>, {}> & import("mongoose").FlatRecord<FollowUpCall> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=follow-up-call.schema.d.ts.map