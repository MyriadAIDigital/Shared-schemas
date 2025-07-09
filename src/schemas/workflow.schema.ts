// src/schemas/workflow.schema.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Model, Schema as MongooseSchema } from 'mongoose';
import { StepTypeEnum, WorkflowStepStatus, CampaignType, WorkflowTypeEnum } from '../enums/user-enums';


export type WorkflowDocument = Workflow & Document;

@Schema({
    timestamps: true,
    autoCreate: false,
    autoIndex: false,
})
export class WorkflowStep {
    @Prop({ required: true, enum: StepTypeEnum })
    type!: StepTypeEnum;

    @Prop({ required: true })
    title!: string;

    @Prop({ required: true })
    delayAfterPrevious!: number;

    @Prop({ default: false })
    retryEnabled?: boolean;

    @Prop({ default: 1 })
    maxAttempts?: number;

    @Prop({ type: [String], default: undefined })
    scheduledWindow?: string[];

    @Prop({ enum: StepTypeEnum, default: undefined })
    fallbackType?: StepTypeEnum;

    @Prop({ default: undefined })
    fallbackDelay?: number;

    @Prop({ default: false })
    allowOutsideWorkingHours?: boolean;

    @Prop({ default: '' })
    specialConditionNote?: string;

    @Prop({ required: true })
    stepNumber!: number;

    @Prop({ enum: WorkflowStepStatus, default: WorkflowStepStatus.PENDING })
    stepStatus?: WorkflowStepStatus;
}

@Schema({ timestamps: true })
export class Workflow {
    @Prop({ required: true })
    name!: string;

    @Prop()
    description?: string;

    @Prop({ required: true, enum: CampaignType, default: CampaignType.OUTBOUND })
    campaignType!: CampaignType;

    @Prop({ required: true, enum: WorkflowTypeEnum })
    workflowType!: WorkflowTypeEnum;

    @Prop({ type: [WorkflowStep], required: true })
    steps!: WorkflowStep[];

    @Prop({ required: true, index: true })
    tenantID!: string;

    @Prop({ type: [String], default: ['11:00', '13:00'] })
    workingHours?: string[];

    @Prop({ required: false })
    webhookUrl?: string;
}

export const WorkflowSchema = SchemaFactory.createForClass(Workflow) as unknown as MongooseSchema<
    WorkflowDocument,
    Model<WorkflowDocument>
>;
WorkflowSchema.index({ name: 1 }, { unique: true });
