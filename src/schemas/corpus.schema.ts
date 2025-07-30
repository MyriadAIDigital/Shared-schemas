import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { CorpusStatus, CorpusType } from '../enums/user-enums';

export type CorpusDocument = Corpus & Document;

@Schema({ _id: false })
class CorpusStats {
    @Prop({
        required: true,
        enum: CorpusStatus,
        default: CorpusStatus.CORPUS_STATUS_UNSPECIFIED,
    })
    status!: CorpusStatus;

    @Prop({ type: Date })
    lastUpdated?: Date;

    @Prop({ type: Number, default: 0 })
    numChunks?: number;

    @Prop({ type: Number, default: 0 })
    numDocs?: number;

    @Prop({ type: Number, default: 0 })
    numVectors?: number;
}

@Schema({
    timestamps: true,
    autoCreate: false,
    autoIndex: false,
    strict: true,
})
export class Corpus {
    @Prop({ required: true, trim: true })
    name!: string;

    @Prop({ required: true, trim: true })
    description!: string;

    @Prop({ required: true, unique: true, index: true })
    externalCorpusId!: string;

    @Prop({ type: Date, default: () => new Date(), index: true })
    created!: Date;

    @Prop({
        type: CorpusStats,
        default: () => ({ status: CorpusStatus.CORPUS_STATUS_UNSPECIFIED }),
    })
    stats!: CorpusStats;

    @Prop({ type: Boolean, default: false })
    isCreatedByMyriadai!: boolean;

    @Prop({
        type: String,
        enum: CorpusType,
        default: CorpusType.MyriadaiModel2,
    })
    type!: CorpusType;
}

export const CorpusSchema = SchemaFactory.createForClass(Corpus);
