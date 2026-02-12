import { useState } from "react";
import type { ChatConfig } from "./types";
import { captureLeadEmail } from "./api";

interface LeadCaptureProps {
  conversationId: string;
  config: ChatConfig;
  onCaptured: () => void;
  onDismiss: () => void;
}

export function LeadCapture({
  conversationId,
  config,
  onCaptured,
  onDismiss,
}: LeadCaptureProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim() || isSubmitting) return;

    setIsSubmitting(true);
    setError(null);

    const functionsUrl =
      config.supabaseFunctionsUrl ||
      `${config.supabaseUrl}/functions/v1`;

    const success = await captureLeadEmail(
      functionsUrl,
      conversationId,
      email.trim()
    );

    if (success) {
      setSubmitted(true);
      setTimeout(() => {
        onCaptured();
      }, 2000);
    } else {
      setError("Er ging iets mis. Probeer het opnieuw.");
    }

    setIsSubmitting(false);
  };

  if (submitted) {
    return (
      <div className="lead-capture lead-capture--success">
        <div className="lead-capture__icon">✓</div>
        <p>Bedankt! We nemen contact met je op.</p>
      </div>
    );
  }

  return (
    <div className="lead-capture">
      <button
        className="lead-capture__dismiss"
        onClick={onDismiss}
        type="button"
        aria-label="Sluiten"
      >
        ×
      </button>

      <div className="lead-capture__content">
        <p className="lead-capture__text">
          Wil je dit advies als samenvatting per e-mail ontvangen?
        </p>

        <form className="lead-capture__form" onSubmit={handleSubmit}>
          <input
            type="email"
            className="lead-capture__input"
            placeholder="je@email.nl"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="lead-capture__submit"
            disabled={!email.trim() || isSubmitting}
          >
            {isSubmitting ? "Verzenden..." : "Verstuur"}
          </button>
        </form>

        {error && <p className="lead-capture__error">{error}</p>}
      </div>
    </div>
  );
}
