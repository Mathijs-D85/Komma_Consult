import { chatSuggestions } from '@/content/faqs'

interface SuggestionChipsProps {
  onSelect: (message: string) => void
}

export function SuggestionChips({ onSelect }: SuggestionChipsProps) {
  return (
    <div className="suggestion-chips">
      {chatSuggestions.map((suggestion) => (
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
  )
}
