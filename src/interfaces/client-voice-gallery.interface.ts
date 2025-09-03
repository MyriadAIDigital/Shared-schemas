// src/interfaces/client-voice-gallery.interface.ts

import { Document, Types } from 'mongoose';
import { CallingModel, VoiceType, VoiceSource, VoiceGender, RegionCode } from '../enums/user-enums';

export interface IClientVoiceGallery {
    _id: Types.ObjectId;
    voiceGalleryId: Types.ObjectId;
    callingModel: CallingModel;
    userId: Types.ObjectId;
    tenantID: string;
    displayAgentName: string;
    type: VoiceType;
    source: VoiceSource;
    voiceId?: string;
    voiceGender?: VoiceGender;
    voiceName?: string;
    fileUrl: string;
    description: string;
    isEnabled: boolean;
    isCreditSufficient: boolean;
    isDefault: boolean;
    predefinedVoiceName: string;
    createdAt: Date;
    maxVoicesAllowed: number;
    isVoicePermanentlyDisabled: boolean;
    regionCode: RegionCode;               // Market/country for this voice (ISO 3166-1 alpha-2 like 'IN', 'US')
    additionalMetadata?: Record<string, any>;
    updatedAt: Date;
}


