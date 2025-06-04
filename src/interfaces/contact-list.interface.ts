// src/interfaces/contact-list.interface.ts

import { Document, Types } from 'mongoose';
import { listType, CountryCode } from '../enums/user-enums';


export interface IContactList {
    listType: listType;
    name: string;
    countryCode: CountryCode;
    totalCustomers: number;
    isLiveMode: boolean;
    contactListIsBusy: boolean;
    userId: Types.ObjectId;
    tenantID: string;
    createdAt: Date;
    updatedAt: Date;
}


