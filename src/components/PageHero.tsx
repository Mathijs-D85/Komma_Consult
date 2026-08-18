import { ReactNode } from 'react'

type PageHeroProps = {
  eyebrow: string
  title: ReactNode
  children?: ReactNode
}

export default function PageHero({ eyebrow, title, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden py-16 lg:py-20 bg-[#fdf2f8]">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-komma-fuchsia/10 transform skew-x-12 translate-x-16 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-komma-fuchsia font-semibold text-sm tracking-wide uppercase">
            {eyebrow}
          </p>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-komma-navy tracking-tight">
            {title}
          </h1>
          {children ? (
            <div className="mt-6 text-lg text-gray-600 leading-relaxed">
              {children}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}
