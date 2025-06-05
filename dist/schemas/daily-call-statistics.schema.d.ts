import { Document, Types, Schema as MongooseSchema, Model } from 'mongoose';
export type DailyCallStatisticsDocument = DailyCallStatistics & Document;
export declare class DailyCallStatistics {
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
export declare const DailyCallStatisticsSchema: MongooseSchema<DailyCallStatisticsDocument, Model<DailyCallStatisticsDocument>>;
//# sourceMappingURL=daily-call-statistics.schema.d.ts.map