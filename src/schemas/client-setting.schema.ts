// src/schemas/client‐setting.schema.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Model, Schema as MongooseSchema } from 'mongoose';

@Schema({ _id: false })
class PromptSetting {
    @Prop({ required: true })
    promptId!: number;

    @Prop({ type: Object, default: {} })
    settings!: Record<string, any>;
}

export type ClientSettingDocument = ClientSetting & Document;

@Schema({ timestamps: true })
export class ClientSetting {
    @Prop({ type: [PromptSetting], default: [] })
    promptSettings!: PromptSetting[];

    @Prop({
        type: {
            startTime: { type: String, required: true },
            endTime: { type: String, required: true },
        },
        required: true,
    })
    dndHours!: {
        startTime: string;
        endTime: string;
    };

    @Prop({ type: Number, default: 10 })
    maxConcurrency!: number;

    @Prop({ type: Number, required: true, default: 9.15 })
    perMinuteRate!: number;

    @Prop({
        type: {
            netcore: {
                enabled: { type: Boolean, default: false },
                apiKey: { type: String, default: null },
            },
            wati: {
                enabled: { type: Boolean, default: false },
                apiKey: { type: String, default: null },
            },
            defaultProvider: {
                type: String,
                enum: ['netcore', 'wati', 'none'],
                default: 'none',
            },
        },
        default: {
            netcore: { enabled: false, apiKey: null },
            wati: { enabled: false, apiKey: null },
            defaultProvider: 'none',
        },
    })
    whatsappSetting!: {
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

    @Prop({
        type: {
            plivo: {
                enabled: { type: Boolean, default: false },
                apiKey: { type: String, default: null },
                accountId: { type: String, default: null },
                credits: { type: Number, default: 0 },
                phoneNumbers: { type: [String], default: [] },
            },
            twilio: {
                enabled: { type: Boolean, default: false },
                apiKey: { type: String, default: null },
                accountId: { type: String, default: null },
                credits: { type: Number, default: 0 },
                phoneNumbers: { type: [String], default: [] },
            },
            defaultProvider: {
                type: String,
                enum: ['plivo', 'twilio', 'none'],
                default: 'none',
            },
        },
        default: {
            plivo: {
                enabled: false,
                apiKey: null,
                accountId: null,
                credits: 0,
                phoneNumbers: [],
            },
            twilio: {
                enabled: false,
                apiKey: null,
                accountId: null,
                credits: 0,
                phoneNumbers: [],
            },
            defaultProvider: 'none',
        },
    })
    telephonySetting!: {
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

// **Do NOT cast to MongooseSchema<…>. Let Nest infer it.**
export const ClientSettingSchema = SchemaFactory.createForClass(ClientSetting) as unknown as MongooseSchema<
    ClientSettingDocument,
    Model<ClientSettingDocument>
>;
