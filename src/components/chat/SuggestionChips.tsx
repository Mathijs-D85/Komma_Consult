import { chatSuggestions } from '@/content/faqs'

interface SuggestionChipsProps {
  onSelect: (message: string) => void
  suggestions?: string[]
}

export function SuggestionChips({ onSelect, suggestions = chatSuggestions }: SuggestionChipsProps) {
  return (
    <div className="suggestion-chips">
      {suggestions.map((suggestion) => (
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
