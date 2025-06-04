import { Document, Schema as MongooseSchema } from 'mongoose';
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
export declare const CallTranscriptSchema: MongooseSchema<CallTranscript, import("mongoose").Model<CallTranscript, any, any, any, Document<unknown, any, CallTranscript, any> & CallTranscript & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, CallTranscript, Document<unknown, {}, import("mongoose").FlatRecord<CallTranscript>, {}> & import("mongoose").FlatRecord<CallTranscript> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=call-transcript.schema.d.ts.map