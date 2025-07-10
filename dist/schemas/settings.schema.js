"use strict";
// src/schemas/settings.schema.ts
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
exports.SettingsSchema = exports.Settings = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Settings = class Settings {
};
exports.Settings = Settings;
__decorate([
    (0, mongoose_1.Prop)({
        type: [
            {
                llm: { type: String, required: true, default: 'gpt-4o-mini' },
                inputTokenCostInDollars: { type: String, required: true, default: '0.00000015' },
                outputTokenCostInDollars: { type: String, required: true, default: '0.0000006' },
            },
        ],
        required: true,
        default: [],
    }),
    __metadata("design:type", Array)
], Settings.prototype, "llms", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: '0.00012' }),
    __metadata("design:type", String)
], Settings.prototype, "ttsElevenLabsCostPerCharInDollars", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: '0.000024' }),
    __metadata("design:type", String)
], Settings.prototype, "ttsAzureCostPerCharInDollars", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: '0.0059' }),
    __metadata("design:type", String)
], Settings.prototype, "sttDeepgramCostPerMinuteInDollars", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: '0.004' }),
    __metadata("design:type", String)
], Settings.prototype, "sttAzureCostPerMinuteInDollars", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0.005 }),
    __metadata("design:type", Number)
], Settings.prototype, "telephonicServiceProviderBillingRate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: () => new Date() }),
    __metadata("design:type", Date)
], Settings.prototype, "createdAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: 0 }),
    __metadata("design:type", Number)
], Settings.prototype, "exchangeRateInrToUsd", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: 4 }),
    __metadata("design:type", Number)
], Settings.prototype, "callBatchDelay", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: 10 }),
    __metadata("design:type", Number)
], Settings.prototype, "callBatchSize", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], Settings.prototype, "serviceCharge", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: () => new Date() }),
    __metadata("design:type", Date)
], Settings.prototype, "updatedAt", void 0);
exports.Settings = Settings = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
        autoCreate: false,
        autoIndex: false,
    })
], Settings);
exports.SettingsSchema = mongoose_1.SchemaFactory.createForClass(Settings);
