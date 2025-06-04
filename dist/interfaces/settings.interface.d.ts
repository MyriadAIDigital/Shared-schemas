export interface ILlmCost {
    llm: string;
    inputTokenCostInDollars: string;
    outputTokenCostInDollars: string;
}
export interface ISettings {
    llms: ILlmCost[];
    ttsElevenLabsCostPerCharInDollars: string;
    ttsAzureCostPerCharInDollars: string;
    sttDeepgramCostPerMinuteInDollars: string;
    sttAzureCostPerMinuteInDollars: string;
    telephonicServiceProviderBillingRate: number;
    createdAt: Date;
    exchangeRateInrToUsd: number;
    callBatchDelay: number;
    callBatchSize: number;
    serviceCharge: number;
    updatedAt: Date;
}
//# sourceMappingURL=settings.interface.d.ts.map