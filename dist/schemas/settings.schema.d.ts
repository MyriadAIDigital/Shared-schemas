import { Document, Schema as MongooseSchema, Model } from 'mongoose';
export type SettingsDocument = Settings & Document;
export declare class Settings {
    llms: Array<{
        llm: string;
        inputTokenCostInDollars: string;
        outputTokenCostInDollars: string;
    }>;
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
export declare const SettingsSchema: MongooseSchema<SettingsDocument, Model<SettingsDocument>>;
//# sourceMappingURL=settings.schema.d.ts.map