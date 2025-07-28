import { AgentType, EndBehavior, ModelType, InitialOutputMedium } from '../enums/user-enums';
import { Types } from 'mongoose';
export interface IInactivityMessage {
    duration: string;
    message: string;
    endBehavior: EndBehavior;
}
export interface IAgentSpeakerSettings {
    uninterruptible: boolean;
    text: string;
    delay: string;
}
export interface IUserSpeakerSettings {
    text: string;
    delay: string;
    prompt?: string;
}
export interface IFirstSpeakerSettings {
    agent?: IAgentSpeakerSettings;
    user?: IUserSpeakerSettings;
}
export interface IVadSettings {
    turnEndpointDelay: string;
    minimumTurnDuration: string;
    minimumInterruptionDuration: string;
    frameActivationThreshold: string;
}
export interface ICallTemplate {
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
    joinTimeout: string;
    maxDuration: string;
    inactivityMessages: IInactivityMessage[];
    firstSpeakerSettings: IFirstSpeakerSettings;
    vadSettings: IVadSettings;
}
export interface IAgent {
    _id: Types.ObjectId;
    name: string;
    callTemplate: ICallTemplate;
    agentId: string;
    description?: string;
    type: AgentType;
    voiceDbId: Types.ObjectId;
    voiceName: string;
    callingModel: string;
    displayVoiceName: string;
    agentCreatedAt?: Date;
    isCreatedByMyriadai?: boolean;
    isLiveMode?: boolean;
}
//# sourceMappingURL=agent.interface.d.ts.map