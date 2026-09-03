import { useMemo } from "react";
import { marked } from "marked";
import { Link } from "react-router-dom";
import type { Message } from "./types";
import avatarLogo from "./Logo Komma Consult - 5.png";

// Configureer marked voor veilige rendering
marked.setOptions({
  breaks: true,
  gfm: true,
});

interface MessageBubbleProps {
  message: Message;
  contactUrl: string;
  /** Toon de uitnodiging voor een gesprek onder dit antwoord. */
  showCta?: boolean;
}

/** Maak een bronverwijzing leesbaar: pad en extensie weg, streepjes naar spaties. */
function formatSource(source: string) {
  const name = source.split(/[\\/]/).pop() ?? source;
  return name.replace(/\.md$/i, "").replace(/[-_]+/g, " ").trim();
}

export function MessageBubble({ message, contactUrl, showCta = false }: MessageBubbleProps) {
  const isUser = message.role === "user";

  // Render markdown naar HTML voor assistant berichten
  const renderedContent = useMemo(() => {
    if (isUser) return null;
    return marked.parse(message.content) as string;
  }, [message.content, isUser]);

  const sources = useMemo(() => {
    if (isUser || !message.sources?.length) return [];
    return [...new Set(message.sources.map(formatSource).filter(Boolean))].slice(0, 4);
  }, [isUser, message.sources]);

  const isFinished = !isUser && !message.isStreaming && message.content.length > 0;

  return (
    <div className={`message ${isUser ? "message--user" : "message--assistant"}`}>
      {/* Avatar */}
      {!isUser && (
        <div className="message__avatar">
          <img
            src={avatarLogo}
            alt=""
            className="message__avatar-logo"
          />
        </div>
      )}

      <div className="message__body">
        {/* Label */}
        <div className="message__label">
          {isUser ? "Jij" : "Kennisbank Komma Consult"}
        </div>

        {/* Content */}
        <div className="message__content">
          {isUser ? (
            <p>{message.content}</p>
          ) : message.content ? (
            <div
              className="message__markdown"
              dangerouslySetInnerHTML={{ __html: renderedContent || "" }}
            />
          ) : message.isStreaming ? (
            <div className="message__typing">
              <span />
              <span />
              <span />
            </div>
          ) : null}

          {/* Streaming indicator */}
          {message.isStreaming && message.content && (
            <span className="message__cursor">▊</span>
          )}
        </div>

        {/* Bronnen uit de kennisbank */}
        {isFinished && sources.length > 0 && (
          <p className="message__sources">
            <span className="message__sources-label">Uit de kennisbank:</span>{" "}
            {sources.join(" · ")}
          </p>
        )}

        {/* Uitnodiging, alleen als het antwoord erom vraagt */}
        {isFinished && showCta && (
          <Link
            to={contactUrl}
            className="message__cta"
          >
            Bespreek dit voor jouw organisatie
          </Link>
        )}
      </div>
    </div>
  );
}
