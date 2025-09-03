import { Document, Model, Schema as MongooseSchema } from 'mongoose';
import { VoiceType, VoiceSource, VoiceGender, CallingModel, RegionCode } from '../enums/user-enums';
export type VoiceGalleryDocument = VoiceGallery & Document;
export declare class VoiceGallery {
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
    isCreditSufficient: boolean;
    predefinedVoiceName: string;
    createdAt: Date;
    maxVoicesAllowed: number;
    isVoicePermanentlyDisabled: boolean;
    additionalMetadata?: Record<string, any>;
    regionCode: RegionCode;
}
export declare const VoiceGallerySchema: MongooseSchema<VoiceGalleryDocument, Model<VoiceGalleryDocument>>;
//# sourceMappingURL=voice-gallery.schema.d.ts.map