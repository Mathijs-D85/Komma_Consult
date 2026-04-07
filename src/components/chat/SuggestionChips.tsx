interface SuggestionChipsProps {
  onSelect: (message: string) => void;
}

const SUGGESTIONS = [
  "Hoe krijg ik meer grip op externe inhuur?",
  "Wanneer past een MSP, broker of VMS?",
  "Hoe zorg ik dat compliant inhuren werkbaar blijft in de praktijk?",
  "Hoe helpt duidelijk eigenaarschap bij beter beheer van inhuur?",
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
