import { Document } from 'mongoose';
export type CallMetricsDocument = CallMetrics & Document;
export declare class CallMetrics {
    tenantID: string;
    date: string;
    totalCalls: number;
    answeredCalls: number;
    meetingsScheduled: number;
    followUpsScheduled: number;
    callsNotConnected: number;
    perMinuteRate: number;
    totalTalkTime: number;
    isLive: boolean;
    averageTalkTime: number;
    totalBillingTalkTime?: number;
    averageBillingTalkTime?: number;
    lifetimeTotalCalls: number;
    lifetimeAnsweredCalls: number;
    lifetimeTalkTime: number;
    lifetimeAverageTalkTime: number;
    lifetimeBillingTalkTime: number;
    lifetimeBillingAverageTalkTime: number;
}
export declare const CallMetricsSchema: import("mongoose").Schema<CallMetrics, import("mongoose").Model<CallMetrics, any, any, any, Document<unknown, any, CallMetrics, any> & CallMetrics & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, CallMetrics, Document<unknown, {}, import("mongoose").FlatRecord<CallMetrics>, {}> & import("mongoose").FlatRecord<CallMetrics> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=call-metrics.schema.d.ts.map