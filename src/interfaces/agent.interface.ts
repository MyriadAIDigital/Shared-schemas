import {  Types } from 'mongoose';

export interface IAgent {
        name: string;
        callTemplate: Record<string,any>;
        agentId: string;    
        voiceDbId: Types.ObjectId;    
        response: Record<string,any>;
}


