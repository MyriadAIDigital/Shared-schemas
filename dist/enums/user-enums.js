"use strict";
// src/common/enum.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpMethod = exports.KnownValue = exports.ParameterLocation = exports.InitialOutputMedium = exports.ModelType = exports.EndBehavior = exports.CorpusStatus = exports.AgentToolsType = exports.AgentType = exports.CreditDeductionStatus = exports.CallStatus = exports.CallType = exports.QueueStatus = exports.CallQueueStatus = exports.FollowUpStatus = exports.RescheduleType = exports.OngoingStatusSubType = exports.CallingModel = exports.CampaignStatus = exports.OutboundPhoneNumber = exports.WorkflowStepStatus = exports.StepTypeEnum = exports.WorkflowTypeEnum = exports.ContactSourceType = exports.CampaignType = exports.RetriggerStatus = exports.Timezone = exports.CountryCode = exports.listType = exports.VoiceSource = exports.VoiceType = exports.VoiceGender = exports.SttProvider = exports.TelephonicProviders = exports.TTSVOICE = exports.Role = exports.CompanyName = void 0;
var CompanyName;
(function (CompanyName) {
    CompanyName["HAVISTO_TEA"] = "HAVISTO_TEA";
    CompanyName["LETS_VENTURE"] = "LETS_VENTURE";
    CompanyName["MYRIADAI"] = "MYRIADAI";
    CompanyName["CLEARTAX"] = "CLEARTAX";
    CompanyName["GOVERNMENT_OF_KARNATAKA"] = "GOVERNMENT_OF_KARNATAKA";
    CompanyName["WEEKDAY"] = "WEEKDAY";
    CompanyName["CASHBOOK"] = "CASHBOOK";
})(CompanyName || (exports.CompanyName = CompanyName = {}));
var Role;
(function (Role) {
    Role["SUPER_ADMIN"] = "SuperAdmin";
    Role["ADMIN"] = "Admin";
    Role["USER"] = "User";
    Role["GUEST"] = "Guest";
})(Role || (exports.Role = Role = {}));
var TTSVOICE;
(function (TTSVOICE) {
    TTSVOICE["ELEVENLABS"] = "ELEVENLABS";
    TTSVOICE["AZURE"] = "AZURE";
})(TTSVOICE || (exports.TTSVOICE = TTSVOICE = {}));
;
var TelephonicProviders;
(function (TelephonicProviders) {
    TelephonicProviders["TWILIO"] = "TWILIO";
    TelephonicProviders["PLIVO"] = "PLIVO";
    TelephonicProviders["Browser"] = "Browser";
    // Add more brand names as needed
})(TelephonicProviders || (exports.TelephonicProviders = TelephonicProviders = {}));
;
// src/common/enums/stt-provider.enum.ts
var SttProvider;
(function (SttProvider) {
    SttProvider["DEEPGRAM"] = "DEEPGRAM";
    SttProvider["AZURE"] = "AZURE";
})(SttProvider || (exports.SttProvider = SttProvider = {}));
var VoiceGender;
(function (VoiceGender) {
    VoiceGender["MALE"] = "MALE";
    VoiceGender["FEMALE"] = "FEMALE";
})(VoiceGender || (exports.VoiceGender = VoiceGender = {}));
var VoiceType;
(function (VoiceType) {
    VoiceType["PREMIUM"] = "PREMIUM";
    VoiceType["STANDARD"] = "STANDARD";
})(VoiceType || (exports.VoiceType = VoiceType = {}));
var VoiceSource;
(function (VoiceSource) {
    VoiceSource["ELEVENLABS"] = "ELEVENLABS";
    VoiceSource["AZURE"] = "AZURE";
    VoiceSource["ULTRAVOX"] = "ULTRAVOX";
})(VoiceSource || (exports.VoiceSource = VoiceSource = {}));
var listType;
(function (listType) {
    listType["CAMPAIGN"] = "Campaign";
    listType["DEFAULT"] = "Default";
})(listType || (exports.listType = listType = {}));
var CountryCode;
(function (CountryCode) {
    CountryCode["INDIA"] = "+91";
    CountryCode["USA"] = "+1";
    CountryCode["UK"] = "+44";
    CountryCode["CANADA"] = "+1";
    CountryCode["AUSTRALIA"] = "+61";
    // Add more country codes as needed
})(CountryCode || (exports.CountryCode = CountryCode = {}));
// timezone.enum.ts
var Timezone;
(function (Timezone) {
    Timezone["UTC"] = "UTC";
    Timezone["IST"] = "Asia/Kolkata";
    Timezone["PST"] = "America/Los_Angeles";
    // Add other timezones...
})(Timezone || (exports.Timezone = Timezone = {}));
var RetriggerStatus;
(function (RetriggerStatus) {
    RetriggerStatus["PENDING"] = "pending";
    RetriggerStatus["IN_PROGRESS"] = "inprogress";
    RetriggerStatus["COMPLETE"] = "complete";
})(RetriggerStatus || (exports.RetriggerStatus = RetriggerStatus = {}));
var CampaignType;
(function (CampaignType) {
    CampaignType["OUTBOUND"] = "Outbound";
    CampaignType["INBOUND"] = "Inbound";
    CampaignType["ONDEMAND"] = "OnDemand";
})(CampaignType || (exports.CampaignType = CampaignType = {}));
// contact-source-type.enum.ts
var ContactSourceType;
(function (ContactSourceType) {
    ContactSourceType["FILE"] = "File";
    ContactSourceType["CONTACT_LIST_ID"] = "ContactListId";
    ContactSourceType["WEBHOOK"] = "Webhook";
})(ContactSourceType || (exports.ContactSourceType = ContactSourceType = {}));
var WorkflowTypeEnum;
(function (WorkflowTypeEnum) {
    WorkflowTypeEnum["DEFAULT"] = "default";
    WorkflowTypeEnum["HIGH_PRIORITY"] = "high-priority";
    WorkflowTypeEnum["GENTLE"] = "gentle";
})(WorkflowTypeEnum || (exports.WorkflowTypeEnum = WorkflowTypeEnum = {}));
var StepTypeEnum;
(function (StepTypeEnum) {
    StepTypeEnum["CALL"] = "CALL";
    StepTypeEnum["EMAIL"] = "EMAIL";
    StepTypeEnum["MESSAGE"] = "MESSAGE";
    StepTypeEnum["WHATSAPP"] = "WHATSAPP";
    StepTypeEnum["WEBHOOK"] = "WEBHOOK";
})(StepTypeEnum || (exports.StepTypeEnum = StepTypeEnum = {}));
var WorkflowStepStatus;
(function (WorkflowStepStatus) {
    WorkflowStepStatus["PENDING"] = "pending";
    WorkflowStepStatus["IN_PROGRESS"] = "in-progress";
    WorkflowStepStatus["COMPLETED"] = "completed";
    WorkflowStepStatus["FAILED"] = "failed";
})(WorkflowStepStatus || (exports.WorkflowStepStatus = WorkflowStepStatus = {}));
var OutboundPhoneNumber;
(function (OutboundPhoneNumber) {
    OutboundPhoneNumber["Indian"] = "+918035735734";
    OutboundPhoneNumber["US"] = "+18337361664";
})(OutboundPhoneNumber || (exports.OutboundPhoneNumber = OutboundPhoneNumber = {}));
var CampaignStatus;
(function (CampaignStatus) {
    CampaignStatus["All"] = "All";
    CampaignStatus["IDLE"] = "Idle";
    CampaignStatus["NOT_STARTED"] = "Not Started";
    CampaignStatus["ONGOING"] = "Ongoing";
    CampaignStatus["COMPLETED"] = "Completed";
    CampaignStatus["FAILED"] = "Failed";
    CampaignStatus["STOPPED"] = "Stopped";
})(CampaignStatus || (exports.CampaignStatus = CampaignStatus = {}));
var CallingModel;
(function (CallingModel) {
    CallingModel["DEFAULT"] = "MyriadAI_V1";
    CallingModel["MyriadAI_V1"] = "MyriadAI_V1";
    CallingModel["MyriadAI_V2"] = "MyriadAI_V2";
})(CallingModel || (exports.CallingModel = CallingModel = {}));
var OngoingStatusSubType;
(function (OngoingStatusSubType) {
    OngoingStatusSubType["SCHEDULED_FOR_TOMORROW"] = "Scheduled for Tomorrow";
    OngoingStatusSubType["ONGOING_NO_SCHEDULE"] = "Ongoing without Scheduled Calls";
    OngoingStatusSubType["RUNNING"] = "Running";
    OngoingStatusSubType["NOT_UPDATED"] = "Not Updated";
})(OngoingStatusSubType || (exports.OngoingStatusSubType = OngoingStatusSubType = {}));
var RescheduleType;
(function (RescheduleType) {
    RescheduleType["NOT_STARTED"] = "NotStarted";
    RescheduleType["IN_PROGRESS"] = "InProgress";
    RescheduleType["COMPLETED"] = "Completed";
    RescheduleType["FAILED"] = "Failed";
    RescheduleType["SCHEDULED_FOR_TOMORROW"] = "Scheduled for Tomorrow";
})(RescheduleType || (exports.RescheduleType = RescheduleType = {}));
var FollowUpStatus;
(function (FollowUpStatus) {
    FollowUpStatus["PENDING"] = "PENDING";
    FollowUpStatus["RESCHEDULED"] = "Rescheduled";
    FollowUpStatus["COMPLETED"] = "COMPLETED";
    FollowUpStatus["CANCELLED"] = "CANCELLED";
})(FollowUpStatus || (exports.FollowUpStatus = FollowUpStatus = {}));
var CallQueueStatus;
(function (CallQueueStatus) {
    CallQueueStatus["NEW"] = "NEW";
    CallQueueStatus["IN_PROGRESS"] = "IN_PROGRESS";
    CallQueueStatus["NOT_CONNECTED"] = "NOT_CONNECTED";
    CallQueueStatus["COMPLETED"] = "COMPLETED";
    CallQueueStatus["FAILED"] = "FAILED";
    CallQueueStatus["STOPPED"] = "STOPPED";
})(CallQueueStatus || (exports.CallQueueStatus = CallQueueStatus = {}));
var QueueStatus;
(function (QueueStatus) {
    QueueStatus["NOT_STARTED"] = "NOT_STARTED";
    QueueStatus["IN_PROGRESS"] = "IN_PROGRESS";
    QueueStatus["DONE"] = "DONE";
})(QueueStatus || (exports.QueueStatus = QueueStatus = {}));
var CallType;
(function (CallType) {
    CallType["INITIAL_CALL"] = "InitialCall";
    CallType["CAMPAIGN_REATTEMPT_CALL"] = "CampaignReattemptCall";
    CallType["FOLLOW_UP_CALL"] = "FollowUpCall";
    CallType["FOLLOW_UP_REATTEMPT_CALL"] = "FollowUpReattemptCall";
    CallType["ON_DEMAND_CALL"] = "OnDemandCall";
})(CallType || (exports.CallType = CallType = {}));
var CallStatus;
(function (CallStatus) {
    CallStatus["NOT_STARTED"] = "Not Started Yet";
    CallStatus["GENERATED"] = "Call Generated";
    CallStatus["RECEIVED"] = "Call Received";
    CallStatus["NOT_PICKED_UP"] = "Call Not Picked Up";
    CallStatus["REATTEMPTED"] = "Call Reattempted";
})(CallStatus || (exports.CallStatus = CallStatus = {}));
var CreditDeductionStatus;
(function (CreditDeductionStatus) {
    CreditDeductionStatus["Default"] = "default";
    CreditDeductionStatus["Success"] = "success";
    CreditDeductionStatus["Failed"] = "failed";
})(CreditDeductionStatus || (exports.CreditDeductionStatus = CreditDeductionStatus = {}));
var AgentType;
(function (AgentType) {
    // TYPE_1 IS FOR MYRIAD SELF AGENTS ONLY
    AgentType["MYRIADAI_AGENT_TYPE_1"] = "MYRIADAI_AGENT_TYPE_1";
    //TYPE_2 IS FOR ULTRAVOX AGENT
    AgentType["MYRIADAI_AGENT_TYPE_2"] = "MYRIADAI_AGENT_TYPE_2";
})(AgentType || (exports.AgentType = AgentType = {}));
var AgentToolsType;
(function (AgentToolsType) {
    //ultravox
    AgentToolsType["AGENT_TOOLS_TYPE_1"] = "AGENT_TOOLS_TYPE_1";
    //custom
    AgentToolsType["AGENT_TOOLS_TYPE_2"] = "AGENT_TOOLS_TYPE_2";
})(AgentToolsType || (exports.AgentToolsType = AgentToolsType = {}));
var CorpusStatus;
(function (CorpusStatus) {
    // Default/unknown state
    CorpusStatus["CORPUS_STATUS_UNSPECIFIED"] = "CORPUS_STATUS_UNSPECIFIED";
    // Corpus has been created but has no data
    CorpusStatus["CORPUS_STATUS_EMPTY"] = "CORPUS_STATUS_EMPTY";
    // Corpus is being processed or indexed
    CorpusStatus["CORPUS_STATUS_INITIALIZING"] = "CORPUS_STATUS_INITIALIZING";
    // Corpus is ready for querying
    CorpusStatus["CORPUS_STATUS_READY"] = "CORPUS_STATUS_READY";
    // Corpus is undergoing update operations
    CorpusStatus["CORPUS_STATUS_UPDATING"] = "CORPUS_STATUS_UPDATING";
})(CorpusStatus || (exports.CorpusStatus = CorpusStatus = {}));
//TODO: Add THIS ENUM TO THE SHARED SCHEMAS
var EndBehavior;
(function (EndBehavior) {
    EndBehavior["END_BEHAVIOR_UNSPECIFIED"] = "END_BEHAVIOR_UNSPECIFIED";
    EndBehavior["END_BEHAVIOR_HANG_UP_SOFT"] = "END_BEHAVIOR_HANG_UP_SOFT";
    EndBehavior["END_BEHAVIOR_HANG_UP_STRICT"] = "END_BEHAVIOR_HANG_UP_STRICT";
})(EndBehavior || (exports.EndBehavior = EndBehavior = {}));
var ModelType;
(function (ModelType) {
    ModelType["MODEL_1"] = "fixie-ai/ultravox";
})(ModelType || (exports.ModelType = ModelType = {}));
var InitialOutputMedium;
(function (InitialOutputMedium) {
    InitialOutputMedium["MESSAGE_MEDIUM_UNSPECIFIED"] = "MESSAGE_MEDIUM_UNSPECIFIED";
    InitialOutputMedium["MESSAGE_MEDIUM_VOICE"] = "MESSAGE_MEDIUM_VOICE";
    InitialOutputMedium["MESSAGE_MEDIUM_TEXT"] = "MESSAGE_MEDIUM_TEXT";
})(InitialOutputMedium || (exports.InitialOutputMedium = InitialOutputMedium = {}));
var ParameterLocation;
(function (ParameterLocation) {
    ParameterLocation["PARAMETER_LOCATION_UNSPECIFIED"] = "PARAMETER_LOCATION_UNSPECIFIED";
    ParameterLocation["PARAMETER_LOCATION_QUERY"] = "PARAMETER_LOCATION_QUERY";
    ParameterLocation["PARAMETER_LOCATION_PATH"] = "PARAMETER_LOCATION_PATH";
    ParameterLocation["PARAMETER_LOCATION_HEADER"] = "PARAMETER_LOCATION_HEADER";
    ParameterLocation["PARAMETER_LOCATION_BODY"] = "PARAMETER_LOCATION_BODY";
})(ParameterLocation || (exports.ParameterLocation = ParameterLocation = {}));
var KnownValue;
(function (KnownValue) {
    KnownValue["KNOWN_PARAM_UNSPECIFIED"] = "KNOWN_PARAM_UNSPECIFIED";
    KnownValue["KNOWN_PARAM_CALL_ID"] = "KNOWN_PARAM_CALL_ID";
    KnownValue["KNOWN_PARAM_CONVERSATION_HISTORY"] = "KNOWN_PARAM_CONVERSATION_HISTORY";
    KnownValue["KNOWN_PARAM_OUTPUT_SAMPLE_RATE"] = "KNOWN_PARAM_OUTPUT_SAMPLE_RATE";
    KnownValue["KNOWN_PARAM_CALL_STATE"] = "KNOWN_PARAM_CALL_STATE";
})(KnownValue || (exports.KnownValue = KnownValue = {}));
var HttpMethod;
(function (HttpMethod) {
    HttpMethod["GET"] = "GET";
    HttpMethod["POST"] = "POST";
    HttpMethod["PUT"] = "PUT";
    HttpMethod["DELETE"] = "DELETE";
})(HttpMethod || (exports.HttpMethod = HttpMethod = {}));
