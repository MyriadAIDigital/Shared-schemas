// src/interfaces/campaign-contact.interface.ts

import { Document, Types } from 'mongoose';
import { CallStatus } from '../enums/user-enums';


export interface ICampaignContact {
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


