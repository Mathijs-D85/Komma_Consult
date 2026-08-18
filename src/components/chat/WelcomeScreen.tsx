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
        <p className="welcome-subtitle">
          Heb je een vraag over grip, regie of keuzes binnen externe inhuur?
          <br />
          <span className="welcome-highlight">Stel hem hier direct.</span>
        </p>

        <div className="welcome-input-wrapper">
          <ChatInput
            onSend={onSendMessage}
            isLoading={isLoading}
            placeholder="Stel je vraag over externe inhuur, compliance of MSP/VMS..."
            large={true}
          />
        </div>

        <SuggestionChips onSelect={onSendMessage} />
      </div>
    </div>
  );
}
