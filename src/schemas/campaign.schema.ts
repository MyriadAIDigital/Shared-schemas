// src/schemas/campaign.schema.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types, Schema as MongooseSchema, Model } from 'mongoose';
import { VoiceType, VoiceSource, CallingModel, CampaignType, TelephonicProviders, CampaignStatus, ContactSourceType, OngoingStatusSubType, RescheduleType } from '../enums/user-enums';


export type CampaignDocument = Campaign & Document;

@Schema({
    timestamps: true,
    autoCreate: false,
    autoIndex: false,
})
export class Campaign {
    @Prop({ required: true, type: Types.ObjectId, ref: 'VoiceGallery' })
    voiceGalleryId!: Types.ObjectId;

    @Prop({ required: true, type: Types.ObjectId, ref: 'ClientVoiceGallery', index: true })
    clientVoiceGalleryId!: Types.ObjectId;

    @Prop({ required: true, type: Number, default: 0 })
    totalContacts!: number;

    @Prop({ required: true })
    voiceId!: string;

    @Prop({ required: true, enum: VoiceType })
    voiceType!: VoiceType;

    @Prop({ required: true, enum: VoiceSource })
    voiceSource!: VoiceSource;

    @Prop({ required: true, enum: CallingModel, default: CallingModel.DEFAULT })
    callingModel!: CallingModel;

    @Prop({ required: true, type: Types.ObjectId, ref: 'User' })
    userId!: Types.ObjectId;

    @Prop({ required: true })
    displayVoiceName!: string;

    @Prop({ required: true })
    defaultVoiceNameOrId!: string;

    @Prop({ required: true, index: true })
    name!: string;

    @Prop({ required: true })
    tenantID!: string;

    @Prop({ required: true, enum: CampaignType })
    type!: CampaignType;

    @Prop({ required: true, enum: TelephonicProviders, default: TelephonicProviders.PLIVO })
    telephonicProvider!: TelephonicProviders;

    @Prop({ required: true })
    outboundPhoneNo!: string;

    @Prop({ default: true })
    isLiveMode!: boolean;

    @Prop({ required: false, default: '' })
    startDate!: string;

    @Prop({ required: false, default: '' })
    startTime!: string;

    @Prop({ required: false, default: '' })
    endTime!: string;

    @Prop({ required: true })
    enableReattempts!: boolean;

    @Prop({ required: false, type: Number, default: 1 })
    reattemptGap!: number;

    @Prop({ required: true, type: Number })
    maxCallAttempts!: number;

    @Prop({ required: true, type: Types.ObjectId, ref: 'ContactList' })
    contactListId!: Types.ObjectId;

    @Prop({ required: true, type: Types.ObjectId, ref: 'workflows' })
    workflowId!: Types.ObjectId;

    @Prop({ required: true })
    timezone!: string;

    @Prop({ required: true, enum: CampaignStatus, default: CampaignStatus.NOT_STARTED })
    status!: CampaignStatus;

    @Prop({ required: true, type: Number, default: 1 })
    promptId!: number;

    @Prop({ type: String, enum: ContactSourceType, required: true })
    contactSource!: ContactSourceType;

    @Prop({ type: String })
    webhookUrl?: string;

    @Prop({ type: Boolean, default: false })
    shiftedToNextDay!: boolean;

    @Prop({ type: Date, required: false })
    nextScheduledDate?: Date;

    @Prop({ type: Boolean, default: false })
    reattemptDone!: boolean;

    @Prop({ required: true, enum: OngoingStatusSubType, default: OngoingStatusSubType.NOT_UPDATED })
    ongoingStatus!: OngoingStatusSubType;

    @Prop({ type: Number, default: 0 })
    callsMade!: number;

    @Prop({ type: Number, default: 0 })
    callsAnswered!: number;

    @Prop({ type: Number, default: 0 })
    meetingsScheduled!: number;

    @Prop({ type: Number, default: 0 })
    followUpNeeded!: number;

    @Prop({ required: true, enum: RescheduleType, default: RescheduleType.NOT_STARTED })
    rescheduleType!: RescheduleType;

    @Prop({ type: Number, default: 0 })
    rescheduleCount!: number;

    @Prop({ type: Boolean, default: false })
    allowLateNightCalls!: boolean;

    @Prop({ type: Boolean, default: false })
    isEmailSend!: boolean;

    @Prop({ type: String, default: '21:30' })
    clientCutoffStart!: string;

    @Prop({ type: String, default: '09:00' })
    clientCutoffEnd!: string;

    @Prop({ required: false, type: Types.ObjectId, })
    agentId!: Types.ObjectId;

    @Prop({ required: true, index: true })
    createdAt!: Date; // ✅ Non-null assertion (you know Mongoose will populate it)

}

export const CampaignSchema = SchemaFactory.createForClass(Campaign) as unknown as MongooseSchema<
    CampaignDocument,
    Model<CampaignDocument>
>;
