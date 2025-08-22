// src/interfaces/workflow.interface.ts

import { Document } from 'mongoose';
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
    // ✅ Newly added property
    allowWorkflowForTestMode?: boolean;
    // --- Plan/UI fields (added in schema) ---
    isPremium: boolean;                  // required in schema (default false)
    title: string;                       // required in schema
    bulletPoints: string[];             // default [] in schema
    icon: IconType;               // default 'outbound' in schema
    isDisabled: boolean;                 // required in schema (default false)
    createdAt: Date;
    updatedAt: Date;
}

