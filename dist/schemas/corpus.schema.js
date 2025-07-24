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
const mongoose_1 = require("@nestjs/mongoose");
const user_enums_1 = require("../enums/user-enums");
let CorpusStats = class CorpusStats {
};
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        enum: Object.values(user_enums_1.CorpusStatus),
        default: user_enums_1.CorpusStatus.CORPUS_STATUS_UNSPECIFIED,
    }),
    __metadata("design:type", String)
], CorpusStats.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date }),
    __metadata("design:type", Date)
], CorpusStats.prototype, "lastUpdated", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, default: 0 }),
    __metadata("design:type", Number)
], CorpusStats.prototype, "numChunks", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, default: 0 }),
    __metadata("design:type", Number)
], CorpusStats.prototype, "numDocs", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, default: 0 }),
    __metadata("design:type", Number)
], CorpusStats.prototype, "numVectors", void 0);
CorpusStats = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], CorpusStats);
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
    (0, mongoose_1.Prop)({ required: true, unique: true, index: true }),
    __metadata("design:type", String)
], Corpus.prototype, "externalCorpusId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date, default: () => new Date(), index: true }),
    __metadata("design:type", Date)
], Corpus.prototype, "created", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: CorpusStats, default: () => ({ status: user_enums_1.CorpusStatus.CORPUS_STATUS_UNSPECIFIED }) }),
    __metadata("design:type", CorpusStats)
], Corpus.prototype, "stats", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], Corpus.prototype, "isCreatedByMyriadai", void 0);
exports.Corpus = Corpus = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true, autoCreate: false, autoIndex: false, strict: true })
], Corpus);
exports.CorpusSchema = mongoose_1.SchemaFactory.createForClass(Corpus);
