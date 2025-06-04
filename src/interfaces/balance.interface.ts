// src/credit/interfaces/balance.interface.ts

export interface Balance {
    /** remaining balance shown in UI (e.g. ₹12,395) */
    availableCredits: number;
    /** how far below zero you can go */
    minNegativeCreditAllowed: number;
    /** when to warn the user */
    creditNotificationThreshold: number;
    /** the “wallet size” used for your progress bar (e.g. ₹20,000) */
    totalCredits: number;
    /** whether the user can still make calls */
    callsAllowed: boolean;
    /** true if the account is paused due to no credits */
    accountPaused: boolean;
}
