export interface UltravoxResponse {
    /** Agent identifier used internally */
    agentId: string;

    /** Display name of the agent */
    name: string;

    /** Join URL for real-time interaction (e.g., meeting or demo link) */
    joinUrl: string;

    /** Extend this interface with additional Ultravox-specific fields as needed */
}
