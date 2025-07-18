import { Document, Types } from 'mongoose';
export type CorpusSourceDocument = CorpusSource & Document;
export declare class CorpusDocument {
    externalDocumentId: string;
    internalDocumentUrl: string;
}
export declare class CorpusSource {
    name: string;
    description: string;
    externalSourceId: string;
    externalCorpusId: string;
    corpusId: Types.ObjectId;
    crawlDepth: number;
    webUrls: string[];
    documents: CorpusDocument[];
    createdAt: Date;
}
export declare const CorpusSourceSchema: import("mongoose").Schema<CorpusSource, import("mongoose").Model<CorpusSource, any, any, any, Document<unknown, any, CorpusSource, any> & CorpusSource & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, CorpusSource, Document<unknown, {}, import("mongoose").FlatRecord<CorpusSource>, {}> & import("mongoose").FlatRecord<CorpusSource> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=corpus-source.schema.d.ts.map