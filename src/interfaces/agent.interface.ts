import { Types } from 'mongoose';
import { EndBehavior, ModelType, InitialOutputMedium, AgentType } from '../enums/user-enums';


export interface IInactivityMessage {
        duration: number;
        message: string;
        endBehavior: EndBehavior;
}

export interface IAgentSpeakerSettings {
        uninterruptible: boolean;
        text: string;
        delay: number;
}

export interface IUserSpeakerSettings {
        text: string;
        delay: number;
        prompt?: string;
}

export interface IFirstSpeakerSettings {
        agent?: IAgentSpeakerSettings;
        user?: IUserSpeakerSettings;
}

export interface IVadSettings {
        turnEndpointDelay: number;
        minimumTurnDuration: number;
        minimumInterruptionDuration: number;
        frameActivationThreshold: number;
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
        joinTimeout: number;
        maxDuration: number;
        inactivityMessages: IInactivityMessage[];
        firstSpeakerSettings: IFirstSpeakerSettings;
        vadSettings: IVadSettings;
}

export interface IAgent {
        _id?: Types.ObjectId;
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
        createdAt?: Date;
        updatedAt?: Date;
}
