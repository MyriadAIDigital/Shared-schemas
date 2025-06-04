// src/interfaces/client-setting.interface.ts

export interface IPromptSetting {
    promptId: number;
    settings: Record<string, any>; // Free-form JSON; refine as needed
}

export interface DndHours {
    startTime: string;
    endTime: string;
}

export interface WhatsappProviderSetting {
    enabled: boolean;
    apiKey: string | null;
}

export interface WhatsappSetting {
    netcore: WhatsappProviderSetting;
    wati: WhatsappProviderSetting;
    defaultProvider: 'netcore' | 'wati' | 'none';
}

export interface TelephonyProviderSetting {
    enabled: boolean;
    apiKey: string | null;
    accountId: string | null;
    credits: number;
    phoneNumbers: string[];
}

/**
 * Only includes providers that are enabled
 */
export interface TelephonySettingsResponse {
    plivo?: TelephonyProviderSetting;
    twilio?: TelephonyProviderSetting;
    defaultProvider: 'plivo' | 'twilio' | 'none';
}

/**
 * Phone numbers grouped by provider, only for enabled ones
 */
export interface TelephonyPhoneNumbersResponse {
    plivo?: string[];
    twilio?: string[];
}

export interface IClientSetting {
    promptSettings: IPromptSetting[];
    dndHours: DndHours;
    maxConcurrency: number;
    perMinuteRate: number;
    whatsappSetting: WhatsappSetting;
    telephonySetting: TelephonySettingsResponse;

    createdAt: Date;
    updatedAt: Date;
}
