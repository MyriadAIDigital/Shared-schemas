import {  Types } from 'mongoose';
import { AgentType } from '../enums/user-enums';

export interface IAgent {
        _id: Types.ObjectId;
        name: string;
        callTemplate: Record<string,any>;
        agentId: string;
        type: AgentType
        voiceDbId: Types.ObjectId;  
        voiceName: string,
        response: Record<string,any>;
}

export interface UltravoxResponse {
        agentId: string;
        name: string;
        joinUrl: string
        // ...other fields from Ultravox API
      }


