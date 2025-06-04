import { Document, Model, Schema as MongooseSchema } from 'mongoose';
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
export declare const CallMetricsSchema: MongooseSchema<CallMetricsDocument, Model<CallMetricsDocument>>;
//# sourceMappingURL=call-metrics.schema.d.ts.map