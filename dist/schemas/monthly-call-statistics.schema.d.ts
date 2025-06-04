import { Document, Types } from 'mongoose';
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
export declare const MonthlyCallStatisticsSchema: import("mongoose").Schema<MonthlyCallStatistics, import("mongoose").Model<MonthlyCallStatistics, any, any, any, Document<unknown, any, MonthlyCallStatistics, any> & MonthlyCallStatistics & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, MonthlyCallStatistics, Document<unknown, {}, import("mongoose").FlatRecord<MonthlyCallStatistics>, {}> & import("mongoose").FlatRecord<MonthlyCallStatistics> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=monthly-call-statistics.schema.d.ts.map