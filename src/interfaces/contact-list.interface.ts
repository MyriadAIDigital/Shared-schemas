import { Types } from 'mongoose';
import { listType, CountryCode } from '../enums/user-enums';

export interface IContactList {
    _id: Types.ObjectId;
    listType: listType; // Type of the contact list (e.g., ElevenLabs or Azure)
    name: string; // Name of the contact list
    countryCode: CountryCode; // Country code for contacts
    totalCustomers: number; // Total number of customers in the list
    isLiveMode: boolean; // Indicates if the list is in live mode
    contactListIsBusy: boolean; // Indicates if the list is currently being processed
    userId: Types.ObjectId; // Reference to the user who created the list
    tenantID: string; // Tenant ID associated with the contact list
    createdAt: Date; // Timestamp for when the list was created
}