import { Document } from 'mongoose';
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
    createdBy?: string;
}
export declare const ClientSettingSchema: import("mongoose").Schema<ClientSetting, import("mongoose").Model<ClientSetting, any, any, any, Document<unknown, any, ClientSetting, any> & ClientSetting & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ClientSetting, Document<unknown, {}, import("mongoose").FlatRecord<ClientSetting>, {}> & import("mongoose").FlatRecord<ClientSetting> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export {};
//# sourceMappingURL=client-setting.schema.d.ts.map