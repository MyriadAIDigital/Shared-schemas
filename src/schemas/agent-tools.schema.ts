import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types, Schema as MongooseSchema, Model } from 'mongoose';
import { AgentToolsType, AgentType, CallingModel } from '../enums/user-enums';

export type AgentToolsDocument = AgentTools & Document;

// Parameter schema used inside dynamic parameters
@Schema({ _id: false })
class ParameterSchema {
    @Prop()
    description?: string;

    @Prop()
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

    @Prop({ default: false })
    required!: boolean;
}

// Static Parameters
@Schema({ _id: false })
class StaticParameter {
    @Prop({ required: true })
    name!: string;

    @Prop({ required: true })
    location!: string;

    @Prop()
    value?: string;
}

// Automatic Parameters
@Schema({ _id: false })
class AutomaticParameter {
    @Prop({ required: true })
    name!: string;

    @Prop({ required: true })
    location!: string;

    @Prop()
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

// Full Definition schema
@Schema({ _id: false })
class DefinitionSchema {
    @Prop({ required: true })
    modelToolName!: string;

    @Prop({ required: true })
    description!: string;

    @Prop()
    timeout?: string;

    @Prop({ type: [StaticParameter], default: [] })
    staticParameters!: StaticParameter[];

    @Prop({ type: [DynamicParameter], default: [] })
    dynamicParameters!: DynamicParameter[];

    @Prop({ type: [AutomaticParameter], default: [] })
    automaticParameters!: AutomaticParameter[];

    @Prop({ type: HttpSchema, default: {} })
    http!: HttpSchema;
}

// Main AgentTools schema
@Schema({
    timestamps: true,
    autoCreate: false,
    autoIndex: false,
})
export class AgentTools {
    @Prop({ required: true })
    name!: string;

    @Prop({ type: DefinitionSchema, required: true })
    definition!: DefinitionSchema;

    @Prop({ default: '' })
    description!: string;

    @Prop({ required: true })
    type!: AgentToolsType;


    @Prop({ required: true })
    callingModel!: CallingModel;



    @Prop({ type: Object, default: {} })
    response!: any;

    @Prop({ type: Date, default: () => new Date(), index: true })
    createdAt!: Date;

    @Prop({ required: true })
    externalToolId!: string;

    @Prop({ type: Boolean, default: false })
    isCreatedByMyriadai!: boolean;

    @Prop()
    created?: Date;

    @Prop({ default: 'private' })
    ownership!: string;
}

export const AgentToolsSchema = SchemaFactory.createForClass(AgentTools) as unknown as MongooseSchema<
    AgentToolsDocument,
    Model<AgentToolsDocument>>;
