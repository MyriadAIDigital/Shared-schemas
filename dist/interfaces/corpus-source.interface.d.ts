import { Types } from "mongoose";
import { CorpusSubDocument } from "../schemas";
export interface ICorpusSource {
    name: string;
    description: string;
    externalSourceId: string;
    externalCorpusId: string;
    corpusId: Types.ObjectId;
    crawlDepth: number;
    webUrls: string[];
    documents: CorpusSubDocument[];
}
//# sourceMappingURL=corpus-source.interface.d.ts.map