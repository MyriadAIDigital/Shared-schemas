// src/schemas/user.schema.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { CompanyName, Role, CallingModel } from '../enums/user-enums';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
    @Prop({ required: true })
    name!: string;                // <-- ‘!’ added

    @Prop({ required: true, unique: true })
    email!: string;               // <-- ‘!’ added

    @Prop({ required: true })
    password!: string;            // <-- ‘!’ added

    @Prop({ required: true, enum: CompanyName })
    companyName!: CompanyName;    // <-- ‘!’ added

    @Prop({ required: true, enum: Role })
    role!: Role;                  // <-- ‘!’ added

    @Prop({ required: true })
    tenantID!: string;            // <-- ‘!’ added

    @Prop({ required: true, enum: CallingModel, default: CallingModel.DEFAULT })
    defaultModel!: CallingModel;  // <-- ‘!’ added

    @Prop({ default: null })
    refreshToken!: string | null; // <-- ‘!’ added

    @Prop({ type: [String], default: [] })
    additionalEmails!: string[];  // <-- ‘!’ added

    @Prop({ type: Boolean, default: false })
    overrideClientCutoff!: boolean; // <-- ‘!’ added

    @Prop({ default: '21:30' })
    clientCutoffStart!: string;    // <-- ‘!’ added

    @Prop({ default: '09:00' })
    clientCutoffEnd!: string;      // <-- ‘!’ added
}

export const UserSchema = SchemaFactory.createForClass(User);
