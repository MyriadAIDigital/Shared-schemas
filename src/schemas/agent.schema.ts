import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { EndBehavior, ModelType, InitialOutputMedium, AgentType } from '../enums/user-enums';

export type AgentDocument = Agent & Document;

// ──────── Nested Schemas ────────

@Schema({ _id: false })
class InactivityMessage {
    @Prop({ required: true })
    duration!: string; // fixed

    @Prop({ required: true })
    message!: string;

    @Prop({ required: true, enum: Object.values(EndBehavior) })
    endBehavior!: EndBehavior;
}

@Schema({ _id: false })
class AgentSpeakerSettings {
    @Prop({ required: true })
    uninterruptible!: boolean;

    @Prop({ required: true })
    text!: string;

    @Prop({ required: true })
    delay!: string; // fixed
}

@Schema({ _id: false })
class UserSpeakerSettings {
    @Prop({ required: true })
    text!: string;

    @Prop({ required: true })
    delay!: string; // fixed

    @Prop()
    prompt?: string;
}

@Schema({ _id: false })
class FirstSpeakerSettings {
    @Prop({ type: AgentSpeakerSettings, required: false })
    agent?: AgentSpeakerSettings;

    @Prop({ type: UserSpeakerSettings, required: false })
    user?: UserSpeakerSettings;
}

@Schema({ _id: false })
class VadSettings {
    @Prop({ required: true })
    turnEndpointDelay!: string; // fixed

    @Prop({ required: true })
    minimumTurnDuration!: string; // fixed

    @Prop({ required: true })
    minimumInterruptionDuration!: string; // fixed

    @Prop({ required: true })
    frameActivationThreshold!: string; // fixed
}


class SelectedTool {
    @Prop({ required: true })
    toolId!: string;

    @Prop({ required: true })
    name!: string;
}
@Schema({ _id: false })
class CallTemplate {
    @Prop({ required: true })
    systemPrompt!: string;



    @Prop({ required: true })
    voice!: string;

    @Prop({ type: [SelectedTool], default: [] })
    selectedTools?: SelectedTool[];

    @Prop()
    corpusId?: string;

    @Prop({ required: true, enum: Object.values(ModelType) })
    model!: ModelType;

    @Prop({ required: true })
    temperature!: string; // fixed

    @Prop({ required: true, enum: Object.values(InitialOutputMedium) })
    initialOutputMedium!: InitialOutputMedium;

    @Prop({ required: true })
    languageHint!: string;

    @Prop({ required: true })
    recordingEnabled!: boolean;

    @Prop({ required: true })
    timeExceededMessage!: string;

    @Prop({ required: true })
    joinTimeout!: string;

    @Prop({ required: true })
    maxDuration!: string;

    @Prop({ type: [InactivityMessage], default: [] })
    inactivityMessages!: InactivityMessage[];

    @Prop({ type: FirstSpeakerSettings, required: true })
    firstSpeakerSettings!: FirstSpeakerSettings;

    @Prop({ type: VadSettings, required: true })
    vadSettings!: VadSettings;

    @Prop({
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
` })
    summarizePrompt!: string;
}

// ──────── Main Agent Schema ────────

@Schema({
    timestamps: true,
    autoCreate: false,
    autoIndex: false,
})
export class Agent {
    @Prop({ required: true, trim: true })
    name!: string;

    @Prop({ type: CallTemplate, required: true })
    callTemplate!: CallTemplate;

    @Prop({ required: true, unique: true, index: true })
    agentId!: string;

    @Prop({ type: String, default: '', maxlength: 500 })
    description!: string;

    @Prop({
        type: String,
        enum: Object.values(AgentType),
        required: true,
        index: true,
    })
    type!: AgentType;

    @Prop({ type: Types.ObjectId, required: true, index: true })
    voiceDbId!: Types.ObjectId;

    @Prop({ type: String, required: true, trim: true })
    voiceName!: string;

    @Prop({ type: String, required: true })
    callingModel!: string;

    @Prop({ type: String, required: true })
    displayVoiceName!: string;

    @Prop({ type: Date, default: () => new Date(), index: true })
    agentCreatedAt!: Date;

    @Prop({ type: Boolean, default: false })
    isCreatedByMyriadai!: boolean;

    @Prop({ type: Boolean, default: true })
    isLiveMode!: boolean;
}

export const AgentSchema = SchemaFactory.createForClass(Agent);
