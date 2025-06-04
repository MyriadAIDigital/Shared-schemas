import { Document, Types, Schema as MongooseSchema } from 'mongoose';
import { VoiceType, VoiceSource, CallingModel, CampaignType, TelephonicProviders, CampaignStatus, ContactSourceType, OngoingStatusSubType, RescheduleType } from '../enums/user-enums';
export type CampaignDocument = Campaign & Document;
export declare class Campaign {
    voiceGalleryId: Types.ObjectId;
    clientVoiceGalleryId: Types.ObjectId;
    totalContacts: number;
    voiceId: string;
    voiceType: VoiceType;
    voiceSource: VoiceSource;
    callingModel: CallingModel;
    userId: Types.ObjectId;
    displayVoiceName: string;
    defaultVoiceNameOrId: string;
    name: string;
    tenantID: string;
    type: CampaignType;
    telephonicProvider: TelephonicProviders;
    outboundPhoneNo: string;
    isLiveMode: boolean;
    startDate: string;
    startTime: string;
    endTime: string;
    enableReattempts: boolean;
    reattemptGap: number;
    maxCallAttempts: number;
    contactListId: Types.ObjectId;
    workflowId: Types.ObjectId;
    timezone: string;
    status: CampaignStatus;
    promptId: number;
    contactSource: ContactSourceType;
    webhookUrl?: string;
    shiftedToNextDay: boolean;
    nextScheduledDate?: Date;
    reattemptDone: boolean;
    ongoingStatus: OngoingStatusSubType;
    callsMade: number;
    callsAnswered: number;
    meetingsScheduled: number;
    followUpNeeded: number;
    rescheduleType: RescheduleType;
    rescheduleCount: number;
    allowLateNightCalls: boolean;
    isEmailSend: boolean;
    clientCutoffStart: string;
    clientCutoffEnd: string;
}
export declare const CampaignSchema: MongooseSchema<Campaign, import("mongoose").Model<Campaign, any, any, any, Document<unknown, any, Campaign, any> & Campaign & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Campaign, Document<unknown, {}, import("mongoose").FlatRecord<Campaign>, {}> & import("mongoose").FlatRecord<Campaign> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=campaign.schema.d.ts.map