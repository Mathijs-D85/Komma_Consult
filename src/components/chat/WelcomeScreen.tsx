import { SuggestionChips } from "./SuggestionChips";
import { ChatInput } from "./ChatInput";

interface WelcomeScreenProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
}

export function WelcomeScreen({ onSendMessage, isLoading }: WelcomeScreenProps) {
  return (
    <div className="welcome-screen">
      <div className="welcome-content">
        {/* Welkomsttekst */}
        <h1 className="welcome-title">
          Ontdek wat er<br />
          schuilt achter<br />
          <span className="welcome-title-accent">de komma</span>
        </h1>
        <p className="welcome-subtitle">
          Wil je weten hoe wij je kunnen helpen op het gebied van inhuuradvies?
          <br />
          <span className="welcome-highlight">Stel hier direct je vraag.</span>
        </p>

        {/* Invoerveld */}
        <div className="welcome-input-wrapper">
          <ChatInput
            onSend={onSendMessage}
            isLoading={isLoading}
            placeholder="Stel je vraag over externe inhuur..."
            autoFocus={true}
            large={true}
          />
        </div>

        {/* Suggestie chips */}
        <SuggestionChips onSelect={onSendMessage} />
      </div>
    </div>
  );
}
