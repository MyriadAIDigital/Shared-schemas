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
exports.AgentToolsSchema = exports.AgentTools = void 0;
// src/agent/entities/agent.entity.ts
const mongoose_1 = require("@nestjs/mongoose");
const user_enums_1 = require("../enums/user-enums");
let AgentTools = class AgentTools {
};
exports.AgentTools = AgentTools;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], AgentTools.prototype, "modelToolName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], AgentTools.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, enum: Object.values(user_enums_1.AgentToolsType) }),
    __metadata("design:type", String)
], AgentTools.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Object, default: {} }),
    __metadata("design:type", Object)
], AgentTools.prototype, "http", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [Object], default: [] }),
    __metadata("design:type", Array)
], AgentTools.prototype, "dynamicParameters", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [Object], default: [] }),
    __metadata("design:type", Array)
], AgentTools.prototype, "staticParameters", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [Object], default: [] }),
    __metadata("design:type", Array)
], AgentTools.prototype, "automaticParameters", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, required: true }),
    __metadata("design:type", Boolean)
], AgentTools.prototype, "precomputeable", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date, default: () => new Date(), index: true }),
    __metadata("design:type", Date)
], AgentTools.prototype, "agentToolsCreatedAt", void 0);
exports.AgentTools = AgentTools = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true, autoCreate: false, autoIndex: false, })
], AgentTools);
exports.AgentToolsSchema = mongoose_1.SchemaFactory.createForClass(AgentTools);
