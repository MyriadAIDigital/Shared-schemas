"use strict";
// src/schemas/user.schema.ts
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
exports.UserSchema = exports.User = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const user_enums_1 = require("../enums/user-enums");
let User = class User {
};
exports.User = User;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, enum: user_enums_1.CompanyName }),
    __metadata("design:type", String)
], User.prototype, "companyName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, enum: user_enums_1.Role }),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], User.prototype, "tenantID", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true, enum: user_enums_1.CallingModel, default: user_enums_1.CallingModel.DEFAULT }),
    __metadata("design:type", String)
], User.prototype, "defaultModel", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: null }),
    __metadata("design:type", Object)
], User.prototype, "refreshToken", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], default: [] }),
    __metadata("design:type", Array)
], User.prototype, "additionalEmails", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], User.prototype, "overrideClientCutoff", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: '21:30' }),
    __metadata("design:type", String)
], User.prototype, "clientCutoffStart", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: '09:00' }),
    __metadata("design:type", String)
], User.prototype, "clientCutoffEnd", void 0);
exports.User = User = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
        autoCreate: false,
        autoIndex: false,
    })
], User);
exports.UserSchema = mongoose_1.SchemaFactory.createForClass(User);
