import { Document, Model, Schema as MongooseSchema } from 'mongoose';
declare class PromptSetting {
    promptId: number;
    settings: Record<string, any>;
}
export type ClientSettingDocument = ClientSetting & Document;
export declare class ClientSetting {
    promptSettings: PromptSetting[];
    dndHours: {
        startTime: string;
        endTime: string;
    };
    maxConcurrency: number;
    perMinuteRate: number;
    sandboxAgentRatePerMinute: number;
    whatsappSetting: {
        netcore: {
            enabled: boolean;
            apiKey: string | null;
        };
        wati: {
            enabled: boolean;
            apiKey: string | null;
        };
        defaultProvider: 'netcore' | 'wati' | 'none';
    };
    telephonySetting: {
        plivo: {
            enabled: boolean;
            apiKey: string | null;
            accountId: string | null;
            credits: number;
            phoneNumbers: string[];
        };
        twilio: {
            enabled: boolean;
            apiKey: string | null;
            accountId: string | null;
            credits: number;
            phoneNumbers: string[];
        };
        defaultProvider: 'plivo' | 'twilio' | 'none';
    };
}
export declare const ClientSettingSchema: MongooseSchema<ClientSettingDocument, Model<ClientSettingDocument>>;
export {};
//# sourceMappingURL=client-setting.schema.d.ts.map