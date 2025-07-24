// src/agent/entities/corpus-source.schema.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { CorpusSourceType } from '../enums/user-enums';

export type CorpusSourceDocument = CorpusSource & Document;

export class CorpusSubDocument {
    @Prop({ required: true })
    externalDocumentId!: string;

    @Prop({ required: true })
    internalDocumentUrl!: string;
}

@Schema({ timestamps: true, autoCreate: false, autoIndex: false, strict: true })
export class CorpusSource {
    @Prop({ required: true })
    name!: string;

    @Prop({ required: true })
    description!: string;

    @Prop({ required: true })
    externalSourceId!: string;

    @Prop({ required: true })
    externalCorpusId!: string;

    @Prop({ required: true })
    corpusId!: Types.ObjectId; // reference to Corpus

    @Prop({ required: true })
    crawlDepth!: number;

    @Prop({ required: true })
    webUrls!: string[];

    @Prop({ type: [CorpusSubDocument], required: true })
    documents!: CorpusSubDocument[];

    @Prop({ type: Date, default: () => new Date(), index: true })
    createdAt!: Date;

    @Prop({ type: Boolean, default: false })
    isCreatedByMyriadai!: boolean;

    @Prop({
        type: String,
        enum: CorpusSourceType,
        default: CorpusSourceType.WEB,
    })
    type!: CorpusSourceType;
}

export const CorpusSourceSchema = SchemaFactory.createForClass(CorpusSource);
