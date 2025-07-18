import { Types } from "mongoose";
import { CorpusDocument } from "../schemas/corpus.schema";

export interface ICorpusSource {
    name: string;
    description: string;
    externalSourceId: string;
    externalCorpusId: string;
    corpusId: Types.ObjectId;
    crawlDepth: number;
    webUrls: string[];
    documents: CorpusDocument[];
}