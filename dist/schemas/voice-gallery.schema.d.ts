import { Document } from 'mongoose';
import { VoiceType, VoiceSource, VoiceGender, CallingModel } from '../enums/user-enums';
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
}
export declare const VoiceGallerySchema: import("mongoose").Schema<VoiceGallery, import("mongoose").Model<VoiceGallery, any, any, any, Document<unknown, any, VoiceGallery, any> & VoiceGallery & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, VoiceGallery, Document<unknown, {}, import("mongoose").FlatRecord<VoiceGallery>, {}> & import("mongoose").FlatRecord<VoiceGallery> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=voice-gallery.schema.d.ts.map