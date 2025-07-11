// src/schemas/call-history.schema.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Model, Schema as MongooseSchema, Types } from 'mongoose';
import { CallType, TelephonicProviders, VoiceSource, SttProvider, CreditDeductionStatus } from '../enums/user-enums';


export type CallHistoryDocument = CallHistory & Document;

@Schema({
    timestamps: true,
    versionKey: false,
    autoCreate: false,
    autoIndex: false,
})
export class CallHistory {
    @Prop({ type: Types.ObjectId, ref: 'ContactList', required: true, index: true })
    contactListId!: Types.ObjectId;

    @Prop({ required: true })
    contactListName!: string;

    @Prop({ type: Types.ObjectId, ref: 'Contact', required: true, index: true })
    contactId!: Types.ObjectId;

    @Prop({ required: true })
    campaignName!: string;

    @Prop({ required: true, type: Types.ObjectId, ref: 'workflows' })
    workflowId!: Types.ObjectId;

    @Prop({ type: Types.ObjectId, ref: 'Campaign', required: true, index: true })
    campaignId!: Types.ObjectId;

    @Prop({ required: true, type: Types.ObjectId, ref: 'User' })
    userId!: Types.ObjectId;

    @Prop({ required: true })
    tenantID!: string;

    @Prop({ required: true, unique: true, index: true })
    callId!: string;

    @Prop({ required: true })
    outcome!: string;

    @Prop({ required: true })
    phone!: string;

    @Prop({ required: true })
    email!: string;

    @Prop({ required: true, type: Date, index: true })
    callDate!: Date;

    @Prop({ required: true, type: Date })
    callTime!: Date;

    @Prop({
        type: String,
        enum: CallType,
        default: CallType.INITIAL_CALL,
    })
    callType!: CallType;

    @Prop({ default: '' })
    recordingUrl!: string;

    @Prop({ required: true })
    timeZone!: string;

    @Prop({ required: true, type: Date, index: true })
    UtcTime!: Date;

    @Prop({ required: true, type: Date, index: true })
    convertedTime!: Date;

    @Prop({ default: 'Unknown' })
    callStatus!: string;

    @Prop({ default: '' })
    ultravoxJoinUrl!: string;

    @Prop({ default: 'NORMAL_CLEARING' })
    hangupCause!: string;

    @Prop({ required: true, default: false })
    isLive!: boolean;

    @Prop({ required: true })
    companyName!: string;

    @Prop({ required: true })
    founderName!: string;

    @Prop({ default: '' })
    interestedInDebt!: string;

    @Prop({ type: Number, default: 9.15 })
    perMinuteRate!: number;

    @Prop({ type: Number, default: 0 })
    totalCallCost!: number;

    @Prop({ default: '' })
    callGenerated!: string;

    @Prop({ default: 'Call Generated successfully.' })
    callSummary!: string;

    @Prop({ default: '' })
    endReason!: string;

    @Prop({
        type: {
            name: { type: String, default: '' },
            phone: { type: String, default: '' },
            email: { type: String, default: '' },
        },
        default: {},
        _id: false,
    })
    alternateContact!: {
        name: string;
        phone: string;
        email: string;
    };

    @Prop({ type: [String], default: [] })
    userSummary!: string[];

    @Prop({ default: '' })
    companyAge!: string;

    @Prop({ default: '' })
    voiceAgentName!: string;

    // createdAt is handled by timestamps: true

    @Prop({
        type: {
            followUpPhoneCallDate: { type: String, default: null },
            followUpPhoneCallTime: { type: String, default: null },
            followUpTimeZone: { type: String, default: '' },
            followUpMeetingDate: { type: String, default: null },
            followUpMeetingTime: { type: String, default: null },
            followUpCallStatus: { type: Boolean, default: false },
            followUpMeetingStatus: { type: Boolean, default: false },
        },
        default: {},
        _id: false,
    })
    followUpInfo!: {
        followUpPhoneCallDate: string | null;
        followUpPhoneCallTime: string | null;
        followUpTimeZone: string;
        followUpMeetingDate: string | null;
        followUpMeetingTime: string | null;
        followUpCallStatus: boolean;
        followUpMeetingStatus: boolean;
    };

