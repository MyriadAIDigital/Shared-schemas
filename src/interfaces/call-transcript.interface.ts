// src/interfaces/call-transcript.interface.ts

import { Document } from 'mongoose';

export interface IConversationMessage {
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
}

export interface ICallTranscript {
    phoneNumber: string;
    callId: string;
    createdAt: Date;
    conversation: IConversationMessage[];
}


