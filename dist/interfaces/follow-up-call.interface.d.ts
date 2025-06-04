import { Types } from 'mongoose';
import { CallType, FollowUpStatus } from '../enums/user-enums';
export interface IFollowUpCall {
    campaignId: Types.ObjectId;
    contactListId: Types.ObjectId;
    contactId: Types.ObjectId;
    followUpDateTimeUtc: Date;
    followUpDateTimeInTimeZone: Date;
    campaignTimeZone: string;
    callType: CallType;
    status: FollowUpStatus;
    notes: string | null;
    createdAt: Date;
    updatedAt: Date;
}
//# sourceMappingURL=follow-up-call.interface.d.ts.map