import { Document, Types } from 'mongoose';
export type CorpusDocument = Corpus & Document;
export declare class Corpus {
    name: string;
    description: string;
    externalCorpusId: string;
    createdAt: Date;
}
export declare const CorpusSchema: import("mongoose").Schema<Corpus, import("mongoose").Model<Corpus, any, any, any, Document<unknown, any, Corpus, any> & Corpus & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Corpus, Document<unknown, {}, import("mongoose").FlatRecord<Corpus>, {}> & import("mongoose").FlatRecord<Corpus> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=corpus.schema.d.ts.map