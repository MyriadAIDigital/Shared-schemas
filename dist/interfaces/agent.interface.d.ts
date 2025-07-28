import { Types } from 'mongoose';
import { AgentType } from '../enums/user-enums';
export interface IAgent {
    /** MongoDB ObjectId of the agent document */
    _id: Types.ObjectId;
    /** Unique identifier for the agent (UUID or similar) */
    agentId: string;
    /** Display name for the agent */
    name: string;
    /** Structured template configuration for the agent’s call behavior */
    callTemplate: Record<string, any>;
    /** Type of agent, e.g., AGENT_TOOLS_TYPE_1, etc. */
    type: AgentType;
    /** Reference to the voice configuration DB entry */
    voiceDbId: Types.ObjectId;
    /** Internal voice name used by the system */
    voiceName: string;
    /** Human-friendly display name for the voice */
    displayVoiceName: string;
    /** Calling model name, e.g., "MyriadAI_V2" */
    callingModel: string;
    /** Optional description or notes about the agent */
    description?: string;
    /** Response config or data returned by the assistant */
    response: Record<string, any>;
    /** Flag to indicate whether this agent was created by MyriadAI platform */
    isCreatedByMyriadai?: boolean;
    /** Whether the agent is active/live for calling in production */
    isLiveMode?: boolean;
    /** Timestamp when the agent was created */
    agentCreatedAt: Date;
    /** Timestamps injected by Mongoose (createdAt, updatedAt) */
    createdAt?: Date;
    updatedAt?: Date;
}
//# sourceMappingURL=agent.interface.d.ts.map