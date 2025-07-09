"use strict";
// src/schemas/monthly-call-statistics.schema.ts
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
exports.MonthlyCallStatisticsSchema = exports.MonthlyCallStatistics = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let MonthlyCallStatistics = class MonthlyCallStatistics {
};
exports.MonthlyCallStatistics = MonthlyCallStatistics;
__decorate([
    (0, mongoose_1.Prop)({ required: true, index: true }),
    __metadata("design:type", String)
], MonthlyCallStatistics.prototype, "month", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Boolean)
], MonthlyCallStatistics.prototype, "isLiveMode", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: 0 }),
    __metadata("design:type", Number)
], MonthlyCallStatistics.prototype, "totalCalls", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: 0 }),
    __metadata("design:type", Number)
], MonthlyCallStatistics.prototype, "totalDurationSeconds", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: mongoose_2.Types.ObjectId, ref: 'User' }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], MonthlyCallStatistics.prototype, "userId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], MonthlyCallStatistics.prototype, "tenantID", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], MonthlyCallStatistics.prototype, "llmInputTokens", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], MonthlyCallStatistics.prototype, "llmOutputTokens", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], MonthlyCallStatistics.prototype, "llmTotalTokens", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], MonthlyCallStatistics.prototype, "llmInputCostInDollars", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], MonthlyCallStatistics.prototype, "llmOutputCostInDollars", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], MonthlyCallStatistics.prototype, "llmCost", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], MonthlyCallStatistics.prototype, "ttsCharacters", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], MonthlyCallStatistics.prototype, "ttsCost", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], MonthlyCallStatistics.prototype, "sttDuration", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], MonthlyCallStatistics.prototype, "sttCost", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], MonthlyCallStatistics.prototype, "ourServiceCharge", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], MonthlyCallStatistics.prototype, "telephonicServiceProviderCallBillingDuration", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0.005 }),
    __metadata("design:type", Number)
], MonthlyCallStatistics.prototype, "telephonicServiceProviderBillingRate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], MonthlyCallStatistics.prototype, "telephonicServiceProviderTotalCost", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], MonthlyCallStatistics.prototype, "totalCostWithoutServiceCharge", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], MonthlyCallStatistics.prototype, "totalCostWithServiceCharge", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date, default: () => new Date(), index: true }),
    __metadata("design:type", Date)
], MonthlyCallStatistics.prototype, "createdAt", void 0);
exports.MonthlyCallStatistics = MonthlyCallStatistics = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true, versionKey: false, autoCreate: false, // ✅ Prevents "NamespaceExists" error in Azure Cosmos DB
    })
], MonthlyCallStatistics);
exports.MonthlyCallStatisticsSchema = mongoose_1.SchemaFactory.createForClass(MonthlyCallStatistics);
