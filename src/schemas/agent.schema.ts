import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { EndBehavior, ModelType, InitialOutputMedium, AgentType, RegionCode } from '../enums/user-enums';

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
    required: true, default: `
   <summarize>
     Based on the full conversation, generate a structured JSON summary of the interaction between the AI agent and the customer.
     The call flow, outcome classification, follow-up details, and metadata should be inferred according to the rules below.
     The call flow varies per client and will be provided separately.
   </summarize>
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


  @Prop({ required: true, enum: RegionCode, default: RegionCode.IN })
  regionCode!: RegionCode;

  @Prop({ type: Date, default: () => new Date(), index: true })
  agentCreatedAt!: Date;

  @Prop({ type: Boolean, default: false })
  isCreatedByMyriadai!: boolean;

  @Prop({ type: Boolean, default: true })
  isLiveMode!: boolean;
}

export const AgentSchema = SchemaFactory.createForClass(Agent);
