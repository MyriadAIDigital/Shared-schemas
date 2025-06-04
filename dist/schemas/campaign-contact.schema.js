"use strict";
// src/schemas/campaign-contact.schema.ts
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
exports.CampaignContactSchema = exports.CampaignContact = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const moment_1 = __importDefault(require("moment"));
const mongoose_2 = require("mongoose");
const user_enums_1 = require("../enums/user-enums");
let CampaignContact = class CampaignContact {
};
exports.CampaignContact = CampaignContact;
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: mongoose_2.Types.ObjectId, ref: 'Campaign' }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], CampaignContact.prototype, "campaignId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: mongoose_2.Types.ObjectId, ref: 'Contact' }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], CampaignContact.prototype, "contactId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: mongoose_2.Types.ObjectId, ref: 'ContactList' }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], CampaignContact.prototype, "contactListId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], CampaignContact.prototype, "contactListName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], CampaignContact.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, enum: user_enums_1.CallStatus, default: user_enums_1.CallStatus.NOT_STARTED }),
    __metadata("design:type", String)
], CampaignContact.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], CampaignContact.prototype, "contactNumber", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: false }),
    __metadata("design:type", Boolean)
], CampaignContact.prototype, "isConnected", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], CampaignContact.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false, default: '' }),
    __metadata("design:type", String)
], CampaignContact.prototype, "companyName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, default: 0 }),
    __metadata("design:type", Number)
], CampaignContact.prototype, "connectedAttempt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, default: 0 }),
    __metadata("design:type", Number)
], CampaignContact.prototype, "callMade", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Schema.Types.Mixed, default: 'N/A' }),
    __metadata("design:type", Object)
], CampaignContact.prototype, "additionalInfo", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: user_enums_1.CallStatus.NOT_STARTED }),
    __metadata("design:type", String)
], CampaignContact.prototype, "lastCallStatus", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date, default: () => (0, moment_1.default)().utc().toDate() }),
    __metadata("design:type", Date)
], CampaignContact.prototype, "createdAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date, default: () => (0, moment_1.default)().utc().toDate() }),
    __metadata("design:type", Date)
], CampaignContact.prototype, "updatedAt", void 0);
exports.CampaignContact = CampaignContact = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], CampaignContact);
exports.CampaignContactSchema = mongoose_1.SchemaFactory.createForClass(CampaignContact);
