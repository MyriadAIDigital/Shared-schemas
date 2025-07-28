"use strict";
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
exports.AgentSchema = exports.Agent = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_enums_1 = require("../enums/user-enums");
// ──────── Nested Schemas ────────
let InactivityMessage = class InactivityMessage {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], InactivityMessage.prototype, "duration", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], InactivityMessage.prototype, "message", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, enum: Object.values(user_enums_1.EndBehavior) }),
    __metadata("design:type", String)
], InactivityMessage.prototype, "endBehavior", void 0);
InactivityMessage = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], InactivityMessage);
let AgentSpeakerSettings = class AgentSpeakerSettings {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Boolean)
], AgentSpeakerSettings.prototype, "uninterruptible", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], AgentSpeakerSettings.prototype, "text", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], AgentSpeakerSettings.prototype, "delay", void 0);
AgentSpeakerSettings = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], AgentSpeakerSettings);
let UserSpeakerSettings = class UserSpeakerSettings {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], UserSpeakerSettings.prototype, "text", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], UserSpeakerSettings.prototype, "delay", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], UserSpeakerSettings.prototype, "prompt", void 0);
UserSpeakerSettings = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], UserSpeakerSettings);
let FirstSpeakerSettings = class FirstSpeakerSettings {
};
__decorate([
    (0, mongoose_1.Prop)({ type: AgentSpeakerSettings, required: false }),
    __metadata("design:type", AgentSpeakerSettings)
], FirstSpeakerSettings.prototype, "agent", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: UserSpeakerSettings, required: false }),
    __metadata("design:type", UserSpeakerSettings)
], FirstSpeakerSettings.prototype, "user", void 0);
FirstSpeakerSettings = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], FirstSpeakerSettings);
let VadSettings = class VadSettings {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], VadSettings.prototype, "turnEndpointDelay", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], VadSettings.prototype, "minimumTurnDuration", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], VadSettings.prototype, "minimumInterruptionDuration", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], VadSettings.prototype, "frameActivationThreshold", void 0);
VadSettings = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], VadSettings);
let CallTemplate = class CallTemplate {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], CallTemplate.prototype, "systemPrompt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], CallTemplate.prototype, "voice", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], default: [] }),
    __metadata("design:type", Array)
], CallTemplate.prototype, "selectedTools", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], CallTemplate.prototype, "corpusId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, enum: Object.values(user_enums_1.ModelType) }),
    __metadata("design:type", String)
], CallTemplate.prototype, "model", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], CallTemplate.prototype, "temperature", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, enum: Object.values(user_enums_1.InitialOutputMedium) }),
    __metadata("design:type", String)
], CallTemplate.prototype, "initialOutputMedium", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], CallTemplate.prototype, "languageHint", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Boolean)
], CallTemplate.prototype, "recordingEnabled", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], CallTemplate.prototype, "timeExceededMessage", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], CallTemplate.prototype, "joinTimeout", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], CallTemplate.prototype, "maxDuration", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [InactivityMessage], default: [] }),
    __metadata("design:type", Array)
], CallTemplate.prototype, "inactivityMessages", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: FirstSpeakerSettings, required: true }),
    __metadata("design:type", FirstSpeakerSettings)
], CallTemplate.prototype, "firstSpeakerSettings", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: VadSettings, required: true }),
    __metadata("design:type", VadSettings)
], CallTemplate.prototype, "vadSettings", void 0);
CallTemplate = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], CallTemplate);
// ──────── Main Agent Schema ────────
let Agent = class Agent {
};
exports.Agent = Agent;
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true }),
    __metadata("design:type", String)
], Agent.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: CallTemplate, required: true }),
    __metadata("design:type", CallTemplate)
], Agent.prototype, "callTemplate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: true, index: true }),
    __metadata("design:type", String)
], Agent.prototype, "agentId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: '', maxlength: 500 }),
    __metadata("design:type", String)
], Agent.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        enum: Object.values(user_enums_1.AgentType),
        required: true,
        index: true,
    }),
    __metadata("design:type", String)
], Agent.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, required: true, index: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Agent.prototype, "voiceDbId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true, trim: true }),
    __metadata("design:type", String)
], Agent.prototype, "voiceName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Agent.prototype, "callingModel", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Agent.prototype, "displayVoiceName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date, default: () => new Date(), index: true }),
    __metadata("design:type", Date)
], Agent.prototype, "agentCreatedAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], Agent.prototype, "isCreatedByMyriadai", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: true }),
    __metadata("design:type", Boolean)
], Agent.prototype, "isLiveMode", void 0);
exports.Agent = Agent = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
        autoCreate: false,
        autoIndex: false,
    })
], Agent);
exports.AgentSchema = mongoose_1.SchemaFactory.createForClass(Agent);
