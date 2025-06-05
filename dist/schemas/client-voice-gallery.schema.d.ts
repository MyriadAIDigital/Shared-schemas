import { Document, Types, Schema as MongooseSchema, Model } from 'mongoose';
import { CallingModel, VoiceType, VoiceSource, VoiceGender } from '../enums/user-enums';
export type ClientVoiceGalleryDocument = ClientVoiceGallery & Document;
export declare class ClientVoiceGallery {
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
}
export declare const ClientVoiceGallerySchema: MongooseSchema<ClientVoiceGalleryDocument, Model<ClientVoiceGalleryDocument>>;
//# sourceMappingURL=client-voice-gallery.schema.d.ts.map