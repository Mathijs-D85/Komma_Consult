import { Link } from 'react-router-dom'
import type { FaqItem } from '@/content/faqs'

type FaqSectionProps = {
  items: FaqItem[]
  heading?: string
}

export default function FaqSection({
  items,
  heading = 'Veelgestelde vragen',
}: FaqSectionProps) {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-komma-fuchsia font-semibold text-sm tracking-wide uppercase">
          Vragen
        </p>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-komma-navy tracking-tight">
          {heading}
        </h2>
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
      </div>
    </section>
  )
}
