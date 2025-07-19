// src/agent/entities/agent.entity.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { AgentToolsType } from '../enums/user-enums';

export type AgentToolsDocument = AgentTools & Document;

@Schema({ timestamps: true, autoCreate:false ,autoIndex: false, })
export class AgentTools {
    @Prop({ required: true })
    modelToolName!: string;

    @Prop({ required: true})
    description!: string;

    @Prop({ required: true, enum: Object.values(AgentToolsType) })
    type!: AgentToolsType;

    @Prop({ type: Object, default: {} })
    http!: Record<string, string>;

    @Prop({ type: [Object], default: [] })
    dynamicParameters!: Record<string, any>[];

    @Prop({ type: [Object], default: [] })
    staticParameters!: Record<string, any>[];

    @Prop({ type: [Object], default: [] })
    automaticParameters!: Record<string, string>[];

    @Prop({ type: Boolean, required: true })
    precomputeable!: boolean;

    @Prop({ type: Date, default: () => new Date(),index:true })
    agentToolsCreatedAt!: Date;
    
}


export const AgentToolsSchema = SchemaFactory.createForClass(AgentTools);