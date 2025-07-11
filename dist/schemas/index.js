"use strict";
// src/schemas/index.ts
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
__exportStar(require("./user.schema"), exports);
__exportStar(require("./client-setting.schema"), exports);
__exportStar(require("./call-history.schema"), exports);
__exportStar(require("./call-transcript.schema"), exports);
__exportStar(require("./daily-call-statistics.schema"), exports);
__exportStar(require("./monthly-call-statistics.schema"), exports);
__exportStar(require("./campaign.schema"), exports);
__exportStar(require("./campaign-contact.schema"), exports);
__exportStar(require("./call-queue-data.schema"), exports);
__exportStar(require("./call-metrics.schema"), exports);
__exportStar(require("./settings.schema"), exports);
__exportStar(require("./follow-up-call.schema"), exports);
__exportStar(require("./contact.schema"), exports);
__exportStar(require("./contact-list.schema"), exports);
__exportStar(require("./voice-gallery.schema"), exports);
__exportStar(require("./workflow.schema"), exports);
__exportStar(require("./client-voice-gallery.schema"), exports);
__exportStar(require("./agent.schema"), exports);
