"use strict";
// src/schemas/contact-list.schema.ts
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
exports.ContactListSchema = exports.ContactList = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_enums_1 = require("../enums/user-enums");
let ContactList = class ContactList {
};
exports.ContactList = ContactList;
__decorate([
    (0, mongoose_1.Prop)({ required: true, enum: user_enums_1.listType, default: user_enums_1.listType.DEFAULT }),
    __metadata("design:type", String)
], ContactList.prototype, "listType", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: true, index: true }),
    __metadata("design:type", String)
], ContactList.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, enum: user_enums_1.CountryCode, default: user_enums_1.CountryCode.INDIA }),
    __metadata("design:type", String)
], ContactList.prototype, "countryCode", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], ContactList.prototype, "totalCustomers", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: true }),
    __metadata("design:type", Boolean)
], ContactList.prototype, "isLiveMode", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], ContactList.prototype, "contactListIsBusy", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: mongoose_2.Types.ObjectId, ref: 'User' }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], ContactList.prototype, "userId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], ContactList.prototype, "tenantID", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date, default: () => new Date(), index: true }),
    __metadata("design:type", Date)
], ContactList.prototype, "createdAt", void 0);
exports.ContactList = ContactList = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true, versionKey: false })
], ContactList);
exports.ContactListSchema = mongoose_1.SchemaFactory.createForClass(ContactList);
