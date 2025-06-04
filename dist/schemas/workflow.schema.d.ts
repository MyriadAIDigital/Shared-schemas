import { Document, Schema as MongooseSchema } from 'mongoose';
import { StepTypeEnum, WorkflowStepStatus, CampaignType, WorkflowTypeEnum } from '../enums/user-enums';
export type WorkflowDocument = Workflow & Document;
export declare class WorkflowStep {
    type: StepTypeEnum;
    title: string;
    delayAfterPrevious: number;
    retryEnabled?: boolean;
    maxAttempts?: number;
    scheduledWindow?: string[];
    fallbackType?: StepTypeEnum;
    fallbackDelay?: number;
    allowOutsideWorkingHours?: boolean;
    specialConditionNote?: string;
    stepNumber: number;
    stepStatus?: WorkflowStepStatus;
}
export declare class Workflow {
    name: string;
    description?: string;
    campaignType: CampaignType;
    workflowType: WorkflowTypeEnum;
    steps: WorkflowStep[];
    tenantID: string;
    workingHours?: string[];
    webhookUrl?: string;
}
export declare const WorkflowSchema: MongooseSchema<Workflow, import("mongoose").Model<Workflow, any, any, any, Document<unknown, any, Workflow, any> & Workflow & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Workflow, Document<unknown, {}, import("mongoose").FlatRecord<Workflow>, {}> & import("mongoose").FlatRecord<Workflow> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=workflow.schema.d.ts.map