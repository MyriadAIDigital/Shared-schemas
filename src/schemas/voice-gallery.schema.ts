// src/schemas/voice-gallery.schema.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { VoiceType, VoiceSource, VoiceGender, CallingModel } from '../enums/user-enums';


export type VoiceGalleryDocument = VoiceGallery & Document;

@Schema({ timestamps: true, versionKey: false })
export class VoiceGallery {
    @Prop({ required: true, enum: VoiceType })
    type!: VoiceType;  // Premium or Standard

    @Prop({ required: true, enum: VoiceSource })
    source!: VoiceSource;  // ElevenLabs or Azure

    @Prop()
    voiceId?: string;  // Required if source is ElevenLabs

    @Prop({ required: true, enum: VoiceGender })
    voiceGender?: VoiceGender;

    @Prop({ required: true, enum: CallingModel, default: CallingModel.DEFAULT })
    callingModel!: CallingModel;

    @Prop()
    voiceName?: string;  // Required if source is Azure

    @Prop({ required: true })
    fileUrl!: string;  // The file URL for the voice asset

    @Prop({ required: true })
    description!: string;  // A description for the voice

    @Prop({ required: true, default: true })
    isEnabled!: boolean;  // Whether the voice is enabled for the client

    @Prop({ required: true, default: false })
    isDefault!: boolean;

    @Prop({ required: true, default: true })
    isCreditSufficient!: boolean;  // Indicates if the system has sufficient credits for this voice

    @Prop({ required: true, unique: true })
    predefinedVoiceName!: string;  // Fixed name for internal system validation

    @Prop({ required: true, default: () => new Date() })
    createdAt!: Date;  // Timestamp for when the voice was created

    @Prop({ required: true, default: 4 })
    maxVoicesAllowed!: number;  // 4 or 10 voices allowed for the client

    @Prop({ default: false })
    isVoicePermanentlyDisabled!: boolean;  // Flag to permanently disable a voice if credits are exhausted and cannot be re-enabled

    @Prop({ type: Object })
    additionalMetadata?: Record<string, any>;  // Optional metadata field to store any extra information
}

export const VoiceGallerySchema = SchemaFactory.createForClass(VoiceGallery);
