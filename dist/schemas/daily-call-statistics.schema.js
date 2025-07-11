"use strict";
// src/schemas/daily-call-statistics.schema.ts
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
exports.DailyCallStatisticsSchema = exports.DailyCallStatistics = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let DailyCallStatistics = class DailyCallStatistics {
};
exports.DailyCallStatistics = DailyCallStatistics;
__decorate([
    (0, mongoose_1.Prop)({ required: true, index: true }),
    __metadata("design:type", String)
], DailyCallStatistics.prototype, "date", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Boolean)
], DailyCallStatistics.prototype, "isLiveMode", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: 0 }),
    __metadata("design:type", Number)
], DailyCallStatistics.prototype, "totalCalls", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: 0 }),
    __metadata("design:type", Number)
], DailyCallStatistics.prototype, "totalDurationSeconds", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: mongoose_2.Types.ObjectId, ref: 'User' }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], DailyCallStatistics.prototype, "userId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], DailyCallStatistics.prototype, "tenantID", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], DailyCallStatistics.prototype, "llmInputTokens", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], DailyCallStatistics.prototype, "llmOutputTokens", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], DailyCallStatistics.prototype, "llmTotalTokens", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], DailyCallStatistics.prototype, "llmCost", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], DailyCallStatistics.prototype, "llmInputCostInDollars", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], DailyCallStatistics.prototype, "llmOutputCostInDollars", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], DailyCallStatistics.prototype, "ttsCharacters", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], DailyCallStatistics.prototype, "ttsCost", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], DailyCallStatistics.prototype, "sttDuration", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], DailyCallStatistics.prototype, "sttCost", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], DailyCallStatistics.prototype, "ourServiceCharge", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], DailyCallStatistics.prototype, "telephonicServiceProviderCallBillingDuration", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0.005 }),
    __metadata("design:type", Number)
], DailyCallStatistics.prototype, "telephonicServiceProviderBillingRate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], DailyCallStatistics.prototype, "telephonicServiceProviderTotalCost", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], DailyCallStatistics.prototype, "totalCostWithoutServiceCharge", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], DailyCallStatistics.prototype, "totalCostWithServiceCharge", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date, default: () => new Date(), index: true }),
    __metadata("design:type", Date)
], DailyCallStatistics.prototype, "createdAt", void 0);
exports.DailyCallStatistics = DailyCallStatistics = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
        versionKey: false,
        autoCreate: false,
        autoIndex: false,
    })
], DailyCallStatistics);
exports.DailyCallStatisticsSchema = mongoose_1.SchemaFactory.createForClass(DailyCallStatistics);
