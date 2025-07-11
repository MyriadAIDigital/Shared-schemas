// src/schemas/call-metrics.schema.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Model, Schema as MongooseSchema, } from 'mongoose';

export type CallMetricsDocument = CallMetrics & Document;

@Schema({
    timestamps: true,
    autoCreate: false,
    autoIndex: false,
})
export class CallMetrics {
    @Prop({ required: true, index: true })
    tenantID!: string;

    @Prop({ required: true, index: true })
    date!: string; // e.g., '2025-04-14'

    @Prop({ required: true })
    totalCalls!: number;

    @Prop({ required: true })
    answeredCalls!: number;

    @Prop({ required: true })
    meetingsScheduled!: number;

    @Prop({ required: true })
    followUpsScheduled!: number;

    @Prop({ required: true })
    callsNotConnected!: number;

    @Prop({ required: true })
    perMinuteRate!: number;

    @Prop({ required: true })
    totalTalkTime!: number; // in seconds

    @Prop({ required: true, default: false })
    isLive!: boolean;

    @Prop({ required: true })
    averageTalkTime!: number; // in seconds

    @Prop()
    totalBillingTalkTime?: number; // rounded to nearest minute

    @Prop()
    averageBillingTalkTime?: number; // rounded to nearest minute

    @Prop({ default: 0 })
    lifetimeTotalCalls!: number;

    @Prop({ default: 0 })
    lifetimeAnsweredCalls!: number;

    @Prop({ default: 0 })
    lifetimeTalkTime!: number;

    @Prop({ default: 0 })
    lifetimeAverageTalkTime!: number;

    @Prop({ default: 0 })
    lifetimeBillingTalkTime!: number;

    @Prop({ default: 0 })
    lifetimeBillingAverageTalkTime!: number;
}

export const CallMetricsSchema = SchemaFactory.createForClass(CallMetrics) as unknown as MongooseSchema<
    CallMetricsDocument,
    Model<CallMetricsDocument>
>;