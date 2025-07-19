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
exports.CorpusSchema = exports.Corpus = void 0;
// src/agent/entities/agent.entity.ts
const mongoose_1 = require("@nestjs/mongoose");
let Corpus = class Corpus {
};
exports.Corpus = Corpus;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Corpus.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Corpus.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Corpus.prototype, "externalCorpusId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date, default: () => new Date(), index: true }),
    __metadata("design:type", Date)
], Corpus.prototype, "createdAt", void 0);
exports.Corpus = Corpus = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true, autoCreate: false, autoIndex: false, strict: true })
], Corpus);
exports.CorpusSchema = mongoose_1.SchemaFactory.createForClass(Corpus);
