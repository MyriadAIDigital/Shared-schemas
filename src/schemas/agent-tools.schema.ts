import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { AgentType, CallingModel } from '../enums/user-enums';
import moment from 'moment';

export type AgentDocument = Agent & Document;

// Schema for schema inside dynamicParameters
@Schema({ _id: false })
class ParameterSchema {
    @Prop({ required: false })
    description?: string;

    @Prop({ required: false })
    type?: string;
}

// Dynamic Parameters
@Schema({ _id: false })
class DynamicParameter {
    @Prop({ required: true })
    name!: string;

    @Prop({ required: true })
    location!: string;

    @Prop({ type: ParameterSchema, default: {} })
    schema!: ParameterSchema;

    @Prop({ type: Boolean, default: false })
    required!: boolean;
}

// Static Parameters
@Schema({ _id: false })
class StaticParameter {
    @Prop({ required: true })
    name!: string;

    @Prop({ required: true })
    location!: string;

    @Prop({ required: false })
    value?: string;
}

// Automatic Parameters
@Schema({ _id: false })
class AutomaticParameter {
    @Prop({ required: true })
    name!: string;

    @Prop({ required: true })
    location!: string;

    @Prop({ required: false })
    knownValue?: string;
}

// HTTP schema
@Schema({ _id: false })
class HttpSchema {
    @Prop({ required: true })
    baseUrlPattern!: string;

    @Prop({ required: true })
    httpMethod!: string;
}

// Full definition
@Schema({ _id: false })
class DefinitionSchema {
    @Prop({ required: true })
    modelToolName!: string;

    @Prop({ required: true })
    description!: string;

    @Prop({ required: false })
    timeout!: string;

    @Prop({ type: [StaticParameter], default: [] })
    staticParameters!: StaticParameter[];

    @Prop({ type: [DynamicParameter], default: [] })
    dynamicParameters!: DynamicParameter[];

    @Prop({ type: [AutomaticParameter], default: [] })
    automaticParameters!: AutomaticParameter[];

    @Prop({ type: HttpSchema, default: {} })
    http!: HttpSchema;
}

@Schema({
    timestamps: true,
    autoCreate: false,
    autoIndex: false,
})
export class Agent {
    @Prop({ required: true })
    name!: string;

    @Prop({ type: DefinitionSchema, required: true })
    definition!: DefinitionSchema;

    @Prop({ required: true })
    agentId!: string;

    @Prop({ default: '' })
    description!: string;

    @Prop({ required: true })
    type!: AgentType;

    @Prop({ type: Types.ObjectId, required: true })
    voiceDbId!: Types.ObjectId;

    @Prop({ required: true })
    voiceName!: string;

    @Prop({ required: true })
    callingModel!: CallingModel;

    @Prop({ required: true })
    displayVoiceName!: string;

    @Prop({ type: Object, required: true, default: {} })
    response!: any;

    @Prop({ type: Date, default: () => moment().utc().toDate(), index: true })
    createdAt!: Date;
    // 🔽 Newly added fields per updated response
    @Prop({ required: true })
    toolId!: string;

    @Prop({ type: Date })
    created!: Date;

    @Prop({ default: 'private' })
    ownership!: string;
}

export const AgentSchema = SchemaFactory.createForClass(Agent);
