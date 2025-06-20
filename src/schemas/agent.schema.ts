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

    @Prop({ required: true})
    agentId!: string;

    @Prop({ required: true })
    type!: AgentType;

    @Prop({ type:Types.ObjectId, required: true })
    voiceDbId!: Types.ObjectId;

    @Prop({required: true})
    voiceName!: string;

    @Prop({ type: Object, required: true, default: {} })
    response!: any;

    @Prop({ type: Date, default: () => new Date(),index:true })
    agentCreatedAt!: Date;
}

export const AgentSchema = SchemaFactory.createForClass(Agent);