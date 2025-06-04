"use strict";
// src/schemas/contact.schema.ts
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
exports.ContactSchema = exports.Contact = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const moment_1 = __importDefault(require("moment"));
const mongoose_2 = require("mongoose");
let Contact = class Contact {
};
exports.Contact = Contact;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Contact.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Contact.prototype, "tenantID", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: mongoose_2.Types.ObjectId, ref: 'User' }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Contact.prototype, "userId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Contact.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Contact.prototype, "phoneNumber", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: mongoose_2.Types.ObjectId, ref: 'ContactList' }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Contact.prototype, "contactListId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Contact.prototype, "contactListName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false, default: '' }),
    __metadata("design:type", String)
], Contact.prototype, "companyName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false, default: '' }),
    __metadata("design:type", String)
], Contact.prototype, "clientCompanyName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: true }),
    __metadata("design:type", Boolean)
], Contact.prototype, "isDeleteButton", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], Contact.prototype, "attemptsMade", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: true }),
    __metadata("design:type", Boolean)
], Contact.prototype, "isLiveMode", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], Contact.prototype, "isContacted", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: true }),
    __metadata("design:type", Boolean)
], Contact.prototype, "isNotContacted", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: '' }),
    __metadata("design:type", String)
], Contact.prototype, "callId", void 0);
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
], Contact.prototype, "alternateContact", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.Mixed, default: {} }),
    __metadata("design:type", Object)
], Contact.prototype, "additionalInfo", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date, default: () => (0, moment_1.default)().utc().toDate(), index: true }),
    __metadata("design:type", Date)
], Contact.prototype, "createdAt", void 0);
exports.Contact = Contact = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Contact);
exports.ContactSchema = mongoose_1.SchemaFactory.createForClass(Contact);
