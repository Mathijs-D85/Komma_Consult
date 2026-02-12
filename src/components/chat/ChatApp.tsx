import { useState, useCallback, useRef } from "react";
import type { Message, ChatConfig, StreamEvent } from "./types";
import { WelcomeScreen } from "./WelcomeScreen";
import { ChatView } from "./ChatView";
import { sendChatMessage } from "./api";

interface ChatAppProps {
  config: ChatConfig;
}

export default function ChatApp({ config }: ChatAppProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [conversationId, setConversationId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const sessionIdRef = useRef(crypto.randomUUID());

  const isConversationStarted = messages.length > 0;

  const handleSendMessage = useCallback(
    async (text: string) => {
      if (!text.trim() || isLoading) return;

      setError(null);

      // Voeg user message toe
      const userMessage: Message = {
        id: crypto.randomUUID(),
        role: "user",
        content: text.trim(),
      };

      // Voeg placeholder assistant message toe (voor streaming)
      const assistantMessage: Message = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: "",
        isStreaming: true,
      };

      setMessages((prev) => [...prev, userMessage, assistantMessage]);
      setIsLoading(true);

      try {
        const functionsUrl =
          config.supabaseFunctionsUrl ||
          `${config.supabaseUrl}/functions/v1`;

        await sendChatMessage(
          functionsUrl,
          text.trim(),
          messages, // Stuur bestaande history mee
          conversationId,
          sessionIdRef.current,
          (event: StreamEvent) => {
            switch (event.type) {
              case "meta":
                if (event.conversation_id) {
                  setConversationId(event.conversation_id);
                }
                // Update sources op het assistant bericht
                setMessages((prev) =>
                  prev.map((m) =>
                    m.id === assistantMessage.id
                      ? { ...m, sources: event.sources || [] }
                      : m
                  )
                );
                break;

              case "text":
                // Append streaming tekst
                setMessages((prev) =>
                  prev.map((m) =>
                    m.id === assistantMessage.id
                      ? { ...m, content: m.content + (event.content || "") }
                      : m
                  )
                );
                break;

              case "done":
                // Markeer streaming als voltooid
                setMessages((prev) =>
                  prev.map((m) =>
                    m.id === assistantMessage.id
                      ? { ...m, isStreaming: false }
                      : m
                  )
                );
                break;

              case "error":
                setError(
                  event.message || "Er ging iets mis. Probeer het opnieuw."
                );
                // Verwijder de lege assistant message
                setMessages((prev) =>
                  prev.filter((m) => m.id !== assistantMessage.id)
                );
                break;
            }
          }
        );
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Er ging iets mis. Probeer het opnieuw."
        );
        // Verwijder de lege assistant message bij een fout
        setMessages((prev) =>
          prev.filter((m) => m.id !== assistantMessage.id)
        );
      } finally {
        setIsLoading(false);
      }
    },
    [messages, conversationId, isLoading, config]
  );

  return (
    <div className="komma-chat">
      {isConversationStarted ? (
        <ChatView
          messages={messages}
          isLoading={isLoading}
          error={error}
          conversationId={conversationId}
          config={config}
          onSendMessage={handleSendMessage}
          onDismissError={() => setError(null)}
        />
      ) : (
        <WelcomeScreen
          onSendMessage={handleSendMessage}
          isLoading={isLoading}
        />
      )}
    </div>
  );
}
