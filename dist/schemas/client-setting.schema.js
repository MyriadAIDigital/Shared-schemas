"use strict";
// src/schemas/client‐setting.schema.ts
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
exports.ClientSettingSchema = exports.ClientSetting = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let PromptSetting = class PromptSetting {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], PromptSetting.prototype, "promptId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Object, default: {} }),
    __metadata("design:type", Object)
], PromptSetting.prototype, "settings", void 0);
PromptSetting = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], PromptSetting);
let ClientSetting = class ClientSetting {
};
exports.ClientSetting = ClientSetting;
__decorate([
    (0, mongoose_1.Prop)({ type: [PromptSetting], default: [] }),
    __metadata("design:type", Array)
], ClientSetting.prototype, "promptSettings", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: {
            startTime: { type: String, required: true },
            endTime: { type: String, required: true },
        },
        required: true,
    }),
    __metadata("design:type", Object)
], ClientSetting.prototype, "dndHours", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, default: 10 }),
    __metadata("design:type", Number)
], ClientSetting.prototype, "maxConcurrency", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, required: true, default: 9.15 }),
    __metadata("design:type", Number)
], ClientSetting.prototype, "perMinuteRate", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: {
            netcore: {
                enabled: { type: Boolean, default: false },
                apiKey: { type: String, default: null },
            },
            wati: {
                enabled: { type: Boolean, default: false },
                apiKey: { type: String, default: null },
            },
            defaultProvider: {
                type: String,
                enum: ['netcore', 'wati', 'none'],
                default: 'none',
            },
        },
        default: {
            netcore: { enabled: false, apiKey: null },
            wati: { enabled: false, apiKey: null },
            defaultProvider: 'none',
        },
    }),
    __metadata("design:type", Object)
], ClientSetting.prototype, "whatsappSetting", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: {
            plivo: {
                enabled: { type: Boolean, default: false },
                apiKey: { type: String, default: null },
                accountId: { type: String, default: null },
                credits: { type: Number, default: 0 },
                phoneNumbers: { type: [String], default: [] },
            },
            twilio: {
                enabled: { type: Boolean, default: false },
                apiKey: { type: String, default: null },
                accountId: { type: String, default: null },
                credits: { type: Number, default: 0 },
                phoneNumbers: { type: [String], default: [] },
            },
            defaultProvider: {
                type: String,
                enum: ['plivo', 'twilio', 'none'],
                default: 'none',
            },
        },
        default: {
            plivo: {
                enabled: false,
                apiKey: null,
                accountId: null,
                credits: 0,
                phoneNumbers: [],
            },
            twilio: {
                enabled: false,
                apiKey: null,
                accountId: null,
                credits: 0,
                phoneNumbers: [],
            },
            defaultProvider: 'none',
        },
    }),
    __metadata("design:type", Object)
], ClientSetting.prototype, "telephonySetting", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], ClientSetting.prototype, "createdBy", void 0);
exports.ClientSetting = ClientSetting = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], ClientSetting);
// **Do NOT cast to MongooseSchema<…>. Let Nest infer it.**
exports.ClientSettingSchema = mongoose_1.SchemaFactory.createForClass(ClientSetting);
