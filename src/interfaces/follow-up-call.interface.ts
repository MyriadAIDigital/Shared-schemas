// src/interfaces/follow-up-call.interface.ts

import { Document, Types } from 'mongoose';
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

