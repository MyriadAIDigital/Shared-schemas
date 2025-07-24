import { CorpusStatus, CorpusType } from "../enums/user-enums";
export interface ICorpusStats {
    status: CorpusStatus;
    lastUpdated?: Date;
    numChunks?: number;
    numDocs?: number;
    numVectors?: number;
}
export interface ICorpus {
    name: string;
    description: string;
    externalCorpusId: string;
    created: Date;
    stats: ICorpusStats;
    isCreatedByMyriadai: boolean;
    type: CorpusType;
}
//# sourceMappingURL=corpus.interface.d.ts.map