"use strict";
// src/schemas/call-transcript.schema.ts
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
exports.CallTranscriptSchema = exports.CallTranscript = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let CallTranscript = class CallTranscript {
};
exports.CallTranscript = CallTranscript;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], CallTranscript.prototype, "phoneNumber", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: true, index: true }),
    __metadata("design:type", String)
], CallTranscript.prototype, "callId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date, default: () => new Date(), index: true }),
    __metadata("design:type", Date)
], CallTranscript.prototype, "createdAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: [
            {
                role: { type: String, required: true },
                content: { type: String, required: true },
                isInterruption: { type: Boolean, default: false },
                startTimestamp: { type: String, default: null },
                endTimestamp: { type: String, default: null },
                callStageMessageIndex: { type: Number, default: null },
                callStageId: { type: String, default: null },
                audioUrl: { type: String, default: null },
                timespan: {
                    type: {
                        start: { type: String, default: null },
                        end: { type: String, default: null },
                    },
                    default: null,
                },
            },
        ],
        _id: false,
    }),
    __metadata("design:type", Array)
], CallTranscript.prototype, "conversation", void 0);
exports.CallTranscript = CallTranscript = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
        versionKey: false,
        autoCreate: false,
        autoIndex: false,
    })
], CallTranscript);
exports.CallTranscriptSchema = mongoose_1.SchemaFactory.createForClass(CallTranscript);
;
