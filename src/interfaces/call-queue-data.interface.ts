// src/interfaces/call-queue-data.interface.ts

import { Document, Types } from 'mongoose';
import { CallType, CampaignType, CallQueueStatus, QueueStatus } from '../enums/user-enums';


export interface ICallQueueData {
    _id: Types.ObjectId;
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


