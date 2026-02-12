import type { Message, StreamEvent } from "./types";

/**
 * Stuurt een chatbericht naar de Supabase Edge Function
 * en streamt het antwoord terug via Server-Sent Events.
 */
export async function sendChatMessage(
  functionsUrl: string,
  message: string,
  history: Message[],
  conversationId: string | null,
  sessionId: string,
  onEvent: (event: StreamEvent) => void
): Promise<void> {
  const response = await fetch(`${functionsUrl}/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message,
      conversation_id: conversationId,
      session_id: sessionId,
      history: history.map((m) => ({
        role: m.role,
        content: m.content,
      })),
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      errorData.error || `HTTP ${response.status}: Er ging iets mis`
    );
  }

  const reader = response.body?.getReader();
  if (!reader) throw new Error("Geen response stream beschikbaar");

  const decoder = new TextDecoder();
  let buffer = "";

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    buffer += decoder.decode(value, { stream: true });
    const lines = buffer.split("\n");
    buffer = lines.pop() || "";

    for (const line of lines) {
      if (line.startsWith("data: ")) {
        try {
          const event: StreamEvent = JSON.parse(line.slice(6));
          onEvent(event);
        } catch {
          // Skip ongeldige JSON
        }
      }
    }
  }
}

/**
 * Stuurt een e-mailadres voor lead capture
 */
export async function captureLeadEmail(
  functionsUrl: string,
  conversationId: string,
  email: string
): Promise<boolean> {
  try {
    const response = await fetch(`${functionsUrl}/lead-capture`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        conversation_id: conversationId,
        email,
      }),
    });

    return response.ok;
  } catch {
    return false;
  }
}
