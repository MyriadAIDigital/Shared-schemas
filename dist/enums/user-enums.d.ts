export declare enum CompanyName {
    HAVISTO_TEA = "HAVISTO_TEA",
    LETS_VENTURE = "LETS_VENTURE",
    MYRIADAI = "MYRIADAI",
    CLEARTAX = "CLEARTAX",
    GOVERNMENT_OF_KARNATAKA = "GOVERNMENT_OF_KARNATAKA",// Descriptive key
    WEEKDAY = "WEEKDAY",
    CASHBOOK = "CASHBOOK"
}
export declare enum Role {
    SUPER_ADMIN = "SuperAdmin",
    ADMIN = "Admin",
    USER = "User",
    GUEST = "Guest"
}
export declare enum TTSVOICE {
    ELEVENLABS = "ELEVENLABS",
    AZURE = "AZURE"
}
export declare enum TelephonicProviders {
    TWILIO = "TWILIO",
    PLIVO = "PLIVO",
    Browser = "Browser"
}
export declare enum SttProvider {
    DEEPGRAM = "DEEPGRAM",
    AZURE = "AZURE"
}
export declare enum VoiceGender {
    MALE = "MALE",
    FEMALE = "FEMALE"
}
export declare enum VoiceType {
    PREMIUM = "PREMIUM",
    STANDARD = "STANDARD"
}
export declare enum VoiceSource {
    ELEVENLABS = "ELEVENLABS",
    AZURE = "AZURE",
    ULTRAVOX = "ULTRAVOX"
}
export declare enum listType {
    CAMPAIGN = "Campaign",
    DEFAULT = "Default"
}
export declare enum CountryCode {
    INDIA = "+91",
    USA = "+1",
    UK = "+44",
    CANADA = "+1",
    AUSTRALIA = "+61"
}
export declare enum Timezone {
    UTC = "UTC",
    IST = "Asia/Kolkata",
    PST = "America/Los_Angeles"
}
export declare enum RetriggerStatus {
    PENDING = "pending",
    IN_PROGRESS = "inprogress",
    COMPLETE = "complete"
}
export declare enum CampaignType {
    OUTBOUND = "Outbound",
    INBOUND = "Inbound",
    ONDEMAND = "OnDemand"
}
export declare enum ContactSourceType {
    FILE = "File",
    CONTACT_LIST_ID = "ContactListId",
    WEBHOOK = "Webhook"
}
export declare enum WorkflowTypeEnum {
    DEFAULT = "default",
    HIGH_PRIORITY = "high-priority",
    GENTLE = "gentle"
}
export declare enum StepTypeEnum {
    CALL = "CALL",
    EMAIL = "EMAIL",
    MESSAGE = "MESSAGE",
    WHATSAPP = "WHATSAPP",
    WEBHOOK = "WEBHOOK"
}
export declare enum WorkflowStepStatus {
    PENDING = "pending",
    IN_PROGRESS = "in-progress",
    COMPLETED = "completed",
    FAILED = "failed"
}
export declare enum OutboundPhoneNumber {
    Indian = "+918035735734",
    US = "+18337361664"
}
export declare enum CampaignStatus {
    All = "All",
    IDLE = "Idle",
    NOT_STARTED = "Not Started",// New status added
    ONGOING = "Ongoing",// Changed from 'In Progress'
    COMPLETED = "Completed",
    FAILED = "Failed",
    STOPPED = "Stopped"
}
export declare enum CallingModel {
    DEFAULT = "MyriadAI_V1",
    MyriadAI_V1 = "MyriadAI_V1",
    MyriadAI_V2 = "MyriadAI_V2"
}
export declare enum OngoingStatusSubType {
    SCHEDULED_FOR_TOMORROW = "Scheduled for Tomorrow",// Calls remaining for tomorrow
    ONGOING_NO_SCHEDULE = "Ongoing without Scheduled Calls",// Ongoing with no future calls
    RUNNING = "Running",// Calls actively in progress
    NOT_UPDATED = "Not Updated"
}
export declare enum RescheduleType {
    NOT_STARTED = "NotStarted",// Campaign not started 
    IN_PROGRESS = "InProgress",// Campaign is in progress
    COMPLETED = "Completed",// Campaign is completed
    FAILED = "Failed",// Campaign has failed
    SCHEDULED_FOR_TOMORROW = "Scheduled for Tomorrow"
}
export declare enum FollowUpStatus {
    PENDING = "PENDING",
    RESCHEDULED = "Rescheduled",// Calls remaining for tomorrow
    COMPLETED = "COMPLETED",
    CANCELLED = "CANCELLED"
}
export declare enum CallQueueStatus {
    NEW = "NEW",
    IN_PROGRESS = "IN_PROGRESS",
    NOT_CONNECTED = "NOT_CONNECTED",// Call did not connect (e.g., user didn't pick up)
    COMPLETED = "COMPLETED",
    FAILED = "FAILED",
    STOPPED = "STOPPED"
}
export declare enum QueueStatus {
    NOT_STARTED = "NOT_STARTED",
    IN_PROGRESS = "IN_PROGRESS",
    DONE = "DONE"
}
export declare enum CallType {
    INITIAL_CALL = "InitialCall",// Changed from CampaignCall
    CAMPAIGN_REATTEMPT_CALL = "CampaignReattemptCall",
    FOLLOW_UP_CALL = "FollowUpCall",
    FOLLOW_UP_REATTEMPT_CALL = "FollowUpReattemptCall",// New call type added
    ON_DEMAND_CALL = "OnDemandCall"
}
export declare enum CallStatus {
    NOT_STARTED = "Not Started Yet",// Call has not yet been initiated
    GENERATED = "Call Generated",// Call is initiated but not yet connected
    RECEIVED = "Call Received",// Call is successfully picked up
    NOT_PICKED_UP = "Call Not Picked Up",// Call was not answered
    REATTEMPTED = "Call Reattempted"
}
export declare enum CreditDeductionStatus {
    Default = "default",// not yet attempted
    Success = "success",// deduction succeeded
    Failed = "failed"
}
export declare enum AgentType {
    MYRIADAI_AGENT_TYPE_1 = "MYRIADAI_AGENT_TYPE_1",
    MYRIADAI_AGENT_TYPE_2 = "MYRIADAI_AGENT_TYPE_2"
}
export declare enum AgentToolsType {
    AGENT_TOOLS_TYPE_1 = "AGENT_TOOLS_TYPE_1",
    AGENT_TOOLS_TYPE_2 = "AGENT_TOOLS_TYPE_2"
}
export declare enum CorpusStatus {
    CORPUS_STATUS_UNSPECIFIED = "CORPUS_STATUS_UNSPECIFIED",
    CORPUS_STATUS_EMPTY = "CORPUS_STATUS_EMPTY",
    CORPUS_STATUS_INITIALIZING = "CORPUS_STATUS_INITIALIZING",
    CORPUS_STATUS_READY = "CORPUS_STATUS_READY",
    CORPUS_STATUS_UPDATING = "CORPUS_STATUS_UPDATING"
}
export declare enum EndBehavior {
    END_BEHAVIOR_UNSPECIFIED = "END_BEHAVIOR_UNSPECIFIED",
    END_BEHAVIOR_HANG_UP_SOFT = "END_BEHAVIOR_HANG_UP_SOFT",
    END_BEHAVIOR_HANG_UP_STRICT = "END_BEHAVIOR_HANG_UP_STRICT"
}
export declare enum ModelType {
    MODEL_1 = "fixie-ai/ultravox"
}
export declare enum InitialOutputMedium {
    MESSAGE_MEDIUM_UNSPECIFIED = "MESSAGE_MEDIUM_UNSPECIFIED",
    MESSAGE_MEDIUM_VOICE = "MESSAGE_MEDIUM_VOICE",
    MESSAGE_MEDIUM_TEXT = "MESSAGE_MEDIUM_TEXT"
}
export declare enum ParameterLocation {
    PARAMETER_LOCATION_UNSPECIFIED = "PARAMETER_LOCATION_UNSPECIFIED",
    PARAMETER_LOCATION_QUERY = "PARAMETER_LOCATION_QUERY",
    PARAMETER_LOCATION_PATH = "PARAMETER_LOCATION_PATH",
    PARAMETER_LOCATION_HEADER = "PARAMETER_LOCATION_HEADER",
    PARAMETER_LOCATION_BODY = "PARAMETER_LOCATION_BODY"
}
export declare enum KnownValue {
    KNOWN_PARAM_UNSPECIFIED = "KNOWN_PARAM_UNSPECIFIED",
    KNOWN_PARAM_CALL_ID = "KNOWN_PARAM_CALL_ID",
    KNOWN_PARAM_CONVERSATION_HISTORY = "KNOWN_PARAM_CONVERSATION_HISTORY",
    KNOWN_PARAM_OUTPUT_SAMPLE_RATE = "KNOWN_PARAM_OUTPUT_SAMPLE_RATE",
    KNOWN_PARAM_CALL_STATE = "KNOWN_PARAM_CALL_STATE"
}
export declare enum HttpMethod {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE"
}
//# sourceMappingURL=user-enums.d.ts.map