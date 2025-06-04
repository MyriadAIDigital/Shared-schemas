// src/interfaces/voice-gallery.interface.ts

import { Document } from 'mongoose';
import { VoiceType, VoiceSource, VoiceGender, CallingModel } from '../enums/user-enums';


export interface IVoiceGallery {
    type: VoiceType;                  // Premium or Standard
    source: VoiceSource;              // ElevenLabs or Azure
    voiceId?: string;                 // Required if source is ElevenLabs
    voiceGender?: VoiceGender;
    callingModel: CallingModel;
    voiceName?: string;               // Required if source is Azure
    fileUrl: string;                  // The file URL for the voice asset
    description: string;              // A description for the voice
    isEnabled: boolean;               // Whether the voice is enabled for the client
    isDefault: boolean;
    isCreditSufficient: boolean;      // Indicates if the system has sufficient credits for this voice
    predefinedVoiceName: string;      // Fixed name for internal system validation
    createdAt: Date;                  // Timestamp for when the voice was created
    maxVoicesAllowed: number;         // 4 or 10 voices allowed for the client
    isVoicePermanentlyDisabled: boolean;
    additionalMetadata?: Record<string, any>;
    updatedAt: Date;
}


