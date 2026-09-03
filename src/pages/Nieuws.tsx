import { Link } from 'react-router-dom'
import { ArrowRight, Clock } from 'lucide-react'
import {
  getBlogPostUrl,
  getFeaturedPostByKind,
  getPostsByKind,
  type BlogPost,
} from '@/content/blogPosts'
import Seo from '@/seo/Seo'
import PageHero from '@/components/PageHero'
import { buttonVariants } from '@/components/ui/button-variants'

const formatDate = (dateString: string) =>
  new Date(dateString).toLocaleDateString('nl-NL', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })

function ArticleCard({ post }: { post: BlogPost }) {
  return (
    <Link
      to={getBlogPostUrl(post)}
      className="group flex flex-col rounded-2xl bg-white border border-gray-100 p-7 hover:border-komma-fuchsia/40 hover:shadow-sm transition-all"
    >
      <div className="flex items-center justify-between gap-3 text-xs">
        <span className="font-semibold tracking-wide uppercase text-komma-fuchsia">
          {post.category}
        </span>
        <span className="text-gray-400">{formatDate(post.updated ?? post.date)}</span>
      </div>
      <h3 className="mt-3 font-display text-xl font-bold text-komma-navy leading-snug group-hover:text-komma-fuchsia transition-colors">
        {post.title}
      </h3>
      <p className="mt-3 text-gray-600 text-sm leading-relaxed line-clamp-3 flex-1">
        {post.excerpt}
      </p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm text-gray-400">
        <Clock className="h-3.5 w-3.5" aria-hidden="true" />
        {post.readTime} leestijd
      </span>
    </Link>
  )
}

export default function Kennis() {
  const featured = getFeaturedPostByKind('kennis')
  const knowledgePosts = getPostsByKind('kennis').filter((post) => post.slug !== featured?.slug)
  const actueelPosts = getPostsByKind('actueel')

  return (
    <>
      <Seo
        path="/kennis"
        title="Kennis"
        description="Kennisartikelen en actuele inzichten over externe inhuur, compliant inhuren, leveranciersmanagement en regie op inhuur."
      />

      <PageHero
        eyebrow="Kennis"
        title={
          <>
            Lezen wat er speelt
            <br />
            <span className="text-komma-fuchsia">in externe inhuur</span>
          </>
        }
      >
        <p>
          Verdiepende artikelen over grip, compliance, MSP, broker en VMS, geschreven
          door Mathijs Duisdecker. Geen samenvattingen van de wet, maar wat het
          betekent voor jouw inhuurpraktijk.
        </p>
      </PageHero>

      <section id="kennisartikelen" className="py-16 lg:py-24 bg-gray-50 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {featured ? (
            <Link to={getBlogPostUrl(featured)} className="group block mb-8">
              <article className="relative overflow-hidden rounded-2xl bg-komma-navy p-8 lg:p-12 text-white">
                <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-komma-fuchsia/30 blur-3xl pointer-events-none" aria-hidden="true" />
                <div className="relative max-w-3xl">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-semibold tracking-wide uppercase">
                    <span className="rounded-full bg-komma-fuchsia px-3 py-1">Uitgelicht</span>
                    <span className="text-white/70">{featured.category}</span>
                    <span className="text-white/50">{featured.readTime} leestijd</span>
                  </div>
                  <h2 className="mt-5 font-display text-3xl sm:text-4xl font-bold leading-tight">
                    {featured.title}
                  </h2>
                  <p className="mt-4 text-lg text-white/75 leading-relaxed">{featured.excerpt}</p>
                  <span className="mt-8 inline-flex items-center font-semibold group-hover:text-komma-fuchsia-light transition-colors">
                    Lees het artikel
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </div>
              </article>
            </Link>
          ) : null}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {knowledgePosts.map((post) => (
              <ArticleCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {actueelPosts.length > 0 ? (
        <section id="actueel" className="py-16 lg:py-24 bg-white scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-10">
              <p className="text-komma-fuchsia font-semibold text-sm tracking-wide uppercase">
                Actueel
              </p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-komma-navy tracking-tight">
                Ontwikkelingen, events en observaties
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {actueelPosts.map((post) => (
                <ArticleCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="py-16 lg:py-24 bg-[#fdf2f8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-komma-fuchsia font-semibold text-sm tracking-wide uppercase">
            Samen verkennen
          </p>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-komma-navy tracking-tight">
            Wat betekent dit voor jouw organisatie?
          </h2>
          <p className="mt-5 text-lg text-gray-600">
            Wil je toetsen wat deze inzichten in jouw situatie betekenen? Dan denken we
            graag mee in een vrijblijvend gesprek.
          </p>
          <div className="mt-8">
            <Link to="/contact" className={buttonVariants({ size: 'lg' })}>
              Bespreek jouw vraagstuk
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
