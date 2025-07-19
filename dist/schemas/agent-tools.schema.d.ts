import { Document, Types } from 'mongoose';
import { AgentToolsType } from '../enums/user-enums';
export type AgentToolsDocument = AgentTools & Document;
export declare class AgentTools {
    modelToolName: string;
    description: string;
    type: AgentToolsType;
    http: Record<string, string>;
    dynamicParameters: Record<string, any>[];
    staticParameters: Record<string, any>[];
    automaticParameters: Record<string, string>[];
    precomputeable: boolean;
    agentToolsCreatedAt: Date;
}
export declare const AgentToolsSchema: import("mongoose").Schema<AgentTools, import("mongoose").Model<AgentTools, any, any, any, Document<unknown, any, AgentTools, any> & AgentTools & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, AgentTools, Document<unknown, {}, import("mongoose").FlatRecord<AgentTools>, {}> & import("mongoose").FlatRecord<AgentTools> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=agent-tools.schema.d.ts.map