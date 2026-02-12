import { useEffect, useRef, useState } from "react";
import type { Message, ChatConfig } from "./types";
import { MessageBubble } from "./MessageBubble";
import { ChatInput } from "./ChatInput";
import { LeadCapture } from "./LeadCapture";

interface ChatViewProps {
  messages: Message[];
  isLoading: boolean;
  error: string | null;
  conversationId: string | null;
  config: ChatConfig;
  onSendMessage: (message: string) => void;
  onDismissError: () => void;
}

export function ChatView({
  messages,
  isLoading,
  error,
  conversationId,
  config,
  onSendMessage,
  onDismissError,
}: ChatViewProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [showLeadCapture, setShowLeadCapture] = useState(false);
  const [leadCaptured, setLeadCaptured] = useState(false);

  // Auto-scroll naar beneden bij nieuwe berichten
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Toon lead capture na 2 volledige antwoorden (4 berichten: 2x user + 2x assistant)
  useEffect(() => {
    const completedAssistantMessages = messages.filter(
      (m) => m.role === "assistant" && !m.isStreaming && m.content.length > 0
    );
    if (completedAssistantMessages.length >= 2 && !leadCaptured) {
      setShowLeadCapture(true);
    }
  }, [messages, leadCaptured]);

  const contactUrl = config.contactUrl || "/contact";

  return (
    <div className="chat-view">
      {/* Berichten */}
      <div className="chat-view__messages">
        <div className="chat-view__messages-inner">
          {messages.map((message) => (
            <MessageBubble
              key={message.id}
              message={message}
              contactUrl={contactUrl}
            />
          ))}

          {/* Error melding */}
          {error && (
            <div className="chat-view__error">
              <p>{error}</p>
              <button onClick={onDismissError} type="button">
                Sluiten
              </button>
            </div>
          )}

          {/* Lead capture */}
          {showLeadCapture && !leadCaptured && conversationId && (
            <LeadCapture
              conversationId={conversationId}
              config={config}
              onCaptured={() => {
                setLeadCaptured(true);
                setShowLeadCapture(false);
              }}
              onDismiss={() => setShowLeadCapture(false)}
            />
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Invoerveld (onderaan) */}
      <div className="chat-view__input-area">
        <div className="chat-view__input-inner">
          <ChatInput
            onSend={onSendMessage}
            isLoading={isLoading}
            placeholder="Stel een vervolgvraag..."
            autoFocus={true}
          />
        </div>
      </div>
    </div>
  );
}
