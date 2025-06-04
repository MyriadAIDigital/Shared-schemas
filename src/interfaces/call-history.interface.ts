// src/interfaces/call-history.interface.ts

import { Document, Types } from 'mongoose';
import { CallType, TelephonicProviders, VoiceSource, SttProvider } from '../enums/user-enums';


export interface IAlternateContact {
    name: string;
    phone: string;
    email: string;
}

export interface IFollowUpInfo {
    followUpPhoneCallDate: string | null;
    followUpPhoneCallTime: string | null;
    followUpTimeZone: string;
    followUpMeetingDate: string | null;
    followUpMeetingTime: string | null;
    followUpCallStatus: boolean;
    followUpMeetingStatus: boolean;
}

export interface ICallHistory {
    contactListId: Types.ObjectId;
    contactListName: string;
    contactId: Types.ObjectId;
    campaignName: string;
    workflowId: Types.ObjectId;
    campaignId: Types.ObjectId;
    userId: Types.ObjectId;
    tenantID: string;
    callId: string;
    outcome: string;
    phone: string;
    email: string;
    callDate: Date;
    callTime: Date;
    callType: CallType;
    recordingUrl: string;
    timeZone: string;
    UtcTime: Date;
    convertedTime: Date;
    callStatus: string;
    ultravoxJoinUrl: string;
    hangupCause: string;
    isLive: boolean;
    companyName: string;
    founderName: string;
    interestedInDebt: string;
    perMinuteRate: number;
    totalCallCost: number;
    callGenerated: string;
    callSummary: string;
    endReason: string;
    alternateContact: IAlternateContact;
    userSummary: string[];
    companyAge: string;
    voiceAgentName: string;
    createdAt: Date;
    followUpInfo: IFollowUpInfo;
    callDuration: number;
    telephonicServiceProviderCallBillingDuration: number;
    telephonicServiceProviderBillingRate: number;
    telephonicServiceProviderTotalCost: number;
    telephonicProvider: TelephonicProviders;
    ttsProvider: VoiceSource;
    sttProvider: SttProvider;
    llm: string;
    llmInputTokens: number;
    llmOutputTokens: number;
    llmtotalTokens: number;
    llmInputCostInDollars: number;
    llmOutputCostInDollars: number;
    llmSummaryInputTokens: number;
    llmSummaryOutputTokens: number;
    llmSummaryInputCostInDollars: number;
    llmSummaryOutputCostInDollars: number;
    providerCallId: string;
    llmSummarytotalTokens: number;
    llmSummaryChargeInDollars: number;
    llmChargeInDollars: number;
    ttsTotalCharacters: number;
    ttsChargeInDollars: number;
    sttDuration: number;
    sttChargeInDollars: number;
    serviceCharge: number;
    totalCostWithService: number;
    totalCostWithoutServiceCharge: number;
    additionalMetadata: Record<string, any>;
    updatedAt: Date;
}


