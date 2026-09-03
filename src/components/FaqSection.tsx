import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import type { FaqItem } from '@/content/faqs'
import { cn } from '@/lib/utils'

type FaqSectionProps = {
  items: FaqItem[]
  heading?: string
  intro?: string
  /** 'open' toont alle antwoorden; 'accordion' klapt ze in. */
  variant?: 'open' | 'accordion'
  className?: string
}

export default function FaqSection({
  items,
  heading = 'Veelgestelde vragen',
  intro,
  variant = 'open',
  className,
}: FaqSectionProps) {
  const isAccordion = variant === 'accordion'

  return (
    <section className={cn('py-16 lg:py-24 bg-white', className)}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-komma-fuchsia font-semibold text-sm tracking-wide uppercase">
          Vragen
        </p>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-komma-navy tracking-tight">
          {heading}
        </h2>
        {intro ? <p className="mt-4 text-lg text-gray-600">{intro}</p> : null}

        {isAccordion ? (
          <div className="mt-10 divide-y divide-gray-200 border-y border-gray-200">
            {items.map((item) => (
              <details key={item.question} className="group py-2">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-left font-display text-lg font-bold text-komma-navy [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <ChevronDown
                    className="h-5 w-5 shrink-0 text-komma-fuchsia transition-transform group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <div className="pb-5 text-gray-600 leading-relaxed">
                  <p>{item.answer}</p>
                  {item.href ? (
                    <Link
                      to={item.href}
                      className="inline-block mt-3 font-semibold text-komma-fuchsia hover:text-komma-navy transition-colors"
                    >
                      Lees verder
                    </Link>
                  ) : null}
                </div>
              </details>
            ))}
          </div>
        ) : (
          <dl className="mt-10 space-y-8">
            {items.map((item) => (
              <div key={item.question} className="border-t border-gray-100 pt-8">
                <dt>
                  <h3 className="font-display text-xl font-bold text-komma-navy">
                    {item.question}
                  </h3>
                </dt>
                <dd className="mt-3 text-gray-600 leading-relaxed">
                  <p>{item.answer}</p>
                  {item.href ? (
                    <Link
                      to={item.href}
                      className="inline-block mt-3 font-semibold text-komma-fuchsia hover:text-komma-navy transition-colors"
                    >
                      Lees verder
                    </Link>
                  ) : null}
                </dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </section>
  )
}
