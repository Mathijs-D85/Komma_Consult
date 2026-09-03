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
