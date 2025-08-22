export interface UltravoxResponse {
    /** Agent identifier used internally */
    agentId: string;
    /** Display name of the agent */
    name: string;
    /** Join URL for real-time interaction (e.g., meeting or demo link) */
    joinUrl: string;
}
interface VADSettings {
    turnEndpointDelay: string;
    minimumTurnDuration: string;
    minimumInterruptionDuration: string;
    frameActivationThreshold: number;
}
interface FirstSpeakerSettings {
    agent: {
        uninterruptible: boolean;
        text: string;
        delay: string;
    };
}
interface InactivityMessage {
    duration: string;
    message: string;
    endBehavior?: string;
}
interface SelectedTool {
    toolId: string;
    nameOverride: string;
    descriptionOverride: string;
}
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
interface AgentStatistics {
    calls: number;
}
export interface UltravoxGetAgent {
    agentId: string;
    name: string;
    created: string;
    callTemplate: CallTemplate;
    statistics: AgentStatistics;
}
export {};
//# sourceMappingURL=ultravoxResponse.interface.d.ts.map