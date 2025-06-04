import { Document, Types, Schema as MongooseSchema } from 'mongoose';
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
export declare const SettingsSchema: MongooseSchema<Settings, import("mongoose").Model<Settings, any, any, any, Document<unknown, any, Settings, any> & Settings & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Settings, Document<unknown, {}, import("mongoose").FlatRecord<Settings>, {}> & import("mongoose").FlatRecord<Settings> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=settings.schema.d.ts.map