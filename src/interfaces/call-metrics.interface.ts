// src/interfaces/call-metrics.interface.ts

import { Document } from 'mongoose';

export interface ICallMetrics {
    tenantID: string;
    date: string;                  // e.g., '2025-04-14'
    totalCalls: number;
    answeredCalls: number;
    meetingsScheduled: number;
    followUpsScheduled: number;
    callsNotConnected: number;
    perMinuteRate: number;
    totalTalkTime: number;         // in seconds
    isLive: boolean;
    averageTalkTime: number;       // in seconds
    totalBillingTalkTime?: number; // rounded to nearest minute
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


