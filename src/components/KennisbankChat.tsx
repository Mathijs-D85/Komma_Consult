import { ClientOnly } from 'vite-react-ssg'
import ChatApp from '@/components/chat/ChatApp'
import { cn } from '@/lib/utils'

type KennisbankChatProps = {
  suggestions?: string[]
  placeholder?: string
  className?: string
}

function ChatFallback() {
  return (
    <div className="px-2 py-10 text-center">
      <p className="text-lg text-gray-600">
        Stel een vraag over grip, compliance of keuzes in externe inhuur.
      </p>
    </div>
  )
}

/** De kennischat van Komma Consult, met optioneel eigen suggesties (bijv. per artikel). */
export function KennisbankChat({ suggestions, placeholder, className }: KennisbankChatProps) {
  return (
    <div className={className}>
      <ClientOnly fallback={<ChatFallback />}>
        {() => (
          <ChatApp
            config={{
              supabaseUrl:
                import.meta.env.VITE_SUPABASE_URL || 'https://dhuppyaqprsjaquomqtp.supabase.co',
              supabaseFunctionsUrl:
                import.meta.env.VITE_SUPABASE_FUNCTIONS_URL ||
                'https://dhuppyaqprsjaquomqtp.supabase.co/functions/v1',
              contactUrl: '/contact',
              suggestions,
              placeholder,
            }}
          />
        )}
      </ClientOnly>
    </div>
  )
}

/**
 * Eén echt voorbeeld uit de kennisbank, statisch en dus ook zichtbaar voor
 * zoekmachines en AI-crawlers. Laat zien wat een bezoeker van de chat mag verwachten.
 */
export function KennisbankExample({ className }: { className?: string }) {
  return (
    <figure
      className={cn(
        'rounded-2xl border border-komma-navy/10 bg-white/70 backdrop-blur-sm p-5 sm:p-6 text-left',
        className
      )}
    >
      <figcaption className="text-xs font-semibold uppercase tracking-wide text-gray-500">
        Voorbeeld uit de kennisbank
      </figcaption>

      <div className="mt-4 flex justify-end">
        <p className="max-w-[85%] rounded-2xl rounded-br-sm bg-komma-navy px-4 py-2.5 text-sm text-white">
          Wie betaalt eigenlijk de MSP: de leverancier of wij als opdrachtgever?
        </p>
      </div>

      <div className="mt-3 flex gap-3">
        <div className="mt-1 h-7 w-7 shrink-0 rounded-full bg-komma-fuchsia/15 flex items-center justify-center">
          <span className="block h-2 w-2 rounded-full bg-komma-fuchsia" />
        </div>
        <div className="min-w-0">
          <p className="text-xs font-semibold text-komma-navy">Kennisbank Komma Consult</p>
          <div className="mt-1 space-y-2 text-sm leading-relaxed text-gray-700">
            <p>
              Beide komen voor. Bij <strong>supplier funded</strong> betaalt de leverancier een
              fee aan de MSP, meestal een percentage van het uurtarief. Voor jou lijkt de dienst
              gratis, maar de fee zit in de tarieven en de MSP verdient meer naarmate je méér
              inhuurt.
            </p>
            <p>
              Bij <strong>client funded</strong> betaal jij een fee bovenop de inhuurkosten. Dat
              kost zichtbaar geld, maar de MSP heeft dan geen belang bij hogere tarieven of meer
              volume. Wil je sturen op kwaliteit en minder inhuur, dan is dit het zuiverste model.
            </p>
          </div>
          <p className="mt-2 text-xs text-gray-500">
            <span className="font-semibold text-komma-navy">Uit de kennisbank:</span> MSP
            dienstverlening · Financieringsmodellen
          </p>
        </div>
      </div>
    </figure>
  )
}
