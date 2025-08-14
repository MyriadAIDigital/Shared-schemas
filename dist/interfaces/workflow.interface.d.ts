import { StepTypeEnum, WorkflowStepStatus, CampaignType, WorkflowTypeEnum, IconType } from '../enums/user-enums';
/**
 * Interface for a single step within a workflow.
 */
export interface IWorkflowStep {
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
/**
 * Interface for the Workflow document.
 */
export interface IWorkflow {
    name: string;
    description?: string;
    campaignType: CampaignType;
    workflowType: WorkflowTypeEnum;
    steps: IWorkflowStep[];
    tenantID: string;
    workingHours?: string[];
    webhookUrl?: string;
    allowWorkflowForTestMode?: boolean;
    isPremium: boolean;
    title: string;
    bulletPoints: string[];
    icon: IconType;
    isDisabled: boolean;
    createdAt: Date;
    updatedAt: Date;
}
//# sourceMappingURL=workflow.interface.d.ts.map