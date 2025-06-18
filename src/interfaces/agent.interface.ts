import {  Types } from 'mongoose';
import { AgentType } from '../enums/user-enums';

export interface IAgent {
        name: string;
        callTemplate: Record<string,any>;
        agentId: string;
        type: AgentType
        voiceDbId: Types.ObjectId;    
        response: Record<string,any>;
}


