import { Types } from 'mongoose';
import { CampaignType, CampaignStatus, VoiceSource, VoiceType, TelephonicProviders, RescheduleType, OngoingStatusSubType, CallingModel, ContactSourceType } from '../enums/user-enums';

export interface ICampaign {
    _id: Types.ObjectId;
    voiceGalleryId: Types.ObjectId; // Reference to VoiceGallery
    clientVoiceGalleryId: Types.ObjectId; // Reference to ClientVoiceGallery
    workflowId: Types.ObjectId; // Reference to Workflow
    contactSource: ContactSourceType; // Source of the contact (e.g., manual, webhook, etc.)
    totalContacts: number; // Total number of contacts
    voiceId: string; // ID of the selected voice
    callingModel: CallingModel; // Calling model
    voiceType: VoiceType; // Premium or Standard
    voiceSource: VoiceSource; // ElevenLabs or Azure
    userId: Types.ObjectId; // Reference to User
    displayVoiceName: string; // Display name for the voice
    defaultVoiceNameOrId: string; // Default system voice name or ID
    name: string; // Campaign name
    tenantID: string; // Tenant identifier
    type: CampaignType; // Campaign type
    telephonicProvider: TelephonicProviders; // Telephonic provider
    outboundPhoneNo: string; // Outbound phone number
    isLiveMode: boolean; // Indicates live mode status
    startDate: string; // Campaign start date (YYYY-MM-DD)
    startTime: string; // Campaign start time (HH:mm A)
    endTime: string; // Campaign end time (HH:mm A)
    enableReattempts: boolean; // Flag to enable reattempts
    reattemptGap?: number; // Gap between reattempts (default: 0)
    maxCallAttempts: number; // Maximum number of call attempts
    contactListId: Types.ObjectId; // Reference to ContactList
    promptId: number; // Reference to Prompt
    timezone: string; // Campaign timezone
    status: CampaignStatus; // Campaign status
    shiftedToNextDay: boolean; // Indicates if the campaign was shifted to the next day
    nextScheduledDate?: Date; // The date to which the campaign has been shifted
    ongoingStatus: OngoingStatusSubType; // Ongoing status subtype
    callsMade?: number; // Number of calls made (default: 0)
    callsAnswered?: number; // Number of calls answered (default: 0)
    meetingsScheduled?: number; // Number of meetings scheduled (default: 0)
    followUpNeeded?: number; // Number of follow-ups needed (default: 0)
    rescheduleType: RescheduleType; // Tracks the state of rescheduling
    reattemptDone: boolean // Indicates if the reattempt has been completed
    rescheduleCount?: number; // Number of times the campaign has been rescheduled (default: 0)
    createdAt?: Date; // Date when the campaign was created (default: current date)
    updatedAt?: Date; // Date when the campaign was last updated (default: current date)
    // New fields
    allowLateNightCalls: boolean;
    isEmailSend: boolean;
    clientCutoffStart: string; // Format: 'HH:mm'
    clientCutoffEnd: string;   // Format: 'HH:mm'
}