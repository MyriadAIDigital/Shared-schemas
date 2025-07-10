"use strict";
// src/schemas/follow-up-call.schema.ts
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
exports.FollowUpCallSchema = exports.FollowUpCall = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const class_validator_1 = require("class-validator");
const user_enums_1 = require("../enums/user-enums");
let FollowUpCall = class FollowUpCall {
};
exports.FollowUpCall = FollowUpCall;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Campaign', required: true, index: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], FollowUpCall.prototype, "campaignId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'ContactList', required: true, index: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], FollowUpCall.prototype, "contactListId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Contact', required: true, index: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], FollowUpCall.prototype, "contactId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: Date, index: true }),
    __metadata("design:type", Date)
], FollowUpCall.prototype, "followUpDateTimeUtc", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: Date, index: true }),
    __metadata("design:type", Date)
], FollowUpCall.prototype, "followUpDateTimeInTimeZone", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], FollowUpCall.prototype, "campaignTimeZone", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(user_enums_1.CallType),
    (0, mongoose_1.Prop)({
        type: String,
        enum: user_enums_1.CallType,
        default: user_enums_1.CallType.FOLLOW_UP_CALL,
    }),
    __metadata("design:type", String)
], FollowUpCall.prototype, "callType", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(user_enums_1.FollowUpStatus),
    (0, mongoose_1.Prop)({
        type: String,
        enum: user_enums_1.FollowUpStatus,
        default: user_enums_1.FollowUpStatus.PENDING,
    }),
    __metadata("design:type", String)
], FollowUpCall.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: null }),
    __metadata("design:type", Object)
], FollowUpCall.prototype, "notes", void 0);
exports.FollowUpCall = FollowUpCall = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
        versionKey: false,
        autoCreate: false,
        autoIndex: false,
    })
], FollowUpCall);
exports.FollowUpCallSchema = mongoose_1.SchemaFactory.createForClass(FollowUpCall);
// Indexes for efficient querying
exports.FollowUpCallSchema.index({ followUpDateTimeUtc: 1, campaignId: 1 });
exports.FollowUpCallSchema.index({ followUpDateTimeInTimeZone: 1, campaignId: 1 });
exports.FollowUpCallSchema.index({ contactListId: 1, contactId: 1 });
