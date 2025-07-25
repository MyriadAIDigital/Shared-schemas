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
    _id: Types.ObjectId;
    contactListId: Types.ObjectId;
    contactListName: string;
    contactId: Types.ObjectId;
    campaignId: Types.ObjectId;
    campaignName?: string;
    workflowId?: Types.ObjectId;
    userId: Types.ObjectId;
    tenantID: string;
    callId: string;
    outcome: string;
    phone: string;
    email: string;
    callDate: Date;
    callTime: Date;
    callType?: CallType;
    recordingUrl?: string;
    timeZone: string;
    UtcTime: Date;
    convertedTime: Date;
    callStatus?: string;
    hangupCause?: string;
    ultravoxJoinUrl?: string;
    isLive: boolean;
    companyName: string;
    founderName: string;
    interestedInDebt?: string;
    callGenerated?: string;
    callSummary?: string;
    endReason?: string;
    alternateContact?: IAlternateContact;
    userSummary?: string[];
    companyAge?: string;
    voiceAgentName?: string;
    createdAt?: Date;
    updatedAt?: Date;
    followUpInfo?: IFollowUpInfo;
    callDuration: number;
    perMinuteRate: number;
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
    providerCallId?: string;
    additionalMetadata?: Record<string, any>;
    whatsappMessages?: Array<Record<string, any>>;
    webhookDetails?: Array<Record<string, any>>;
    /** Track credit deduction attempt/result */
    creditDeductionStatus?: CreditDeductionStatus;
    /** Raw response returned on success */
    creditDeductionSuccessResponse?: Record<string, any>;
    /** Raw error returned on failure */
    creditDeductionErrorResponse?: Record<string, any> | string;
}
//# sourceMappingURL=call-history.interface.d.ts.map