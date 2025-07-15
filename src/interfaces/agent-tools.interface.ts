import { AgentToolsType } from "../enums/user-enums";

export interface IAgentTools {
  modelToolName: string;
  description: string;
  type: AgentToolsType;
  http: Record<string, string>;
  dynamicParameters: Record<string, any>[];
  staticParameters: Record<string, any>[];
  automaticParameters: Record<string, string>[];
}
