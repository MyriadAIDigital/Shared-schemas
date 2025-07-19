import { Types } from 'mongoose';
import { CallType, TelephonicProviders, VoiceSource, SttProvider, CreditDeductionStatus } from '../enums/user-enums';

export interface IAlternateContact {
    name?: string;
    phone?: string;
    email?: string;
}

export interface IFollowUpInfo {
    followUpPhoneCallDate?: string | null;
    followUpPhoneCallTime?: string | null;
    followUpTimeZone?: string;
    followUpMeetingDate?: string | null;
    followUpMeetingTime?: string | null;
    followUpCallStatus?: boolean;
    followUpMeetingStatus?: boolean;
}

export interface ICallHistory {
    // 1) Mongoose document ID:
    _id: Types.ObjectId;

    // 2) “Old” fields (made optional if they weren’t always written):
    contactListId: Types.ObjectId;
    contactListName: string;
    contactId: Types.ObjectId;

    // Keep campaignId if you need to link back to the campaign document:
    campaignId: Types.ObjectId;

    // If you also want to store a human‐readable campaign name, make it optional:
    campaignName?: string;

    // New in v2: if your schema sometimes writes a workflowId, mark it optional:
    workflowId?: Types.ObjectId;

    userId: Types.ObjectId;
    tenantID: string;

    callId: string;
    outcome: string;
    phone: string;
    email: string;

    callDate: Date;
    callTime: Date;

    // New “callType” field (optional if not always present):
    callType?: CallType;

    // Old version allowed recordingUrl to be undefined; keep it optional:
    recordingUrl?: string;

    timeZone: string;
    UtcTime: Date;
    convertedTime: Date;

    // “callStatus” and “hangupCause” were optional before—keep them that way:
    callStatus?: string;
    hangupCause?: string;

    // New “ultravoxJoinUrl” (only if your schema actually writes it):
    ultravoxJoinUrl?: string;

    isLive: boolean;
    companyName: string;
    founderName: string;

    // These were optional in v1, so keep them optional here too:
    interestedInDebt?: string;
    callGenerated?: string;
    callSummary?: string;
    endReason?: string;

    // Stick to the same nested‐object shape for alternateContact, but optional:
    alternateContact?: IAlternateContact;

    // This was optional in v1:
    userSummary?: string[];

    // Optional as before:
    companyAge?: string;
    voiceAgentName?: string;

    // createdAt/updatedAt come from `{ timestamps: true }` on your schema:
    createdAt?: Date;
    updatedAt?: Date;

    // Follow‐up info was optional before:
    followUpInfo?: IFollowUpInfo;

    callDuration: number;
    perMinuteRate: number;

    // Billing fields: make them optional if Mongoose doesn’t always set them:
    telephonicServiceProviderCallBillingDuration?: number;
    telephonicServiceProviderBillingRate?: number;
    telephonicServiceProviderTotalCost?: number;

    telephonicProvider?: TelephonicProviders;
    ttsProvider?: VoiceSource;
    sttProvider?: SttProvider;

    llm?: string;
    llmInputTokens?: number;
    llmOutputTokens?: number;
    llmtotalTokens?: number;
    llmInputCostInDollars?: number;
    llmOutputCostInDollars?: number;

    llmSummaryInputTokens?: number;
    llmSummaryOutputTokens?: number;
    llmSummaryInputCostInDollars?: number;
    llmSummaryOutputCostInDollars?: number;
    llmSummarytotalTokens?: number;
    llmSummaryChargeInDollars?: number;
    llmChargeInDollars?: number;

    ttsTotalCharacters?: number;
    ttsChargeInDollars?: number;
    sttDuration?: number;
    sttChargeInDollars?: number;

    serviceCharge?: number;
    totalCostWithService?: number;
    totalCostWithoutServiceCharge?: number;

    // New “providerCallId” if your code writes it:
    providerCallId?: string;

    // If you want a free‐form place to stash extra bits of metadata:
    additionalMetadata?: Record<string, any>;
    // Dynamic WhatsApp activity logs: an array of arbitrary key–value objects
    whatsappMessages?: Array<Record<string, any>>;

    webhookDetails?: Array<Record<string, any>>;

    /** Track credit deduction attempt/result */
    creditDeductionStatus?: CreditDeductionStatus;

    /** Raw response returned on success */
    creditDeductionSuccessResponse?: Record<string, any>;

    /** Raw error returned on failure */
    creditDeductionErrorResponse?: Record<string, any> | string;


}
