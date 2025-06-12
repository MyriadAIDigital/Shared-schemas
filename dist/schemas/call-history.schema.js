"use strict";
// src/schemas/call-history.schema.ts
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
exports.CallHistorySchema = exports.CallHistory = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_enums_1 = require("../enums/user-enums");
let CallHistory = class CallHistory {
};
exports.CallHistory = CallHistory;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'ContactList', required: true, index: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], CallHistory.prototype, "contactListId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], CallHistory.prototype, "contactListName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Contact', required: true, index: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], CallHistory.prototype, "contactId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], CallHistory.prototype, "campaignName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: mongoose_2.Types.ObjectId, ref: 'workflows' }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], CallHistory.prototype, "workflowId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Campaign', required: true, index: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], CallHistory.prototype, "campaignId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: mongoose_2.Types.ObjectId, ref: 'User' }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], CallHistory.prototype, "userId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], CallHistory.prototype, "tenantID", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: true, index: true }),
    __metadata("design:type", String)
], CallHistory.prototype, "callId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], CallHistory.prototype, "outcome", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], CallHistory.prototype, "phone", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], CallHistory.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: Date, index: true }),
    __metadata("design:type", Date)
], CallHistory.prototype, "callDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: Date }),
    __metadata("design:type", Date)
], CallHistory.prototype, "callTime", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        enum: user_enums_1.CallType,
        default: user_enums_1.CallType.INITIAL_CALL,
    }),
    __metadata("design:type", String)
], CallHistory.prototype, "callType", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: '' }),
    __metadata("design:type", String)
], CallHistory.prototype, "recordingUrl", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], CallHistory.prototype, "timeZone", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: Date, index: true }),
    __metadata("design:type", Date)
], CallHistory.prototype, "UtcTime", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: Date, index: true }),
    __metadata("design:type", Date)
], CallHistory.prototype, "convertedTime", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 'Unknown' }),
    __metadata("design:type", String)
], CallHistory.prototype, "callStatus", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: '' }),
    __metadata("design:type", String)
], CallHistory.prototype, "ultravoxJoinUrl", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 'NORMAL_CLEARING' }),
    __metadata("design:type", String)
], CallHistory.prototype, "hangupCause", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: false }),
    __metadata("design:type", Boolean)
], CallHistory.prototype, "isLive", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], CallHistory.prototype, "companyName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], CallHistory.prototype, "founderName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: '' }),
    __metadata("design:type", String)
], CallHistory.prototype, "interestedInDebt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, default: 9.15 }),
    __metadata("design:type", Number)
], CallHistory.prototype, "perMinuteRate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, default: 0 }),
    __metadata("design:type", Number)
], CallHistory.prototype, "totalCallCost", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: '' }),
    __metadata("design:type", String)
], CallHistory.prototype, "callGenerated", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 'Call Generated successfully.' }),
    __metadata("design:type", String)
], CallHistory.prototype, "callSummary", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: '' }),
    __metadata("design:type", String)
], CallHistory.prototype, "endReason", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: {
            name: { type: String, default: '' },
            phone: { type: String, default: '' },
            email: { type: String, default: '' },
        },
        default: {},
        _id: false,
    }),
    __metadata("design:type", Object)
], CallHistory.prototype, "alternateContact", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], default: [] }),
    __metadata("design:type", Array)
], CallHistory.prototype, "userSummary", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: '' }),
    __metadata("design:type", String)
], CallHistory.prototype, "companyAge", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: '' }),
    __metadata("design:type", String)
], CallHistory.prototype, "voiceAgentName", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: {
            followUpPhoneCallDate: { type: String, default: null },
            followUpPhoneCallTime: { type: String, default: null },
            followUpTimeZone: { type: String, default: '' },
            followUpMeetingDate: { type: String, default: null },
            followUpMeetingTime: { type: String, default: null },
            followUpCallStatus: { type: Boolean, default: false },
            followUpMeetingStatus: { type: Boolean, default: false },
        },
        default: {},
        _id: false,
    }),
    __metadata("design:type", Object)
], CallHistory.prototype, "followUpInfo", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: 0 }),
    __metadata("design:type", Number)
], CallHistory.prototype, "callDuration", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], CallHistory.prototype, "telephonicServiceProviderCallBillingDuration", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], CallHistory.prototype, "telephonicServiceProviderBillingRate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], CallHistory.prototype, "telephonicServiceProviderTotalCost", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        enum: user_enums_1.TelephonicProviders,
        default: user_enums_1.TelephonicProviders.PLIVO,
    }),
    __metadata("design:type", String)
], CallHistory.prototype, "telephonicProvider", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        enum: user_enums_1.VoiceSource,
        default: user_enums_1.VoiceSource.ELEVENLABS,
    }),
    __metadata("design:type", String)
], CallHistory.prototype, "ttsProvider", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        enum: user_enums_1.SttProvider,
        default: user_enums_1.SttProvider.DEEPGRAM,
    }),
    __metadata("design:type", String)
], CallHistory.prototype, "sttProvider", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 'gpt-4o-mini-2024-07-18' }),
    __metadata("design:type", String)
], CallHistory.prototype, "llm", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], CallHistory.prototype, "llmInputTokens", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], CallHistory.prototype, "llmOutputTokens", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], CallHistory.prototype, "llmtotalTokens", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], CallHistory.prototype, "llmInputCostInDollars", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], CallHistory.prototype, "llmOutputCostInDollars", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], CallHistory.prototype, "llmSummaryInputTokens", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], CallHistory.prototype, "llmSummaryOutputTokens", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], CallHistory.prototype, "llmSummaryInputCostInDollars", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], CallHistory.prototype, "llmSummaryOutputCostInDollars", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: '' }),
    __metadata("design:type", String)
], CallHistory.prototype, "providerCallId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], CallHistory.prototype, "llmSummarytotalTokens", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], CallHistory.prototype, "llmSummaryChargeInDollars", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], CallHistory.prototype, "llmChargeInDollars", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], CallHistory.prototype, "ttsTotalCharacters", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], CallHistory.prototype, "ttsChargeInDollars", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], CallHistory.prototype, "sttDuration", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], CallHistory.prototype, "sttChargeInDollars", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], CallHistory.prototype, "serviceCharge", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], CallHistory.prototype, "totalCostWithService", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], CallHistory.prototype, "totalCostWithoutServiceCharge", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Object, default: {} }),
    __metadata("design:type", Object)
], CallHistory.prototype, "additionalMetadata", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: [mongoose_2.Schema.Types.Mixed],
        default: [],
    }),
    __metadata("design:type", Array)
], CallHistory.prototype, "whatsappMessages", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        enum: Object.values(user_enums_1.CreditDeductionStatus),
        default: user_enums_1.CreditDeductionStatus.Default,
        required: true,
    }),
    __metadata("design:type", String)
], CallHistory.prototype, "creditDeductionStatus", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Schema.Types.Mixed, default: {} }),
    __metadata("design:type", Object)
], CallHistory.prototype, "creditDeductionSuccessResponse", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Schema.Types.Mixed, default: {} }),
    __metadata("design:type", Object)
], CallHistory.prototype, "creditDeductionErrorResponse", void 0);
exports.CallHistory = CallHistory = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true, versionKey: false })
], CallHistory);
exports.CallHistorySchema = mongoose_1.SchemaFactory.createForClass(CallHistory);
exports.CallHistorySchema.index({ contactListId: 1, contactId: 1 });
