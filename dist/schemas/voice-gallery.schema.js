"use strict";
// src/schemas/voice-gallery.schema.ts
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
exports.VoiceGallerySchema = exports.VoiceGallery = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const user_enums_1 = require("../enums/user-enums");
let VoiceGallery = class VoiceGallery {
};
exports.VoiceGallery = VoiceGallery;
__decorate([
    (0, mongoose_1.Prop)({ required: true, enum: user_enums_1.VoiceType }),
    __metadata("design:type", String)
], VoiceGallery.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, enum: user_enums_1.VoiceSource }),
    __metadata("design:type", String)
], VoiceGallery.prototype, "source", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], VoiceGallery.prototype, "voiceId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, enum: user_enums_1.VoiceGender }),
    __metadata("design:type", String)
], VoiceGallery.prototype, "voiceGender", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, enum: user_enums_1.CallingModel, default: user_enums_1.CallingModel.DEFAULT }),
    __metadata("design:type", String)
], VoiceGallery.prototype, "callingModel", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], VoiceGallery.prototype, "voiceName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], VoiceGallery.prototype, "fileUrl", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], VoiceGallery.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: true }),
    __metadata("design:type", Boolean)
], VoiceGallery.prototype, "isEnabled", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: false }),
    __metadata("design:type", Boolean)
], VoiceGallery.prototype, "isDefault", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: true }),
    __metadata("design:type", Boolean)
], VoiceGallery.prototype, "isCreditSufficient", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: true }),
    __metadata("design:type", String)
], VoiceGallery.prototype, "predefinedVoiceName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: () => new Date() }),
    __metadata("design:type", Date)
], VoiceGallery.prototype, "createdAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: 4 }),
    __metadata("design:type", Number)
], VoiceGallery.prototype, "maxVoicesAllowed", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], VoiceGallery.prototype, "isVoicePermanentlyDisabled", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Object }),
    __metadata("design:type", Object)
], VoiceGallery.prototype, "additionalMetadata", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, enum: user_enums_1.RegionCode, default: user_enums_1.RegionCode.IN }),
    __metadata("design:type", String)
], VoiceGallery.prototype, "regionCode", void 0);
exports.VoiceGallery = VoiceGallery = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
        versionKey: false,
        autoCreate: false,
        autoIndex: false,
    })
], VoiceGallery);
exports.VoiceGallerySchema = mongoose_1.SchemaFactory.createForClass(VoiceGallery);
