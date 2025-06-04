// src/interfaces/call-queue-data.interface.ts

import { Document, Types } from 'mongoose';
import { CallType, CampaignType, CallQueueStatus } from '../enums/user-enums';


export interface ICallQueueData {
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


