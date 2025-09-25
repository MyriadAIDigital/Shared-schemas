import { Document, Model, Schema as MongooseSchema } from 'mongoose';
import { Role, CallingModel } from '../enums/user-enums';
export type UserDocument = User & Document;
export declare class User {
    name: string;
    email: string;
    password: string;
    companyName: string;
    role: Role;
    tenantID: string;
    defaultModel: CallingModel;
    refreshToken: string | null;
    additionalEmails: string[];
    overrideClientCutoff: boolean;
    clientCutoffStart: string;
    clientCutoffEnd: string;
    customerId: string | null;
    subscriptionId: string | null;
    priceId: string | null;
    planId: string | null;
    hasAccess: boolean;
    isWalletActivated: boolean;
}
export declare const UserSchema: MongooseSchema<UserDocument, Model<UserDocument>>;
//# sourceMappingURL=user.schema.d.ts.map