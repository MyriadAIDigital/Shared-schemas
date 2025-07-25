import { Document, Types, Schema as MongooseSchema, Model } from 'mongoose';
import { AgentType, CallingModel } from '../enums/user-enums';
export type AgentToolsDocument = AgentTools & Document;
declare class ParameterSchema {
    description?: string;
    type?: string;
}
declare class DynamicParameter {
    name: string;
    location: string;
    schema: ParameterSchema;
    required: boolean;
}
declare class StaticParameter {
    name: string;
    location: string;
    value?: string;
}
declare class AutomaticParameter {
    name: string;
    location: string;
    knownValue?: string;
}
declare class HttpSchema {
    baseUrlPattern: string;
    httpMethod: string;
}
declare class DefinitionSchema {
    modelToolName: string;
    description: string;
    timeout?: string;
    staticParameters: StaticParameter[];
    dynamicParameters: DynamicParameter[];
    automaticParameters: AutomaticParameter[];
    http: HttpSchema;
}
export declare class AgentTools {
    name: string;
    definition: DefinitionSchema;
    description: string;
    type: AgentType;
    voiceDbId: Types.ObjectId;
    voiceName: string;
    callingModel: CallingModel;
    displayVoiceName: string;
    response: any;
    createdAt: Date;
    toolId: string;
    created?: Date;
    ownership: string;
}
export declare const AgentToolsSchema: MongooseSchema<AgentToolsDocument, Model<AgentToolsDocument>>;
export {};
//# sourceMappingURL=agent-tools.schema.d.ts.map