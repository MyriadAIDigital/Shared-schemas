// src/schemas/daily-call-statistics.schema.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types, Schema as MongooseSchema, Model } from 'mongoose';

export type DailyCallStatisticsDocument = DailyCallStatistics & Document;

@Schema({
    timestamps: true,
    versionKey: false,
    autoCreate: false,
    autoIndex: false,
})
export class DailyCallStatistics {
    @Prop({ required: true, index: true })
    date!: string;

    @Prop({ required: true })
    isLiveMode!: boolean;

    @Prop({ required: true, default: 0 })
    totalCalls!: number;

    @Prop({ required: true, default: 0 })
    totalDurationSeconds!: number;

    @Prop({ required: true, type: Types.ObjectId, ref: 'User' })
    userId!: Types.ObjectId;

    @Prop({ required: true })
    tenantID!: string;

    @Prop({ default: 0 })
    llmInputTokens!: number;

    @Prop({ default: 0 })
    llmOutputTokens!: number;

    @Prop({ default: 0 })
    llmTotalTokens!: number;

    @Prop({ default: 0 })
    llmCost!: number;

    @Prop({ default: 0 })
    llmInputCostInDollars!: number;

    @Prop({ default: 0 })
    llmOutputCostInDollars!: number;

    @Prop({ default: 0 })
    ttsCharacters!: number;

    @Prop({ default: 0 })
    ttsCost!: number;

    @Prop({ default: 0 })
    sttDuration!: number;

    @Prop({ default: 0 })
    sttCost!: number;

    @Prop({ default: 0 })
    ourServiceCharge!: number;

    @Prop({ default: 0 })
    telephonicServiceProviderCallBillingDuration!: number;

    @Prop({ default: 0.005 })
    telephonicServiceProviderBillingRate!: number;

    @Prop({ default: 0 })
    telephonicServiceProviderTotalCost!: number;

    @Prop({ default: 0 })
    totalCostWithoutServiceCharge!: number;

    @Prop({ default: 0 })
    totalCostWithServiceCharge!: number;

    @Prop({ type: Date, default: () => new Date(), index: true })
    createdAt!: Date;
}

export const DailyCallStatisticsSchema = SchemaFactory.createForClass(DailyCallStatistics) as unknown as MongooseSchema<
    DailyCallStatisticsDocument,
    Model<DailyCallStatisticsDocument>
>;
