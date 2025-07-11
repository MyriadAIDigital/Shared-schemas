// src/schemas/client-voice-gallery.schema.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types, Schema as MongooseSchema, Model } from 'mongoose';
import { CallingModel, VoiceType, VoiceSource, VoiceGender } from '../enums/user-enums';


export type ClientVoiceGalleryDocument = ClientVoiceGallery & Document;

@Schema({
    timestamps: true,
    versionKey: false,
    autoCreate: false,
    autoIndex: false,
})
export class ClientVoiceGallery {
    @Prop({ required: true, type: Types.ObjectId, ref: 'VoiceGallery' })
    voiceGalleryId!: Types.ObjectId;

    @Prop({ required: true, enum: CallingModel, default: CallingModel.DEFAULT })
    callingModel!: CallingModel;

    @Prop({ required: true, type: Types.ObjectId, ref: 'User' })
    userId!: Types.ObjectId;

    @Prop({ required: true })
    tenantID!: string;

    @Prop({ required: true })
    displayAgentName!: string;

    @Prop({ required: true, enum: VoiceType })
    type!: VoiceType;

    @Prop({ required: true, enum: VoiceSource })
    source!: VoiceSource;

    @Prop()
    voiceId?: string;

    @Prop({ required: true, enum: VoiceGender })
    voiceGender?: VoiceGender;

    @Prop()
    voiceName?: string;

    @Prop({ required: true })
    fileUrl!: string;

    @Prop({ required: true })
    description!: string;

    @Prop({ required: true, default: false })
    isEnabled!: boolean;

    @Prop({ required: true, default: true })
    isCreditSufficient!: boolean;

    @Prop({ required: true, default: false })
    isDefault!: boolean;

    @Prop({ required: true, unique: true })
    predefinedVoiceName!: string;

    @Prop({ required: true, default: () => new Date() })
    createdAt!: Date;

    @Prop({ required: true, default: 4 })
    maxVoicesAllowed!: number;

    @Prop({ default: false })
    isVoicePermanentlyDisabled!: boolean;

    @Prop({ type: Object })
    additionalMetadata?: Record<string, any>;
}

export const ClientVoiceGallerySchema =
    SchemaFactory.createForClass(ClientVoiceGallery) as unknown as MongooseSchema<
        ClientVoiceGalleryDocument, Model<ClientVoiceGalleryDocument>>;
