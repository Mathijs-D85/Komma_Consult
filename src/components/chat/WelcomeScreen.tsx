import { SuggestionChips } from "./SuggestionChips";
import { ChatInput } from "./ChatInput";

interface WelcomeScreenProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
  suggestions?: string[];
  placeholder?: string;
}

export function WelcomeScreen({
  onSendMessage,
  isLoading,
  suggestions,
  placeholder = "Stel je vraag over externe inhuur, compliance of MSP/VMS...",
}: WelcomeScreenProps) {
  return (
    <div className="welcome-screen">
      <div className="welcome-content">
        <div className="welcome-input-wrapper">
          <ChatInput
            onSend={onSendMessage}
            isLoading={isLoading}
            placeholder={placeholder}
            large={true}
          />
        </div>

        <SuggestionChips onSelect={onSendMessage} suggestions={suggestions} />
      </div>
    </div>
  );
}
