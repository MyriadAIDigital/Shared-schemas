import { Document, Types } from 'mongoose';
export type AgentDocument = Agent & Document;
export declare class Agent {
    name: string;
    callTemplate: any;
    agentId: string;
    voiceDbId: Types.ObjectId;
    response: any;
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