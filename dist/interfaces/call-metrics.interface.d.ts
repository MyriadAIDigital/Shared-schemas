export interface ICallMetrics {
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
    createdAt: Date;
    updatedAt: Date;
}
//# sourceMappingURL=call-metrics.interface.d.ts.map