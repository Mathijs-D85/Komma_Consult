export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  sources?: string[];
  isStreaming?: boolean;
}

export interface ConversationMeta {
  conversation_id: string | null;
  sources: string[];
}

export interface StreamEvent {
  type: "meta" | "text" | "done" | "error";
  content?: string;
  conversation_id?: string;
  sources?: string[];
  message?: string;
}

export interface ChatConfig {
  supabaseUrl: string;
  supabaseFunctionsUrl?: string;
  theme?: "dark" | "light";
  contactUrl?: string;
  /** Voorgestelde vragen op het startscherm; standaard de homepage-suggesties. */
  suggestions?: string[];
  /** Placeholder van het invoerveld op het startscherm. */
  placeholder?: string;
}
