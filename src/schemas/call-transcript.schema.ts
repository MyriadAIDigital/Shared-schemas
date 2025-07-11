// src/schemas/call-transcript.schema.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Model, Schema as MongooseSchema } from 'mongoose';

export type CallTranscriptDocument = CallTranscript & Document;

@Schema({
    timestamps: true,
    versionKey: false,
    autoCreate: false,
    autoIndex: false,
})
export class CallTranscript {
    @Prop({ required: true })
    phoneNumber!: string;

    @Prop({ required: true, unique: true, index: true })
    callId!: string;

    @Prop({ type: Date, default: () => new Date(), index: true })
    createdAt!: Date;

    @Prop({
        type: [
            {
                role: { type: String, required: true },
                content: { type: String, required: true },
                isInterruption: { type: Boolean, default: false },
                startTimestamp: { type: String, default: null },
                endTimestamp: { type: String, default: null },
                callStageMessageIndex: { type: Number, default: null },
                callStageId: { type: String, default: null },
                audioUrl: { type: String, default: null },
                timespan: {
                    type: {
                        start: { type: String, default: null },
                        end: { type: String, default: null },
                    },
                    default: null,
                },
            },
        ],
        _id: false,
    })
    conversation!: Array<{
        role: string;
        content: string;
        isInterruption: boolean;
        startTimestamp: string | null;
        endTimestamp: string | null;
        callStageMessageIndex?: number | null;
        callStageId?: string | null;
        audioUrl?: string | null;
        timespan?: { start: string | null; end: string | null };
    }>;
}

export const CallTranscriptSchema = SchemaFactory.createForClass(CallTranscript) as unknown as MongooseSchema<
    CallTranscriptDocument,
    Model<CallTranscriptDocument>
>;;
