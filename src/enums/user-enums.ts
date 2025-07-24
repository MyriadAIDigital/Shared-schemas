// src/common/enum.ts

export enum CompanyName {
    HAVISTO_TEA = 'HAVISTO_TEA',
    LETS_VENTURE = 'LETS_VENTURE',
    MYRIADAI = 'MYRIADAI',
    CLEARTAX = 'CLEARTAX',
    GOVERNMENT_OF_KARNATAKA = 'GOVERNMENT_OF_KARNATAKA', // Descriptive key
    WEEKDAY = 'WEEKDAY',
    CASHBOOK = 'CASHBOOK',

}

export enum Role {
    SUPER_ADMIN = 'SuperAdmin',
    ADMIN = 'Admin',
    USER = 'User',
    GUEST = 'Guest',
}

export enum CorpusType {
    MyriadaiModel1 = 'MyriadaiModel1', // refer to myriadai.
    MyriadaiModel2 = 'MyriadaiModel2',// refer to ultravox.
    MyriadaiModel3 = 'MyriadaiModel3',
    MyriadaiModel4 = 'MyriadaiModel4',
}

export enum CorpusSourceType {
    WEB = 'WEB',
    FILE = 'FILE',
    API = 'API',
    DATABASE = 'DATABASE',
}


export enum TTSVOICE {
    ELEVENLABS = 'ELEVENLABS',
    AZURE = 'AZURE'

};

export enum TelephonicProviders {
    TWILIO = 'TWILIO',
    PLIVO = 'PLIVO',
    Browser = 'Browser',
    // Add more brand names as needed
};

// src/common/enums/stt-provider.enum.ts
export enum SttProvider {
    DEEPGRAM = 'DEEPGRAM',
    AZURE = 'AZURE',
}


export enum VoiceGender {
    MALE = 'MALE',
    FEMALE = 'FEMALE',
}

export enum VoiceType {
    PREMIUM = 'PREMIUM',
    STANDARD = 'STANDARD',
}

export enum VoiceSource {
    ELEVENLABS = 'ELEVENLABS',
    AZURE = 'AZURE',
    ULTRAVOX = 'ULTRAVOX',
}

export enum listType {
    CAMPAIGN = 'Campaign',
    DEFAULT = 'Default'
}


export enum CountryCode {
    INDIA = '+91',
    USA = '+1',
    UK = '+44',
    CANADA = '+1',
    AUSTRALIA = '+61',
    // Add more country codes as needed
}


// timezone.enum.ts
export enum Timezone {
    UTC = 'UTC',
    IST = 'Asia/Kolkata',
    PST = 'America/Los_Angeles',
    // Add other timezones...
}
export enum RetriggerStatus {
    PENDING = 'pending',
    IN_PROGRESS = 'inprogress',
    COMPLETE = 'complete',
}

export enum CampaignType {
    OUTBOUND = 'Outbound',
    INBOUND = 'Inbound',
    ONDEMAND = 'OnDemand',
}


// contact-source-type.enum.ts
export enum ContactSourceType {
    FILE = 'File',
    CONTACT_LIST_ID = 'ContactListId',
    WEBHOOK = 'Webhook',
}



export enum WorkflowTypeEnum {
    DEFAULT = 'default',
    HIGH_PRIORITY = 'high-priority',
    GENTLE = 'gentle',
}

export enum StepTypeEnum {
    CALL = 'CALL',
    EMAIL = 'EMAIL',
    MESSAGE = 'MESSAGE',
    WHATSAPP = 'WHATSAPP',
    WEBHOOK = 'WEBHOOK',
}

export enum WorkflowStepStatus {
    PENDING = 'pending',
    IN_PROGRESS = 'in-progress',
    COMPLETED = 'completed',
    FAILED = 'failed',
}


export enum OutboundPhoneNumber {
    Indian = '+918035735734',
    US = '+18337361664',
}



export enum CampaignStatus {
    All = "All",
    IDLE = 'Idle',
    NOT_STARTED = 'Not Started', // New status added
    ONGOING = 'Ongoing',         // Changed from 'In Progress'
    COMPLETED = 'Completed',
    FAILED = 'Failed',
    STOPPED = 'Stopped',         // New status added
}

export enum CallingModel {
    DEFAULT = 'MyriadAI_V1',
    MyriadAI_V1 = "MyriadAI_V1",
    MyriadAI_V2 = 'MyriadAI_V2',

}




export enum OngoingStatusSubType {
    SCHEDULED_FOR_TOMORROW = 'Scheduled for Tomorrow', // Calls remaining for tomorrow
    ONGOING_NO_SCHEDULE = 'Ongoing without Scheduled Calls', // Ongoing with no future calls
    RUNNING = 'Running', // Calls actively in progress
    NOT_UPDATED = 'Not Updated', // Default subtype when no updates are applied
}


export enum RescheduleType {
    NOT_STARTED = 'NotStarted',   // Campaign not started 
    IN_PROGRESS = 'InProgress',  // Campaign is in progress
    COMPLETED = 'Completed',     // Campaign is completed
    FAILED = 'Failed',           // Campaign has failed
    SCHEDULED_FOR_TOMORROW = 'Scheduled for Tomorrow', // Calls remaining for tomorrow
}

