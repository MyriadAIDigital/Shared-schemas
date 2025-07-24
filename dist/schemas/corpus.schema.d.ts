import { Document } from 'mongoose';
import { CorpusStatus } from '../enums/user-enums';
export type CorpusDocument = Corpus & Document;
declare class CorpusStats {
    status: CorpusStatus;
    lastUpdated?: Date;
    numChunks?: number;
    numDocs?: number;
    numVectors?: number;
}
export declare class Corpus {
    name: string;
    description: string;
    externalCorpusId: string;
    created: Date;
    stats: CorpusStats;
}
export declare const CorpusSchema: import("mongoose").Schema<Corpus, import("mongoose").Model<Corpus, any, any, any, Document<unknown, any, Corpus, any> & Corpus & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Corpus, Document<unknown, {}, import("mongoose").FlatRecord<Corpus>, {}> & import("mongoose").FlatRecord<Corpus> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export {};
//# sourceMappingURL=corpus.schema.d.ts.map