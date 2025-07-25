import { Types } from 'mongoose';
import { CallingModel, VoiceType, VoiceSource, VoiceGender } from '../enums/user-enums';
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
    additionalMetadata?: Record<string, any>;
    updatedAt: Date;
}
//# sourceMappingURL=client-voice-gallery.interface.d.ts.map