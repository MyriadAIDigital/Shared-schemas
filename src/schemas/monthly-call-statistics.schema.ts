// src/schemas/monthly-call-statistics.schema.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Model, Schema as MongooseSchema, Types } from 'mongoose';

export type MonthlyCallStatisticsDocument = MonthlyCallStatistics & Document;

@Schema({ timestamps: true, versionKey: false })
export class MonthlyCallStatistics {
    @Prop({ required: true, index: true })
    month!: string; // Format: YYYY-MM

    @Prop({ required: true })
    isLiveMode!: boolean; // 'liveMode' or 'testMode'

    @Prop({ required: true, default: 0 })
    totalCalls!: number;

    @Prop({ required: true, default: 0 })
    totalDurationSeconds!: number;

    @Prop({ required: true, type: Types.ObjectId, ref: 'User' })
    userId!: Types.ObjectId; // References the User

    @Prop({ required: true })
    tenantID!: string; // Tenant ID associated with the user

    @Prop({ default: 0 })
    llmInputTokens!: number; // LLM input tokens count

    @Prop({ default: 0 })
    llmOutputTokens!: number; // LLM output tokens count

    @Prop({ default: 0 })
    llmTotalTokens!: number; // LLM total tokens count

    @Prop({ default: 0 })
    llmInputCostInDollars!: number; // LLM input cost

    @Prop({ default: 0 })
    llmOutputCostInDollars!: number; // LLM output cost

    @Prop({ default: 0 })
    llmCost!: number; // LLM total charge

    @Prop({ default: 0 })
    ttsCharacters!: number; // TTS input characters count

    @Prop({ default: 0 })
    ttsCost!: number; // TTS cost

    @Prop({ default: 0 })
    sttDuration!: number; // STT duration in seconds

    @Prop({ default: 0 })
    sttCost!: number; // STT cost

    @Prop({ default: 0 })
    ourServiceCharge!: number; // Our service charge

    @Prop({ default: 0 })
    telephonicServiceProviderCallBillingDuration!: number; // Telephonic provider's billable duration

    @Prop({ default: 0.005 })
    telephonicServiceProviderBillingRate!: number; // Telephonic provider's billing rate

    @Prop({ default: 0 })
    telephonicServiceProviderTotalCost!: number; // Telephonic provider's total cost

    @Prop({ default: 0 })
    totalCostWithoutServiceCharge!: number; // Total cost without service charge

    @Prop({ default: 0 })
    totalCostWithServiceCharge!: number; // Total cost with service charge

    @Prop({ type: Date, default: () => new Date(), index: true })
    createdAt!: Date;
}

export const MonthlyCallStatisticsSchema =
    SchemaFactory.createForClass(MonthlyCallStatistics) as unknown as MongooseSchema<
        MonthlyCallStatisticsDocument,
        Model<MonthlyCallStatisticsDocument>
    >;
