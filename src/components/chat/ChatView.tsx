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
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const [showLeadCapture, setShowLeadCapture] = useState(false);
  const [leadCaptured, setLeadCaptured] = useState(false);

  // Auto-scroll naar beneden bij nieuwe berichten (binnen de container, niet de pagina)
  useEffect(() => {
    const container = messagesContainerRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
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

  // De uitnodiging voor een gesprek verschijnt pas als het antwoord erom vraagt:
  // vanaf het tweede antwoord, of als het antwoord zelf naar de eigen situatie verwijst.
  const situationHint = /hangt\b[^.]{0,20}\baf van|afhankelijk van|jouw (situatie|organisatie)|per organisatie|maatwerk/i;
  let assistantCount = 0;
  const ctaFor = new Set<string>();
  for (const m of messages) {
    if (m.role !== "assistant" || m.isStreaming || !m.content) continue;
    assistantCount += 1;
    if (assistantCount >= 2 || situationHint.test(m.content)) ctaFor.add(m.id);
  }

  return (
    <div className="chat-view">
      {/* Berichten */}
      <div className="chat-view__messages" ref={messagesContainerRef}>
        <div className="chat-view__messages-inner">
          {messages.map((message) => (
            <MessageBubble
              key={message.id}
              message={message}
              contactUrl={contactUrl}
              showCta={ctaFor.has(message.id)}
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
        </div>
      </div>

      {/* Invoerveld (onderaan) */}
      <div className="chat-view__input-area">
        <div className="chat-view__input-inner">
          <ChatInput
            onSend={onSendMessage}
            isLoading={isLoading}
            placeholder="Stel een vervolgvraag..."
          />
        </div>
      </div>
    </div>
  );
}
