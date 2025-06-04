import { Types } from 'mongoose';
export interface IDailyCallStatistics {
    date: string;
    isLiveMode: boolean;
    totalCalls: number;
    totalDurationSeconds: number;
    userId: Types.ObjectId;
    tenantID: string;
    llmInputTokens: number;
    llmOutputTokens: number;
    llmTotalTokens: number;
    llmCost: number;
    llmInputCostInDollars: number;
    llmOutputCostInDollars: number;
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
//# sourceMappingURL=daily-call-statistics.interface.d.ts.map