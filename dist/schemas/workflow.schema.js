"use strict";
// src/schemas/workflow.schema.ts
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
exports.WorkflowSchema = exports.Workflow = exports.WorkflowStep = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const user_enums_1 = require("../enums/user-enums");
let WorkflowStep = class WorkflowStep {
};
exports.WorkflowStep = WorkflowStep;
__decorate([
    (0, mongoose_1.Prop)({ required: true, enum: user_enums_1.StepTypeEnum }),
    __metadata("design:type", String)
], WorkflowStep.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], WorkflowStep.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], WorkflowStep.prototype, "delayAfterPrevious", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], WorkflowStep.prototype, "retryEnabled", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 1 }),
    __metadata("design:type", Number)
], WorkflowStep.prototype, "maxAttempts", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], default: undefined }),
    __metadata("design:type", Array)
], WorkflowStep.prototype, "scheduledWindow", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: user_enums_1.StepTypeEnum, default: undefined }),
    __metadata("design:type", String)
], WorkflowStep.prototype, "fallbackType", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: undefined }),
    __metadata("design:type", Number)
], WorkflowStep.prototype, "fallbackDelay", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], WorkflowStep.prototype, "allowOutsideWorkingHours", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: '' }),
    __metadata("design:type", String)
], WorkflowStep.prototype, "specialConditionNote", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], WorkflowStep.prototype, "stepNumber", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: user_enums_1.WorkflowStepStatus, default: user_enums_1.WorkflowStepStatus.PENDING }),
    __metadata("design:type", String)
], WorkflowStep.prototype, "stepStatus", void 0);
exports.WorkflowStep = WorkflowStep = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], WorkflowStep);
let Workflow = class Workflow {
};
exports.Workflow = Workflow;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Workflow.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Workflow.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, enum: user_enums_1.CampaignType, default: user_enums_1.CampaignType.OUTBOUND }),
    __metadata("design:type", String)
], Workflow.prototype, "campaignType", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, enum: user_enums_1.WorkflowTypeEnum }),
    __metadata("design:type", String)
], Workflow.prototype, "workflowType", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [WorkflowStep], required: true }),
    __metadata("design:type", Array)
], Workflow.prototype, "steps", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, index: true }),
    __metadata("design:type", String)
], Workflow.prototype, "tenantID", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], default: ['11:00', '13:00'] }),
    __metadata("design:type", Array)
], Workflow.prototype, "workingHours", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], Workflow.prototype, "webhookUrl", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], Workflow.prototype, "allowWorkflowForTestMode", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: false }),
    __metadata("design:type", Boolean)
], Workflow.prototype, "isPremium", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Workflow.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], default: [] }),
    __metadata("design:type", Array)
], Workflow.prototype, "bulletPoints", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: user_enums_1.IconType, default: user_enums_1.IconType.OUTBOUND }),
    __metadata("design:type", String)
], Workflow.prototype, "icon", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: false }),
    __metadata("design:type", Boolean)
], Workflow.prototype, "isDisabled", void 0);
exports.Workflow = Workflow = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
        autoCreate: false,
        autoIndex: false,
    })
], Workflow);
exports.WorkflowSchema = mongoose_1.SchemaFactory.createForClass(Workflow);
exports.WorkflowSchema.index({ name: 1 }, { unique: true });
