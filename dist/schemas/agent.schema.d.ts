import { Document, Types } from 'mongoose';
import { EndBehavior, ModelType, InitialOutputMedium, AgentType, RegionCode } from '../enums/user-enums';
export type AgentDocument = Agent & Document;
declare class InactivityMessage {
    duration: string;
    message: string;
    endBehavior: EndBehavior;
}
declare class AgentSpeakerSettings {
    uninterruptible: boolean;
    text: string;
    delay: string;
}
declare class UserSpeakerSettings {
    text: string;
    delay: string;
    prompt?: string;
}
declare class FirstSpeakerSettings {
    agent?: AgentSpeakerSettings;
    user?: UserSpeakerSettings;
}
declare class VadSettings {
    turnEndpointDelay: string;
    minimumTurnDuration: string;
    minimumInterruptionDuration: string;
    frameActivationThreshold: string;
}
declare class SelectedTool {
    toolId: string;
    name: string;
}
declare class BuiltInTool {
    toolName: string;
}
declare class CallTemplate {
    systemPrompt: string;
    voice: string;
    selectedTools?: SelectedTool[];
    builtInTools?: BuiltInTool[];
    corpusId?: string;
    model: ModelType;
    temperature: string;
    initialOutputMedium: InitialOutputMedium;
    languageHint: string;
    recordingEnabled: boolean;
    timeExceededMessage: string;
    joinTimeout: string;
    maxDuration: string;
    inactivityMessages: InactivityMessage[];
    firstSpeakerSettings: FirstSpeakerSettings;
    vadSettings: VadSettings;
    summarizePrompt: string;
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
    regionCode: RegionCode;
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