import { Types } from 'mongoose';
import { AgentToolsType, CallingModel } from '../enums/user-enums';

export interface IAgentTools {
  toolId: string;              // Unique identifier for the tool
  name: string;                // Tool display name
  created: Date | string;      // ISO string or Date
  ownership: string;           // "private" or "public"

  // Voice and model configuration
  voiceDbId: Types.ObjectId;   // MongoDB ObjectId reference to voice
  voiceName: string;           // Internal voice name (e.g., "en-US-JennyNeural")
  displayVoiceName: string;    // User-facing voice name (e.g., "Jenny")
  callingModel: CallingModel;        // e.g., "gpt-4", "gpt-3.5-turbo"
  type: AgentToolsType; // Type of tool (e.g., HTTP, DB, SCRIPT)
  // Response object for any static or default config
  response: Record<string, any>; // Custom/default response configuration

  // Agent metadata
  agentCreatedAt: Date | string;

  // Tool Definition
  definition: {
    modelToolName: string;     // Internal model name
    description: string;       // Description of the tool
    timeout?: string;          // e.g., "2.5s"
    type?: AgentToolsType;     // Optional: HTTP, DB, SCRIPT, etc.

    http: {
      baseUrlPattern: string;  // e.g., "https://myriadai.ai"
      httpMethod: string;      // e.g., "GET", "POST"
    };

    staticParameters: IStaticParameter[];         // Hardcoded inputs
    dynamicParameters: IDynamicParameter[];       // User/runtime inputs
    automaticParameters: IAutomaticParameter[];   // System-populated inputs
  };
}

// Static header/body/query param
export interface IStaticParameter {
  name: string;
  location: string;           // PARAMETER_LOCATION_HEADER, etc.
  value?: string;
}

// Dynamic input that user provides at runtime
export interface IDynamicParameter {
  name: string;
  location: string;           // PARAMETER_LOCATION_BODY, etc.
  schema?: {
    description?: string;
    type?: string;
  };
  required?: boolean;
}

// Parameters automatically filled by system
export interface IAutomaticParameter {
  name: string;
  location: string;           // PARAMETER_LOCATION_BODY, etc.
  knownValue?: string;        // KNOWN_PARAM_CALL_ID, etc.
}
