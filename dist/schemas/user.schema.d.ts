import { Document } from 'mongoose';
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
export declare const UserSchema: import("mongoose").Schema<User, import("mongoose").Model<User, any, any, any, Document<unknown, any, User, any> & User & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, User, Document<unknown, {}, import("mongoose").FlatRecord<User>, {}> & import("mongoose").FlatRecord<User> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=user.schema.d.ts.map