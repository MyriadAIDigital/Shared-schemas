import { Types } from 'mongoose';
import { AgentType, CallingModel } from '../enums/user-enums';

export interface IParameterSchema {
  description?: string;
  type?: string;
}

export interface IDynamicParameter {
  name: string;
  location: string;
  schema: IParameterSchema;
  required?: boolean;
}

export interface IStaticParameter {
  name: string;
  location: string;
  value?: string;
}

export interface IAutomaticParameter {
  name: string;
  location: string;
  knownValue?: string;
}

export interface IHttpSchema {
  baseUrlPattern: string;
  httpMethod: string;
}

export interface IDefinitionSchema {
  modelToolName: string;
  description: string;
  timeout?: string;
  staticParameters: IStaticParameter[];
  dynamicParameters: IDynamicParameter[];
  automaticParameters: IAutomaticParameter[];
  http: IHttpSchema;
}

export interface IAgentTools {
  _id?: Types.ObjectId;
  name: string;
  definition: IDefinitionSchema;
  description?: string;
  type: AgentType;
  voiceDbId: Types.ObjectId;
  voiceName: string;
  callingModel: CallingModel;
  displayVoiceName: string;
  response?: any;
  createdAt?: Date;
  toolId: string;
  created?: Date;
  ownership?: string;
}