    @Prop({ required: true, default: 0 })
    callDuration!: number;

    @Prop({ default: 0 })
    telephonicServiceProviderCallBillingDuration!: number;

    @Prop({ default: 0 })
    telephonicServiceProviderBillingRate!: number;

    @Prop({ default: 0 })
    telephonicServiceProviderTotalCost!: number;

    @Prop({
        type: String,
        enum: TelephonicProviders,
        default: TelephonicProviders.PLIVO,
    })
    telephonicProvider!: TelephonicProviders;

    @Prop({
        type: String,
        enum: VoiceSource,
        default: VoiceSource.ELEVENLABS,
    })
    ttsProvider!: VoiceSource;

    @Prop({
        type: String,
        enum: SttProvider,
        default: SttProvider.DEEPGRAM,
    })
    sttProvider!: SttProvider;

    @Prop({ default: 'gpt-4o-mini-2024-07-18' })
    llm!: string;

    @Prop({ default: 0 })
    llmInputTokens!: number;

    @Prop({ default: 0 })
    llmOutputTokens!: number;

    @Prop({ default: 0 })
    llmtotalTokens!: number;

    @Prop({ default: 0 })
    llmInputCostInDollars!: number;

    @Prop({ default: 0 })
    llmOutputCostInDollars!: number;

    @Prop({ default: 0 })
    llmSummaryInputTokens!: number;

    @Prop({ default: 0 })
    llmSummaryOutputTokens!: number;

    @Prop({ default: 0 })
    llmSummaryInputCostInDollars!: number;

    @Prop({ default: 0 })
    llmSummaryOutputCostInDollars!: number;

    @Prop({ default: '' })
    providerCallId!: string;

    @Prop({ default: 0 })
    llmSummarytotalTokens!: number;

    @Prop({ default: 0 })
    llmSummaryChargeInDollars!: number;

    @Prop({ default: 0 })
    llmChargeInDollars!: number;

    @Prop({ default: 0 })
    ttsTotalCharacters!: number;

    @Prop({ default: 0 })
    ttsChargeInDollars!: number;

    @Prop({ default: 0 })
    sttDuration!: number;

    @Prop({ default: 0 })
    sttChargeInDollars!: number;

    @Prop({ default: 0 })
    serviceCharge!: number;

    @Prop({ default: 0 })
    totalCostWithService!: number;

    @Prop({ default: 0 })
    totalCostWithoutServiceCharge!: number;

    @Prop({ type: Object, default: {} })
    additionalMetadata!: Record<string, any>;

    @Prop({
        type: [MongooseSchema.Types.Mixed],
        default: [],
    })
    whatsappMessages!: Array<Record<string, any>>;

    @Prop({
        type: String,
        enum: Object.values(CreditDeductionStatus),
        default: CreditDeductionStatus.Default,
        required: true,
    })
    creditDeductionStatus!: CreditDeductionStatus;

    @Prop({ type: MongooseSchema.Types.Mixed, default: {} })
    creditDeductionSuccessResponse!: Record<string, any>;

    @Prop({ type: MongooseSchema.Types.Mixed, default: {} })
    creditDeductionErrorResponse!: Record<string, any>;

    @Prop({ required: true, index: true })
    createdAt!: Date; // ✅ Non-null assertion (you know Mongoose will populate it)
}

export const CallHistorySchema = SchemaFactory.createForClass(CallHistory) as unknown as MongooseSchema<
    CallHistoryDocument,
    Model<CallHistoryDocument>
>;
CallHistorySchema.index({ contactListId: 1, contactId: 1 });
