// src/interfaces/user.interface.ts

import { Document } from 'mongoose';
import { CompanyName, Role, CallingModel } from '../enums/user-enums';

/**
 * IUser: UserDocument का टाइप सेफ़ इंटरफ़ेस
 * इसमें वही प्रॉपर्टीज़ होंगी जो आपका UserSchema में हैं,
 * साथ में timestamps (createdAt, updatedAt) भी जोड़ते हैं।
 */
export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    companyName: CompanyName;
    role: Role;
    tenantID: string;
    defaultModel: CallingModel;
    refreshToken: string | null;

    /**
     * Optional: List of additional emails to be notified (campaign completion, updates, etc.)
     */
    additionalEmails: string[];
    overrideClientCutoff: boolean;
    clientCutoffStart: string; // Format: 'HH:mm'
    clientCutoffEnd: string;   // Format: 'HH:mm'

    // Mongoose.timestamps के कारण अपने आप जुड़ जाते हैं:
    createdAt: Date;
    updatedAt: Date;
}
