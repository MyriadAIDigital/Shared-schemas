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
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_enums_1 = require("../enums/user-enums");
// Parameter schema used inside dynamic parameters
let ParameterSchema = class ParameterSchema {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ParameterSchema.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ParameterSchema.prototype, "type", void 0);
ParameterSchema = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], ParameterSchema);
// Dynamic Parameters
let DynamicParameter = class DynamicParameter {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], DynamicParameter.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], DynamicParameter.prototype, "location", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: ParameterSchema, default: {} }),
    __metadata("design:type", ParameterSchema)
], DynamicParameter.prototype, "schema", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], DynamicParameter.prototype, "required", void 0);
DynamicParameter = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], DynamicParameter);
// Static Parameters
let StaticParameter = class StaticParameter {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], StaticParameter.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], StaticParameter.prototype, "location", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], StaticParameter.prototype, "value", void 0);
StaticParameter = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], StaticParameter);
// Automatic Parameters
let AutomaticParameter = class AutomaticParameter {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], AutomaticParameter.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], AutomaticParameter.prototype, "location", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], AutomaticParameter.prototype, "knownValue", void 0);
AutomaticParameter = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], AutomaticParameter);
// HTTP schema
let HttpSchema = class HttpSchema {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], HttpSchema.prototype, "baseUrlPattern", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], HttpSchema.prototype, "httpMethod", void 0);
HttpSchema = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], HttpSchema);
// Full Definition schema
let DefinitionSchema = class DefinitionSchema {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], DefinitionSchema.prototype, "modelToolName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], DefinitionSchema.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], DefinitionSchema.prototype, "timeout", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [StaticParameter], default: [] }),
    __metadata("design:type", Array)
], DefinitionSchema.prototype, "staticParameters", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [DynamicParameter], default: [] }),
    __metadata("design:type", Array)
], DefinitionSchema.prototype, "dynamicParameters", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [AutomaticParameter], default: [] }),
    __metadata("design:type", Array)
], DefinitionSchema.prototype, "automaticParameters", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: HttpSchema, default: {} }),
    __metadata("design:type", HttpSchema)
], DefinitionSchema.prototype, "http", void 0);
DefinitionSchema = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], DefinitionSchema);
// Main AgentTools schema
let AgentTools = class AgentTools {
};
exports.AgentTools = AgentTools;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], AgentTools.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: DefinitionSchema, required: true }),
    __metadata("design:type", DefinitionSchema)
], AgentTools.prototype, "definition", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: '' }),
    __metadata("design:type", String)
], AgentTools.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], AgentTools.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], AgentTools.prototype, "voiceId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], AgentTools.prototype, "clientVoiceId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], AgentTools.prototype, "voiceName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], AgentTools.prototype, "callingModel", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], AgentTools.prototype, "displayVoiceName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Object, default: {} }),
    __metadata("design:type", Object)
], AgentTools.prototype, "response", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date, default: () => new Date(), index: true }),
    __metadata("design:type", Date)
], AgentTools.prototype, "createdAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], AgentTools.prototype, "externalToolId", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], AgentTools.prototype, "created", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 'private' }),
    __metadata("design:type", String)
], AgentTools.prototype, "ownership", void 0);
exports.AgentTools = AgentTools = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
        autoCreate: false,
        autoIndex: false,
    })
], AgentTools);
exports.AgentToolsSchema = mongoose_1.SchemaFactory.createForClass(AgentTools);
