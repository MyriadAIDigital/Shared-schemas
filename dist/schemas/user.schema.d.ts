import { Document, Model, Schema as MongooseSchema } from 'mongoose';
import { CompanyName, Role, CallingModel } from '../enums/user-enums';
export type UserDocument = User & Document;
export declare class User {
    name: string;
    email: string;
    password: string;
    companyName: CompanyName;
    role: Role;
    tenantID: string;
    defaultModel: CallingModel;
    refreshToken: string | null;
    additionalEmails: string[];
    overrideClientCutoff: boolean;
    clientCutoffStart: string;
    clientCutoffEnd: string;
}
export declare const UserSchema: MongooseSchema<UserDocument, Model<UserDocument>>;
//# sourceMappingURL=user.schema.d.ts.map