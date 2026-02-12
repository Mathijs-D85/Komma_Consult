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
}

export function MessageBubble({ message, contactUrl }: MessageBubbleProps) {
  const isUser = message.role === "user";

  // Render markdown naar HTML voor assistant berichten
  const renderedContent = useMemo(() => {
    if (isUser) return null;
    return marked.parse(message.content) as string;
  }, [message.content, isUser]);

  // Check of het antwoord een CTA bevat
  const showCTA =
    !isUser && !message.isStreaming && message.content.length > 50;

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
          {isUser ? "Jij" : "Komma Consult"}
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

        {/* CTA knop */}
        {showCTA && (
          <Link
            to={contactUrl}
            className="message__cta"
          >
            Plan een vrijblijvend adviesgesprek
          </Link>
        )}
      </div>
    </div>
  );
}
