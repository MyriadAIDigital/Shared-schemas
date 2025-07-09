// src/schemas/settings.schema.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types, Schema as MongooseSchema, Model } from 'mongoose';

export type SettingsDocument = Settings & Document;

@Schema({
    timestamps: true,
    autoCreate: false, // ✅ Prevents "NamespaceExists" error in Azure Cosmos DB
})
export class Settings {
    @Prop({
        type: [
            {
                llm: { type: String, required: true, default: 'gpt-4o-mini' },
                inputTokenCostInDollars: { type: String, required: true, default: '0.00000015' },
                outputTokenCostInDollars: { type: String, required: true, default: '0.0000006' },
            },
        ],
        required: true,
        default: [],
    })
    llms!: Array<{
        llm: string;
        inputTokenCostInDollars: string;
        outputTokenCostInDollars: string;
    }>;

    @Prop({ required: true, default: '0.00012' })
    ttsElevenLabsCostPerCharInDollars!: string;

    @Prop({ required: true, default: '0.000024' })
    ttsAzureCostPerCharInDollars!: string;

    @Prop({ required: true, default: '0.0059' })
    sttDeepgramCostPerMinuteInDollars!: string;

    @Prop({ required: true, default: '0.004' })
    sttAzureCostPerMinuteInDollars!: string;

    @Prop({ default: 0.005 })
    telephonicServiceProviderBillingRate!: number;

    @Prop({ default: () => new Date() })
    createdAt!: Date;

    @Prop({ required: true, default: 0 })
    exchangeRateInrToUsd!: number;

    @Prop({ required: true, default: 4 })
    callBatchDelay!: number;

    @Prop({ required: true, default: 10 })
    callBatchSize!: number;

    @Prop({ default: 0 })
    serviceCharge!: number;

    @Prop({ default: () => new Date() })
    updatedAt!: Date;
}

export const SettingsSchema = SchemaFactory.createForClass(Settings) as unknown as MongooseSchema<
    SettingsDocument,
    Model<SettingsDocument>
>;
