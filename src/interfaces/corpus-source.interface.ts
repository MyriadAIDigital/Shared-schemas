import { Types } from "mongoose";
import { CorpusSubDocument } from "../schemas";
import { CorpusSourceType } from "../enums/user-enums";


export interface ICorpusSource {
    name: string;
    description: string;
    externalSourceId: string;
    externalCorpusId: string;
    corpusId: Types.ObjectId;
    crawlDepth: number;
    webUrls: string[];
    documents: CorpusSubDocument[];
    isCreatedByMyriadai: boolean;
    type: CorpusSourceType;

}