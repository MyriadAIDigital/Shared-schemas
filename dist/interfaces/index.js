"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/interfaces/index.ts
__exportStar(require("./user.interface"), exports);
__exportStar(require("./client-setting.interface"), exports);
__exportStar(require("./call-history.interface"), exports);
__exportStar(require("./call-transcript.interface"), exports);
__exportStar(require("./daily-call-statistics.interface"), exports);
__exportStar(require("./monthly-call-statistics.interface"), exports);
__exportStar(require("./campaign.interface"), exports);
__exportStar(require("./campaign-contact.interface"), exports);
__exportStar(require("./call-queue-data.interface"), exports);
__exportStar(require("./call-metrics.interface"), exports);
__exportStar(require("./settings.interface"), exports);
__exportStar(require("./follow-up-call.interface"), exports);
__exportStar(require("./contact-list.interface"), exports);
__exportStar(require("./voice-gallery.interface"), exports);
__exportStar(require("./workflow.interface"), exports);
__exportStar(require("./balance.interface"), exports);
__exportStar(require("./contact.interface"), exports);
__exportStar(require("./client-voice-gallery.interface"), exports);
__exportStar(require("./tenant-outcome.interface"), exports);