export enum FollowUpStatus {
    PENDING = 'PENDING',
    RESCHEDULED = 'Rescheduled', // Calls remaining for tomorrow
    COMPLETED = 'COMPLETED',
    CANCELLED = 'CANCELLED',
}

export enum CallQueueStatus {
    NEW = 'NEW',
    IN_PROGRESS = 'IN_PROGRESS',
    NOT_CONNECTED = 'NOT_CONNECTED', // Call did not connect (e.g., user didn't pick up)
    COMPLETED = 'COMPLETED',
    FAILED = 'FAILED',
    STOPPED = 'STOPPED',
}

export enum QueueStatus {
    NOT_STARTED = 'NOT_STARTED',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE',
}



export enum CallType {
    INITIAL_CALL = 'InitialCall', // Changed from CampaignCall
    CAMPAIGN_REATTEMPT_CALL = 'CampaignReattemptCall',
    FOLLOW_UP_CALL = 'FollowUpCall',
    FOLLOW_UP_REATTEMPT_CALL = 'FollowUpReattemptCall', // New call type added
    ON_DEMAND_CALL = 'OnDemandCall', // Added new call type
}


export enum CallStatus {
    NOT_STARTED = 'Not Started Yet', // Call has not yet been initiated
    GENERATED = 'Call Generated', // Call is initiated but not yet connected
    RECEIVED = 'Call Received', // Call is successfully picked up
    NOT_PICKED_UP = 'Call Not Picked Up', // Call was not answered
    REATTEMPTED = 'Call Reattempted', // Call was reattempted
}

export enum CreditDeductionStatus {
    Default = 'default',  // not yet attempted
    Success = 'success',  // deduction succeeded
    Failed = 'failed',    // deduction threw an error
}

export enum AgentType {
    // TYPE_1 IS FOR MYRIAD SELF AGENTS ONLY
    MYRIADAI_AGENT_TYPE_1 = 'MYRIADAI_AGENT_TYPE_1',

    //TYPE_2 IS FOR ULTRAVOX AGENT
    MYRIADAI_AGENT_TYPE_2 = 'MYRIADAI_AGENT_TYPE_2',
}

export enum AgentToolsType {
    //ultravox
    AGENT_TOOLS_TYPE_1 = "AGENT_TOOLS_TYPE_1",
    //custom
    AGENT_TOOLS_TYPE_2 = "AGENT_TOOLS_TYPE_2",
}

export enum CorpusStatus {
    // Default/unknown state
    CORPUS_STATUS_UNSPECIFIED = 'CORPUS_STATUS_UNSPECIFIED',

    // Corpus has been created but has no data
    CORPUS_STATUS_EMPTY = 'CORPUS_STATUS_EMPTY',

    // Corpus is being processed or indexed
    CORPUS_STATUS_INITIALIZING = 'CORPUS_STATUS_INITIALIZING',

    // Corpus is ready for querying
    CORPUS_STATUS_READY = 'CORPUS_STATUS_READY',

    // Corpus is undergoing update operations
    CORPUS_STATUS_UPDATING = 'CORPUS_STATUS_UPDATING',
}


//TODO: Add THIS ENUM TO THE SHARED SCHEMAS
export enum EndBehavior {
    END_BEHAVIOR_UNSPECIFIED = "END_BEHAVIOR_UNSPECIFIED",
    END_BEHAVIOR_HANG_UP_SOFT = "END_BEHAVIOR_HANG_UP_SOFT",
    END_BEHAVIOR_HANG_UP_STRICT = "END_BEHAVIOR_HANG_UP_STRICT"
}

export enum ModelType {
    MODEL_1 = "fixie-ai/ultravox",
}

export enum InitialOutputMedium {
    MESSAGE_MEDIUM_UNSPECIFIED = "MESSAGE_MEDIUM_UNSPECIFIED",
    MESSAGE_MEDIUM_VOICE = "MESSAGE_MEDIUM_VOICE",
    MESSAGE_MEDIUM_TEXT = "MESSAGE_MEDIUM_TEXT"
}

export enum ParameterLocation {
    PARAMETER_LOCATION_UNSPECIFIED = "PARAMETER_LOCATION_UNSPECIFIED",
    PARAMETER_LOCATION_QUERY = "PARAMETER_LOCATION_QUERY",
    PARAMETER_LOCATION_PATH = "PARAMETER_LOCATION_PATH",
    PARAMETER_LOCATION_HEADER = "PARAMETER_LOCATION_HEADER",
    PARAMETER_LOCATION_BODY = "PARAMETER_LOCATION_BODY"
}

export enum KnownValue {
    KNOWN_PARAM_UNSPECIFIED = "KNOWN_PARAM_UNSPECIFIED",
    KNOWN_PARAM_CALL_ID = "KNOWN_PARAM_CALL_ID",
    KNOWN_PARAM_CONVERSATION_HISTORY = "KNOWN_PARAM_CONVERSATION_HISTORY",
    KNOWN_PARAM_OUTPUT_SAMPLE_RATE = "KNOWN_PARAM_OUTPUT_SAMPLE_RATE",
    KNOWN_PARAM_CALL_STATE = "KNOWN_PARAM_CALL_STATE"
}

export enum HttpMethod {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE",
}


