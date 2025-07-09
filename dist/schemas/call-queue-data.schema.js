"use strict";
// src/schemas/call-queue-data.schema.ts
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CallQueueDataSchema = exports.CallQueueData = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const moment_1 = __importDefault(require("moment"));
const mongoose_2 = require("mongoose");
const user_enums_1 = require("../enums/user-enums");
let CallQueueData = class CallQueueData {
};
exports.CallQueueData = CallQueueData;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], CallQueueData.prototype, "tenantId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: mongoose_2.Types.ObjectId, ref: 'Campaign' }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], CallQueueData.prototype, "campaignId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: mongoose_2.Types.ObjectId, ref: 'Contact' }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], CallQueueData.prototype, "contactId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: mongoose_2.Types.ObjectId, ref: 'CampaignContact' }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], CallQueueData.prototype, "campaignContactId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false, default: '' }),
    __metadata("design:type", String)
], CallQueueData.prototype, "callId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, enum: user_enums_1.CallType }),
    __metadata("design:type", String)
], CallQueueData.prototype, "callType", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], CallQueueData.prototype, "timezone", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false, enum: user_enums_1.CampaignType }),
    __metadata("design:type", String)
], CallQueueData.prototype, "campaignType", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", Boolean)
], CallQueueData.prototype, "isLiveMode", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], CallQueueData.prototype, "startDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], CallQueueData.prototype, "startTime", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], CallQueueData.prototype, "endTime", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, enum: user_enums_1.CallQueueStatus, default: user_enums_1.CallQueueStatus.NEW }),
    __metadata("design:type", String)
], CallQueueData.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, enum: user_enums_1.QueueStatus, default: user_enums_1.QueueStatus.NOT_STARTED }),
    __metadata("design:type", String)
], CallQueueData.prototype, "queueStatus", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date, required: false }),
    __metadata("design:type", Date)
], CallQueueData.prototype, "startDateTime", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date, required: false }),
    __metadata("design:type", Date)
], CallQueueData.prototype, "endDateTime", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date, default: () => (0, moment_1.default)().utc().toDate() }),
    __metadata("design:type", Date)
], CallQueueData.prototype, "createdAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date, default: () => (0, moment_1.default)().utc().toDate() }),
    __metadata("design:type", Date)
], CallQueueData.prototype, "updatedAt", void 0);
exports.CallQueueData = CallQueueData = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
        autoCreate: false, // ✅ Prevents "NamespaceExists" error in Azure Cosmos DB
    })
], CallQueueData);
// ✅ Let Mongoose infer the correct Schema type — no manual typing needed
exports.CallQueueDataSchema = mongoose_1.SchemaFactory.createForClass(CallQueueData)
    .set('autoCreate', false)
    .set('collection', 'dynamic_per_tenant'); // Will be overridden dynamically per tenant
