// src/schemas/follow-up-call.schema.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types, Schema as MongooseSchema } from 'mongoose';
import { IsEnum } from 'class-validator';
import { CallType, FollowUpStatus } from '../enums/user-enums';


export type FollowUpCallDocument = FollowUpCall & Document;

@Schema({ timestamps: true, versionKey: false })
export class FollowUpCall {
    @Prop({ type: Types.ObjectId, ref: 'Campaign', required: true, index: true })
    campaignId!: Types.ObjectId;

    @Prop({ type: Types.ObjectId, ref: 'ContactList', required: true, index: true })
    contactListId!: Types.ObjectId;

    @Prop({ type: Types.ObjectId, ref: 'Contact', required: true, index: true })
    contactId!: Types.ObjectId;

    @Prop({ required: true, type: Date, index: true })
    followUpDateTimeUtc!: Date;

    @Prop({ required: true, type: Date, index: true })
    followUpDateTimeInTimeZone!: Date;

    @Prop({ required: true })
    campaignTimeZone!: string;

    @IsEnum(CallType)
    @Prop({
        type: String,
        enum: CallType,
        default: CallType.FOLLOW_UP_CALL,
    })
    callType!: CallType;

    @IsEnum(FollowUpStatus)
    @Prop({
        type: String,
        enum: FollowUpStatus,
        default: FollowUpStatus.PENDING,
    })
    status!: FollowUpStatus;

    @Prop({ type: String, default: null })
    notes!: string | null;
}

export const FollowUpCallSchema = SchemaFactory.createForClass(FollowUpCall);

// Indexes for efficient querying
FollowUpCallSchema.index({ followUpDateTimeUtc: 1, campaignId: 1 });
FollowUpCallSchema.index({ followUpDateTimeInTimeZone: 1, campaignId: 1 });
FollowUpCallSchema.index({ contactListId: 1, contactId: 1 });
