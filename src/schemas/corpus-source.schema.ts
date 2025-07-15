// src/agent/entities/agent.entity.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type CorpusSourceDocument = CorpusSource & Document;


export class CorpusDocument {
    @Prop({ required: true })
    externalDocumentId!: string;

    @Prop({ required: true })
    internalDocumentUrl!: string;
}

@Schema({ timestamps: true, autoIndex: false, autoCreate:false, strict: true })
export class CorpusSource {
    @Prop({ required: true })
    name!: string;

    @Prop({ required: true})
    description!: string;

    @Prop({ required: true})
    externalSourceId!: string;

    @Prop({ required: true})
    externalCorpusId!: string;

    @Prop({ required: true})
    corpusId!: Types.ObjectId;

    @Prop({ required: true })
    crawlDepth!: number;

    @Prop({ required: true })
    webUrls!: string[];

    @Prop({ type: [CorpusDocument], required: true })
    documents!: CorpusDocument[];

    @Prop({ type: Date, default: () => new Date(),index:true })
    createdAt!: Date;
    
}

export const CorpusSourceSchema = SchemaFactory.createForClass(CorpusSource);