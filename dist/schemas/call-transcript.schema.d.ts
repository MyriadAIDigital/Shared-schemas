import { Document, Model, Schema as MongooseSchema } from 'mongoose';
export type CallTranscriptDocument = CallTranscript & Document;
export declare class CallTranscript {
    phoneNumber: string;
    callId: string;
    createdAt: Date;
    conversation: Array<{
        role: string;
        content: string;
        isInterruption: boolean;
        startTimestamp: string | null;
        endTimestamp: string | null;
        callStageMessageIndex?: number | null;
        callStageId?: string | null;
        audioUrl?: string | null;
        timespan?: {
            start: string | null;
            end: string | null;
        };
    }>;
}
export declare const CallTranscriptSchema: MongooseSchema<CallTranscriptDocument, Model<CallTranscriptDocument>>;
//# sourceMappingURL=call-transcript.schema.d.ts.map