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

class BuiltInTool {

  @Prop({ required: true })
  toolName!: string;
}
@Schema({ _id: false })
class CallTemplate {
  @Prop({ required: true })
  systemPrompt!: string;



  @Prop({ required: true })
  voice!: string;

  @Prop({ type: [SelectedTool], default: [] })
  selectedTools?: SelectedTool[];

  @Prop({ type: [BuiltInTool], default: [] })
  builtInTools?: BuiltInTool[];

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
    required: true, default: `  <instruction>
    Based on the full conversation, generate a structured JSON summary of the interaction between the AI agent and the customer. 
    The call flow, outcome classification, follow-up details, and metadata should be inferred according to the rules below. 
    The call flow varies per client and will be provided separately.
  </instruction>

  <rules>
    <callFlow>
      <note>
        Each client may have their own defined call flow steps (e.g., Greeting → Qualification → Pitch → Objection Handling → Closing).
        Use the client-provided call flow for determining progress in the conversation.
      </note>
    </callFlow>

    <!-- 2. Outcome Classification -->
    <outcomeClassification>   
      <conditions>
        <noInteraction>
         <rule>The conversation contains only agent turns; the user never speaks or inputs DTMF.</rule>
         <rule>Ringing-only, unanswered, voicemail without any user utterance, or call drop before the first user turn.</rule>
         <rule>Number unreachable/invalid or network gate prevents any user turn being captured.</rule>
         <note>When any of the above occur, set outcome = "No Interaction".</note>
      </noInteraction>

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
  
        <invalidNumber>
          <rule>Number is unreachable, switched off, or marked invalid by telecom provider.</rule>
        </invalidNumber>
      </conditions>
    </outcomeClassification>

 
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

 <summaryWording>
    <rule>Do not fabricate user responses. If only the agent spoke, explicitly state that the user did not respond.</rule>
    <examples>
      <example outcome="No Interaction">"Agent attempted the greeting and brief pitch; the user did not respond. Call ended without any user input."</example>
      <example outcome="No Interaction (voicemail)">"Agent reached voicemail; no user response captured. No conversation took place."</example>
    </examples>
  </summaryWording>
  </rules>
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
