"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentSchema = exports.Agent = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_enums_1 = require("../enums/user-enums");
// ──────── Nested Schemas ────────
let InactivityMessage = class InactivityMessage {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], InactivityMessage.prototype, "duration", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], InactivityMessage.prototype, "message", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, enum: Object.values(user_enums_1.EndBehavior) }),
    __metadata("design:type", String)
], InactivityMessage.prototype, "endBehavior", void 0);
InactivityMessage = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], InactivityMessage);
let AgentSpeakerSettings = class AgentSpeakerSettings {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Boolean)
], AgentSpeakerSettings.prototype, "uninterruptible", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], AgentSpeakerSettings.prototype, "text", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], AgentSpeakerSettings.prototype, "delay", void 0);
AgentSpeakerSettings = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], AgentSpeakerSettings);
let UserSpeakerSettings = class UserSpeakerSettings {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], UserSpeakerSettings.prototype, "text", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], UserSpeakerSettings.prototype, "delay", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], UserSpeakerSettings.prototype, "prompt", void 0);
UserSpeakerSettings = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], UserSpeakerSettings);
let FirstSpeakerSettings = class FirstSpeakerSettings {
};
__decorate([
    (0, mongoose_1.Prop)({ type: AgentSpeakerSettings, required: false }),
    __metadata("design:type", AgentSpeakerSettings)
], FirstSpeakerSettings.prototype, "agent", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: UserSpeakerSettings, required: false }),
    __metadata("design:type", UserSpeakerSettings)
], FirstSpeakerSettings.prototype, "user", void 0);
FirstSpeakerSettings = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], FirstSpeakerSettings);
let VadSettings = class VadSettings {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], VadSettings.prototype, "turnEndpointDelay", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], VadSettings.prototype, "minimumTurnDuration", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], VadSettings.prototype, "minimumInterruptionDuration", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], VadSettings.prototype, "frameActivationThreshold", void 0);
VadSettings = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], VadSettings);
class SelectedTool {
}
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], SelectedTool.prototype, "toolId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], SelectedTool.prototype, "name", void 0);
let CallTemplate = class CallTemplate {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], CallTemplate.prototype, "systemPrompt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], CallTemplate.prototype, "voice", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [SelectedTool], default: [] }),
    __metadata("design:type", Array)
], CallTemplate.prototype, "selectedTools", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], CallTemplate.prototype, "corpusId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, enum: Object.values(user_enums_1.ModelType) }),
    __metadata("design:type", String)
], CallTemplate.prototype, "model", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], CallTemplate.prototype, "temperature", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, enum: Object.values(user_enums_1.InitialOutputMedium) }),
    __metadata("design:type", String)
], CallTemplate.prototype, "initialOutputMedium", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], CallTemplate.prototype, "languageHint", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Boolean)
], CallTemplate.prototype, "recordingEnabled", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], CallTemplate.prototype, "timeExceededMessage", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], CallTemplate.prototype, "joinTimeout", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], CallTemplate.prototype, "maxDuration", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [InactivityMessage], default: [] }),
    __metadata("design:type", Array)
], CallTemplate.prototype, "inactivityMessages", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: FirstSpeakerSettings, required: true }),
    __metadata("design:type", FirstSpeakerSettings)
], CallTemplate.prototype, "firstSpeakerSettings", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: VadSettings, required: true }),
    __metadata("design:type", VadSettings)
], CallTemplate.prototype, "vadSettings", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true, default: `<?xml version="1.0" encoding="UTF-8"?>
<systemPrompt>
  <instruction>
    Based on the full conversation, generate a structured JSON summary of the interaction between the AI agent and the customer. 
    The call flow, outcome classification, follow-up details, and metadata should be inferred according to the rules below. 
    The call flow varies per client and will be provided separately.
  </instruction>

  <rules>

    <!-- 1. Call Flow -->
    <callFlow>
      <note>
        Each client may have their own defined call flow steps (e.g., Greeting → Qualification → Pitch → Objection Handling → Closing).
        Use the client-provided call flow for determining progress in the conversation.
      </note>
    </callFlow>

    <!-- 2. Outcome Classification -->
    <outcomeClassification>
      <option>Interested</option>
      <option>Meeting Scheduled</option>
      <option>Follow-Up Needed</option>
      <option>Not Interested</option>
      <option>Wrong POC</option>
      <option>Disconnected by User</option>
      <option>Not Connected</option>
      <option>Invalid Number</option>

      <conditions>
        <interested>
          <rule>User expresses clear intent to proceed (e.g., “Yes, let’s go ahead”, “Send me the details”).</rule>
          <rule>No meeting or follow-up is required for initial qualification.</rule>
        </interested>

        <meetingScheduled>
          <rule>User agrees to a specific date and time for a meeting, demo, or detailed discussion.</rule>
          <rule>Meeting confirmation is explicitly acknowledged by both agent and user.</rule>
        </meetingScheduled>

        <followUpNeeded>
          <rule>User shows interest but requests a callback or follow-up (e.g., “Call me later”, “Let’s talk next week”).</rule>
          <rule>User drops off before final confirmation and agent schedules follow-up.</rule>
        </followUpNeeded>

        <notInterested>
          <rule>User explicitly declines the product/service.</rule>
          <rule>User refuses callbacks or future engagement.</rule>
        </notInterested>

        <wrongPOC>
          <rule>User states they are not the right person to speak with.</rule>
          <rule>Mentions alternative contact for the relevant discussion.</rule>
        </wrongPOC>

        <disconnectedByUser>
          <rule>User ends the call abruptly after initial interaction.</rule>
          <rule>May express disinterest before hanging up.</rule>
        </disconnectedByUser>

        <notConnected>
          <rule>No meaningful user input (ringing only, unanswered, or voicemail).</rule>
          <rule>Call drops before conversation starts.</rule>
        </notConnected>

        <invalidNumber>
          <rule>Number is unreachable, switched off, or marked invalid by telecom provider.</rule>
        </invalidNumber>
      </conditions>
    </outcomeClassification>

    <!-- 3. Follow-Up Field Logic -->
    <followUpFieldLogic>
      <rule>If outcome == "Follow-Up Needed":</rule>
      <instructions>
        <point>Set followUpPhoneCallDate and followUpPhoneCallTime using inferred or stated values.</point>
        <point>Leave followUpMeetingDate and followUpMeetingTime as empty strings.</point>
      </instructions>

      <rule>If outcome == "Meeting Scheduled":</rule>
      <instructions>
        <point>Set followUpMeetingDate and followUpMeetingTime using inferred or stated values.</point>
        <point>Leave followUpPhoneCallDate and followUpPhoneCallTime as empty strings.</point>
      </instructions>
    </followUpFieldLogic>

    <!-- 4. Follow-Up Date & Time Inference -->
    <followUpTimeInference>
      <context>
        <rule>Assume timezone = Asia/Kolkata.</rule>
        <rule>Use the timestamp of the user's utterance that contains the scheduling phrase as the reference ("reference time").</rule>
        <rule>If needed, you may also use the call start timestamp when the utterance timestamp is unclear.</rule>
      </context>

      <timeOnly>
        <rule>If only a time is mentioned (e.g., “Call me at 3 PM”):</rule>
        <rule>— Set the date to the same calendar date as the reference time.</rule>
        <rule>— If that time has already passed on that date, schedule for the next calendar day.</rule>
      </timeOnly>

      <datePhrases>
        <mapping>“today” → the calendar date of the reference time.</mapping>
        <mapping>“tomorrow” → the next calendar day after the reference time.</mapping>
        <mapping>Specific weekday (e.g., “Monday”) → the next occurrence of that weekday after the reference time; if the reference day itself is that weekday but the mentioned time has passed, use the following week.</mapping>
        <mapping>“next week” → the Monday of the week following the current week of the reference time.</mapping>
      </datePhrases>

      <timePhrases>
        <default>“morning” → 10:00 AM</default>
        <default>“afternoon” → 2:00 PM</default>
        <default>“evening” → 4:30 PM</default>
        <default>Weekday mentioned without a time → 10:00 AM on that day</default>
        <default>“on Monday” without a time → 9:00 AM</default>
      </timePhrases>

      <relative>
        <example>“after 10 minutes” → add 10 minutes to the reference time.</example>
        <example>“in 1 hour” → add 1 hour to the reference time.</example>
        <rule>If the resulting time crosses midnight, roll over to the next calendar day accordingly.</rule>
      </relative>

      <conflictsAndAmbiguity>
        <rule>If both a specific date/weekday and a relative phrase appear, prefer the explicit date/weekday and interpret the time from the relative phrase if present.</rule>
        <rule>If both a part-of-day (morning/afternoon/evening) and a specific clock time are present, prefer the specific clock time.</rule>
      </conflictsAndAmbiguity>

      <fallbackLogic>
        <followUpNeeded>
          <rule>If the user asks for a phone callback but gives no usable date/time after applying the rules above:</rule>
          <defaultDate>Set to the next business day (Monday–Saturday). If the next day is Sunday, move to Monday.</defaultDate>
          <defaultTime>10:00 AM</defaultTime>
        </followUpNeeded>

        <meetingScheduled>
          <rule>If a meeting is agreed in principle but the user gives no usable date/time after applying the rules above:</rule>
          <defaultDate>Set to the next business day (Monday–Saturday). If the next day is Sunday, move to Monday.</defaultDate>
          <defaultTime>2:00 PM</defaultTime>
        </meetingScheduled>
      </fallbackLogic>
    </followUpTimeInference>

    <!-- 5. JSON Output Format -->
    <outputFormat>
      <structure>
        {
          "outcome": "",
          "outcomeDetails": "",
          "callSummary": "",
          "callPickedUpByRecipient": "",
          "followUpInfo": {
            "followUpPhoneCallDate": "",
            "followUpPhoneCallTime": "",
            "followUpTimeZone": "Asia/Kolkata",
            "followUpMeetingDate": "",
            "followUpMeetingTime": "",
            "followUpCallStatus": null,
            "followUpMeetingStatus": null
          },
          "alternateContact": {
            "name": "",
            "phone": "",
            "email": ""
          },
          "additionalMetadata": {
            "customFields": {}
          }
        }
      </structure>
    </outputFormat>

    <!-- 6. Field Rules -->
    <fieldRules>
      <rule>followUpPhoneCallDate/Time are set ONLY if outcome == "Follow-Up Needed".</rule>
      <rule>followUpMeetingDate/Time are set ONLY if outcome == "Meeting Scheduled".</rule>
      <rule>If no date/time is provided → leave all follow-up fields blank.</rule>
      <rule>outcome → must match one of the allowed outcomes exactly.</rule>
      <rule>outcomeDetails → short justification for outcome selection.</rule>
      <rule>callSummary → 1-2 sentence overview of user journey.</rule>
      <rule>callPickedUpByRecipient → “Yes”, “No”, or blank if unclear.</rule>
      <rule>additionalMetadata.customFields → free-form object for client-specific data.</rule>
    </fieldRules>

  </rules>
</systemPrompt>
`
    }),
    __metadata("design:type", String)
], CallTemplate.prototype, "summarizePrompt", void 0);
CallTemplate = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], CallTemplate);
// ──────── Main Agent Schema ────────
let Agent = class Agent {
};
exports.Agent = Agent;
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true }),
    __metadata("design:type", String)
], Agent.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: CallTemplate, required: true }),
    __metadata("design:type", CallTemplate)
], Agent.prototype, "callTemplate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: true, index: true }),
    __metadata("design:type", String)
], Agent.prototype, "agentId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: '', maxlength: 500 }),
    __metadata("design:type", String)
], Agent.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        enum: Object.values(user_enums_1.AgentType),
        required: true,
        index: true,
    }),
    __metadata("design:type", String)
], Agent.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, required: true, index: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Agent.prototype, "voiceDbId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true, trim: true }),
    __metadata("design:type", String)
], Agent.prototype, "voiceName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Agent.prototype, "callingModel", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Agent.prototype, "displayVoiceName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date, default: () => new Date(), index: true }),
    __metadata("design:type", Date)
], Agent.prototype, "agentCreatedAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], Agent.prototype, "isCreatedByMyriadai", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: true }),
    __metadata("design:type", Boolean)
], Agent.prototype, "isLiveMode", void 0);
exports.Agent = Agent = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
        autoCreate: false,
        autoIndex: false,
    })
], Agent);
exports.AgentSchema = mongoose_1.SchemaFactory.createForClass(Agent);
