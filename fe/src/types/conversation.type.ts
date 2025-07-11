export const MessageEnum = {
  TRANSCRIPT: "transcript",
  FUNCTION_CALL: "function-call",
  FUNCTION_CALL_RESULT: "function-call-result",
  ADD_MESSAGE: "add-message",
} as const;

export type MessageEnumType = typeof MessageEnum[keyof typeof MessageEnum];

export const MessageRoleEnum = {
  USER: "user",
  SYSTEM: "system",
  ASSISTANT: "bot",
} as const;

export type MessageRoleEnumType = typeof MessageRoleEnum[keyof typeof MessageRoleEnum];

export const TranscriptMessageEnum = {
  PARTIAL: "partial",
  FINAL: "final",
} as const;

export type TranscriptMessageEnumType = typeof TranscriptMessageEnum[keyof typeof TranscriptMessageEnum];

export interface TranscriptMessage  {
  role: MessageRoleEnumType;
  message: string;
}


export interface CallRecord {
  id: string;
  createdDate: string;
  duration: string;
  callId: string;
  details : {
    structuredData: {
      urgentStatus: boolean;
      transferTo: string;
      transferred: boolean;
      abuseType: string;
      callerName: string;
      callerLocation: string;
      latestIncident: string;
      follow_up: string;
    };
    summaryTitle: string;
    summary: string;
    messages: TranscriptMessage[];
  }
}