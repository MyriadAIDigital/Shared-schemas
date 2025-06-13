// src/schemas/call-queue-data.schema.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import moment from 'moment';
import { Document, Types, Schema as MongooseSchema, Model } from 'mongoose';
import { CallType, CampaignType, CallQueueStatus, QueueStatus } from '../enums/user-enums';


@Schema({ timestamps: true })
export class CallQueueData {
    @Prop({ required: true })
    tenantId!: string;

    @Prop({ required: true, type: Types.ObjectId, ref: 'Campaign' })
    campaignId!: Types.ObjectId;

    @Prop({ required: true, type: Types.ObjectId, ref: 'Contact' })
    contactId!: Types.ObjectId;

    @Prop({ required: true, type: Types.ObjectId, ref: 'CampaignContact' })
    campaignContactId!: Types.ObjectId;

    @Prop({ required: false, default: '' })
    callId!: string;

    @Prop({ required: true, enum: CallType })
    callType!: CallType;

    @Prop({ required: false })
    timezone?: string;

    @Prop({ required: false, enum: CampaignType })
    campaignType?: CampaignType;

    @Prop({ required: false })
    isLiveMode?: boolean;

    @Prop({ required: false })
    startDate?: string;

    @Prop({ required: false })
    startTime?: string;

    @Prop({ required: false })
    endTime?: string;

    @Prop({ required: true, enum: CallQueueStatus, default: CallQueueStatus.NEW })
    status!: CallQueueStatus;

    // New field: queueStatus indicates the processing stage of the queue
    @Prop({ required: true, enum: QueueStatus, default: QueueStatus.NOT_STARTED })
    queueStatus!: QueueStatus;

    @Prop({ type: Date, required: false })
    startDateTime?: Date;

    @Prop({ type: Date, required: false })
    endDateTime?: Date;

    @Prop({ type: Date, default: () => moment().utc().toDate() })
    createdAt!: Date;

    @Prop({ type: Date, default: () => moment().utc().toDate() })
    updatedAt!: Date;
}

export type CallQueueDataDocument = CallQueueData & Document;

export const CallQueueDataSchema = SchemaFactory.createForClass(CallQueueData) as unknown as MongooseSchema<
    CallQueueDataDocument,
    Model<CallQueueDataDocument>
>;
