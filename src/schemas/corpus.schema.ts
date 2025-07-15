// src/agent/entities/agent.entity.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type CorpusDocument = Corpus & Document;

@Schema({ timestamps: true, autoCreate:false ,autoIndex: false, strict: true })
export class Corpus {
    @Prop({ required: true })
    name!: string;

    @Prop({ required: true})
    description!: string;

    @Prop({ required: true})
    externalCorpusId!: string;

    @Prop({ type: Date, default: () => new Date(),index:true })
    createdAt!: Date;
    
}

export const CorpusSchema = SchemaFactory.createForClass(Corpus);