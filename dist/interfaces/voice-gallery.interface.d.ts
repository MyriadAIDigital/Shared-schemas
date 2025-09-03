import { VoiceType, VoiceSource, VoiceGender, CallingModel, RegionCode } from '../enums/user-enums';
export interface IVoiceGallery {
    type: VoiceType;
    source: VoiceSource;
    voiceId?: string;
    voiceGender?: VoiceGender;
    callingModel: CallingModel;
    voiceName?: string;
    fileUrl: string;
    description: string;
    isEnabled: boolean;
    isDefault: boolean;
    regionCode: RegionCode;
    isCreditSufficient: boolean;
    predefinedVoiceName: string;
    createdAt: Date;
    maxVoicesAllowed: number;
    isVoicePermanentlyDisabled: boolean;
    additionalMetadata?: Record<string, any>;
    updatedAt: Date;
}
//# sourceMappingURL=voice-gallery.interface.d.ts.map