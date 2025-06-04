"use strict";
// src/schemas/campaign.schema.ts
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampaignSchema = exports.Campaign = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_enums_1 = require("../enums/user-enums");
let Campaign = class Campaign {
};
exports.Campaign = Campaign;
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: mongoose_2.Types.ObjectId, ref: 'VoiceGallery' }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Campaign.prototype, "voiceGalleryId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: mongoose_2.Types.ObjectId, ref: 'ClientVoiceGallery', index: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Campaign.prototype, "clientVoiceGalleryId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: Number, default: 0 }),
    __metadata("design:type", Number)
], Campaign.prototype, "totalContacts", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Campaign.prototype, "voiceId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, enum: user_enums_1.VoiceType }),
    __metadata("design:type", String)
], Campaign.prototype, "voiceType", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, enum: user_enums_1.VoiceSource }),
    __metadata("design:type", String)
], Campaign.prototype, "voiceSource", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, enum: user_enums_1.CallingModel, default: user_enums_1.CallingModel.DEFAULT }),
    __metadata("design:type", String)
], Campaign.prototype, "callingModel", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: mongoose_2.Types.ObjectId, ref: 'User' }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Campaign.prototype, "userId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Campaign.prototype, "displayVoiceName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Campaign.prototype, "defaultVoiceNameOrId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, index: true }),
    __metadata("design:type", String)
], Campaign.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Campaign.prototype, "tenantID", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, enum: user_enums_1.CampaignType }),
    __metadata("design:type", String)
], Campaign.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, enum: user_enums_1.TelephonicProviders, default: user_enums_1.TelephonicProviders.PLIVO }),
    __metadata("design:type", String)
], Campaign.prototype, "telephonicProvider", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Campaign.prototype, "outboundPhoneNo", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: true }),
    __metadata("design:type", Boolean)
], Campaign.prototype, "isLiveMode", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false, default: '' }),
    __metadata("design:type", String)
], Campaign.prototype, "startDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false, default: '' }),
    __metadata("design:type", String)
], Campaign.prototype, "startTime", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false, default: '' }),
    __metadata("design:type", String)
], Campaign.prototype, "endTime", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Boolean)
], Campaign.prototype, "enableReattempts", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false, type: Number, default: 1 }),
    __metadata("design:type", Number)
], Campaign.prototype, "reattemptGap", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: Number }),
    __metadata("design:type", Number)
], Campaign.prototype, "maxCallAttempts", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: mongoose_2.Types.ObjectId, ref: 'ContactList' }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Campaign.prototype, "contactListId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: mongoose_2.Types.ObjectId, ref: 'workflows' }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Campaign.prototype, "workflowId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Campaign.prototype, "timezone", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, enum: user_enums_1.CampaignStatus, default: user_enums_1.CampaignStatus.NOT_STARTED }),
    __metadata("design:type", String)
], Campaign.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: Number, default: 1 }),
    __metadata("design:type", Number)
], Campaign.prototype, "promptId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, enum: user_enums_1.ContactSourceType, required: true }),
    __metadata("design:type", String)
], Campaign.prototype, "contactSource", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Campaign.prototype, "webhookUrl", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], Campaign.prototype, "shiftedToNextDay", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date, required: false }),
    __metadata("design:type", Date)
], Campaign.prototype, "nextScheduledDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], Campaign.prototype, "reattemptDone", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, enum: user_enums_1.OngoingStatusSubType, default: user_enums_1.OngoingStatusSubType.NOT_UPDATED }),
    __metadata("design:type", String)
], Campaign.prototype, "ongoingStatus", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, default: 0 }),
    __metadata("design:type", Number)
], Campaign.prototype, "callsMade", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, default: 0 }),
    __metadata("design:type", Number)
], Campaign.prototype, "callsAnswered", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, default: 0 }),
    __metadata("design:type", Number)
], Campaign.prototype, "meetingsScheduled", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, default: 0 }),
    __metadata("design:type", Number)
], Campaign.prototype, "followUpNeeded", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, enum: user_enums_1.RescheduleType, default: user_enums_1.RescheduleType.NOT_STARTED }),
    __metadata("design:type", String)
], Campaign.prototype, "rescheduleType", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, default: 0 }),
    __metadata("design:type", Number)
], Campaign.prototype, "rescheduleCount", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], Campaign.prototype, "allowLateNightCalls", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], Campaign.prototype, "isEmailSend", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: '21:30' }),
    __metadata("design:type", String)
], Campaign.prototype, "clientCutoffStart", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: '09:00' }),
    __metadata("design:type", String)
], Campaign.prototype, "clientCutoffEnd", void 0);
exports.Campaign = Campaign = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Campaign);
exports.CampaignSchema = mongoose_1.SchemaFactory.createForClass(Campaign);
