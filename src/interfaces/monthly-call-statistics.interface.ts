// src/interfaces/monthly-call-statistics.interface.ts

import { Document, Types } from 'mongoose';

/**
 * Interface for MonthlyCallStatistics document
 */
export interface IMonthlyCallStatistics {
    month: string; // Format: YYYY-MM
    isLiveMode: boolean;
    totalCalls: number;
    totalDurationSeconds: number;
    userId: Types.ObjectId;
    tenantID: string;
    llmInputTokens: number;
    llmOutputTokens: number;
    llmTotalTokens: number;
    llmInputCostInDollars: number;
    llmOutputCostInDollars: number;
    llmCost: number;
    ttsCharacters: number;
    ttsCost: number;
    sttDuration: number;
    sttCost: number;
    ourServiceCharge: number;
    telephonicServiceProviderCallBillingDuration: number;
    telephonicServiceProviderBillingRate: number;
    telephonicServiceProviderTotalCost: number;
    totalCostWithoutServiceCharge: number;
    totalCostWithServiceCharge: number;
    createdAt: Date;
}


