import { Document, Types } from 'mongoose';
import { EndBehavior, ModelType, InitialOutputMedium, AgentType } from '../enums/user-enums';
export type AgentDocument = Agent & Document;
declare class InactivityMessage {
    duration: number;
    message: string;
    endBehavior: EndBehavior;
}
declare class AgentSpeakerSettings {
    uninterruptible: boolean;
    text: string;
    delay: number;
}
declare class UserSpeakerSettings {
    text: string;
    delay: number;
    prompt?: string;
}
declare class FirstSpeakerSettings {
    agent?: AgentSpeakerSettings;
    user?: UserSpeakerSettings;
}
declare class VadSettings {
    turnEndpointDelay: number;
    minimumTurnDuration: number;
    minimumInterruptionDuration: number;
    frameActivationThreshold: number;
}
declare class CallTemplate {
    systemPrompt: string;
    voice: string;
    selectedTools?: string[];
    corpusId?: string;
    model: ModelType;
    temperature: string;
    initialOutputMedium: InitialOutputMedium;
    languageHint: string;
    recordingEnabled: boolean;
    timeExceededMessage: string;
    joinTimeout: number;
    maxDuration: number;
    inactivityMessages: InactivityMessage[];
    firstSpeakerSettings: FirstSpeakerSettings;
    vadSettings: VadSettings;
}
export declare class Agent {
    name: string;
    callTemplate: CallTemplate;
    agentId: string;
    description: string;
    type: AgentType;
    voiceDbId: Types.ObjectId;
    voiceName: string;
    callingModel: string;
    displayVoiceName: string;
    agentCreatedAt: Date;
    isCreatedByMyriadai: boolean;
    isLiveMode: boolean;
}
export declare const AgentSchema: import("mongoose").Schema<Agent, import("mongoose").Model<Agent, any, any, any, Document<unknown, any, Agent, any> & Agent & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Agent, Document<unknown, {}, import("mongoose").FlatRecord<Agent>, {}> & import("mongoose").FlatRecord<Agent> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export {};
//# sourceMappingURL=agent.schema.d.ts.map