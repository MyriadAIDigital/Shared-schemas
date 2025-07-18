"use strict";
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
exports.CorpusSourceSchema = exports.CorpusSource = exports.CorpusDocument = void 0;
// src/agent/entities/agent.entity.ts
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
class CorpusDocument {
}
exports.CorpusDocument = CorpusDocument;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], CorpusDocument.prototype, "externalDocumentId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], CorpusDocument.prototype, "internalDocumentUrl", void 0);
let CorpusSource = class CorpusSource {
};
exports.CorpusSource = CorpusSource;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], CorpusSource.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], CorpusSource.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], CorpusSource.prototype, "externalSourceId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], CorpusSource.prototype, "externalCorpusId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], CorpusSource.prototype, "corpusId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], CorpusSource.prototype, "crawlDepth", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Array)
], CorpusSource.prototype, "webUrls", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [CorpusDocument], required: true }),
    __metadata("design:type", Array)
], CorpusSource.prototype, "documents", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date, default: () => new Date(), index: true }),
    __metadata("design:type", Date)
], CorpusSource.prototype, "createdAt", void 0);
exports.CorpusSource = CorpusSource = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true, autoIndex: false, autoCreate: false, strict: true })
], CorpusSource);
exports.CorpusSourceSchema = mongoose_1.SchemaFactory.createForClass(CorpusSource);
