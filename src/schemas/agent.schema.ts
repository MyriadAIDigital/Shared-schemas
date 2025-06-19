// src/agent/entities/agent.entity.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { AgentType } from '../enums/user-enums';

export type AgentDocument = Agent & Document;

@Schema({ timestamps: true })
export class Agent {
    @Prop({ required: true })
    name!: string;

    @Prop({ type: Object, required: true })
    callTemplate!: any;

    @Prop({ required: true, default: '' })
    agentId!: string;

    @Prop({ required: true, default: '' })
    type!: AgentType;

    @Prop({ type:Types.ObjectId, required: true, default: '' })
    voiceDbId!: Types.ObjectId;

    @Prop({ type:Types.string, required: true, default: '' })
    voiceName!: string;

    @Prop({ type: Object, required: true, default: {} })
    response!: any;
}

export const AgentSchema = SchemaFactory.createForClass(Agent);