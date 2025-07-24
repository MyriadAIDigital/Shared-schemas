import { CorpusStatus } from "../enums/user-enums";
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
}
//# sourceMappingURL=corpus.interface.d.ts.map