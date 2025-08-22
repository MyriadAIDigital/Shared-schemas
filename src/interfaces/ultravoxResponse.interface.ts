export interface UltravoxResponse {
    /** Agent identifier used internally */
    agentId: string;

    /** Display name of the agent */
    name: string;

    /** Join URL for real-time interaction (e.g., meeting or demo link) */
    joinUrl: string;

    /** Extend this interface with additional Ultravox-specific fields as needed */
}

// Ultravox Agent VAD Settings
interface VADSettings {
    turnEndpointDelay: string;
    minimumTurnDuration: string;
    minimumInterruptionDuration: string;
    frameActivationThreshold: number;
}

// First Speaker Settings
interface FirstSpeakerSettings {
    agent: {
        uninterruptible: boolean;
        text: string;
        delay: string;
    };
}

// Inactivity Message
interface InactivityMessage {
    duration: string;
    message: string;
    endBehavior?: string;
}

// Selected Tool
interface SelectedTool {
    toolId: string;
    nameOverride: string;
    descriptionOverride: string;
}

// Call Template
interface CallTemplate {
    model: string;
    initialOutputMedium: string;
    joinTimeout: string;
    maxDuration: string;
    vadSettings: VADSettings;
    recordingEnabled: boolean;
    firstSpeakerSettings: FirstSpeakerSettings;
    systemPrompt: string;
    temperature: number;
    languageHint: string;
    timeExceededMessage: string;
    inactivityMessages: InactivityMessage[];
    selectedTools: SelectedTool[];
}

// Agent Statistics
interface AgentStatistics {
    calls: number;
}

// Ultravox Get Agent Interface
export interface UltravoxGetAgent {
    agentId: string;
    name: string;
    created: string;
    callTemplate: CallTemplate;
    statistics: AgentStatistics;
}

