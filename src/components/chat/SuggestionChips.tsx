interface SuggestionChipsProps {
  onSelect: (message: string) => void;
}

const SUGGESTIONS = [
  "Moet ik mijn inhuur uitbesteden?",
  "Wat is een MSP en wat levert het op?",
  "Hoe word ik compliant met de Wet DBA?",
  "Hoe kan ik besparen op externe inhuur?",
];

export function SuggestionChips({ onSelect }: SuggestionChipsProps) {
  return (
    <div className="suggestion-chips">
      {SUGGESTIONS.map((suggestion) => (
        <button
          key={suggestion}
          className="suggestion-chip"
          onClick={() => onSelect(suggestion)}
          type="button"
        >
          {suggestion}
        </button>
      ))}
    </div>
  );
}
