import { Document, Types } from 'mongoose';
import { AgentType } from '../enums/user-enums';
export type AgentDocument = Agent & Document;
export declare class Agent {
    name: string;
    callTemplate: any;
    agentId: string;
    type: AgentType;
    voiceDbId: Types.ObjectId;
    voiceName: string;
    response: any;
    agentCreatedAt: Date;
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
//# sourceMappingURL=agent.schema.d.ts.map