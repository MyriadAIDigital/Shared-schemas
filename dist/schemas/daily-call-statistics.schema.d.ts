import { Document, Types, Schema as MongooseSchema } from 'mongoose';
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
export declare const DailyCallStatisticsSchema: MongooseSchema<DailyCallStatistics, import("mongoose").Model<DailyCallStatistics, any, any, any, Document<unknown, any, DailyCallStatistics, any> & DailyCallStatistics & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, DailyCallStatistics, Document<unknown, {}, import("mongoose").FlatRecord<DailyCallStatistics>, {}> & import("mongoose").FlatRecord<DailyCallStatistics> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=daily-call-statistics.schema.d.ts.map