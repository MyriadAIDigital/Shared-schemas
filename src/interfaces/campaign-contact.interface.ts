import { Types } from 'mongoose';
import { CallStatus } from '../enums/user-enums';

export interface ICampaignContact {
    _id: Types.ObjectId;
    campaignId: Types.ObjectId; // Reference to the Campaign
    contactId: Types.ObjectId; // Reference to the Contact
    contactListId: Types.ObjectId; // Reference to the ContactList
    contactListName: string; // Name of the contact list
    name: string; // Contact's name
    status: CallStatus; // Current status of the call
    contactNumber: string; // Contact's phone number
    isConnected: boolean; // Indicates whether the call was connected
    email: string; // Contact's email address
    companyName: string; // Contact's company name
    connectedAttempt: number; // Number of attempts before the call was connected
    callMade: number; // Total number of call attempts
    lastCallStatus: string; // Last call status as a string
    additionalInfo: Record<string, any> | string; // Stores dynamic company-specific data as JSON or string
    createdAt: Date; // Record creation date
    updatedAt: Date; // Record last update date
}