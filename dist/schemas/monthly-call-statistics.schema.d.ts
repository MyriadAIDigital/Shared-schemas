import { Document, Model, Schema as MongooseSchema, Types } from 'mongoose';
export type MonthlyCallStatisticsDocument = MonthlyCallStatistics & Document;
export declare class MonthlyCallStatistics {
    month: string;
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
export declare const MonthlyCallStatisticsSchema: MongooseSchema<MonthlyCallStatisticsDocument, Model<MonthlyCallStatisticsDocument>>;
//# sourceMappingURL=monthly-call-statistics.schema.d.ts.map