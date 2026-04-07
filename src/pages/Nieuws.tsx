import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Clock, User } from 'lucide-react'
import {
  getBlogPostUrl,
  getFeaturedPostByKind,
  getKindLabel,
  getPostsByKind,
} from '@/content/blogPosts'
import Seo from '@/seo/Seo'

export default function Kennis() {
  const knowledgePosts = getPostsByKind('kennis')
  const actueelPosts = getPostsByKind('actueel')
  const featuredKnowledgePost = getFeaturedPostByKind('kennis')
  const featuredActueelPost = getFeaturedPostByKind('actueel')

  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString('nl-NL', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })

  return (
    <>
      <Seo
        path="/kennis"
        title="Kennis"
        description="Kennisartikelen en actuele inzichten over externe inhuur, compliant inhuren, leveranciersmanagement en regie op inhuur."
      />

      <section className="relative pt-32 pb-20 overflow-hidden bg-white">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-komma-fuchsia/5 transform skew-x-12 translate-x-20" />
          <div className="absolute top-20 right-20 text-[15rem] font-display font-black text-komma-navy/[0.03] leading-none select-none hidden xl:block">
            ,
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-komma-fuchsia font-semibold text-sm tracking-wide uppercase">
              Kennis
            </span>
            <h1 className="mt-4 font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold text-komma-navy tracking-tight">
              Snel naar het
              <br />
              <span className="text-komma-fuchsia">juiste antwoord</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              Vind hier verdiepende kennisartikelen en actuele inzichten over externe
              inhuur, compliance, leveranciersmanagement en bestuurbaarheid.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#kennisartikelen"
                className="inline-flex items-center gap-2 px-6 py-3 bg-komma-navy text-white font-semibold rounded-xl hover:bg-komma-navy/90 transition-colors"
              >
                Bekijk kennisartikelen
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#actueel"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-komma-navy font-semibold rounded-xl hover:bg-gray-200 transition-colors"
              >
                Bekijk actueel
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="kennisartikelen" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-komma-fuchsia font-semibold text-sm tracking-wide uppercase">
              Kennisartikelen
            </span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-komma-navy">
              Heldere uitleg bij de belangrijkste vragen over externe inhuur
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Deze artikelen geven je snel scherpte op de belangrijkste keuzes,
              risico&apos;s en afwegingen rond externe inhuur.
            </p>
          </div>

          {featuredKnowledgePost ? (
            <Link to={getBlogPostUrl(featuredKnowledgePost)} className="group block mb-10">
              <div className="relative bg-komma-navy rounded-3xl overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-komma-fuchsia/10 transform skew-x-12 translate-x-1/4" />
                <div className="absolute bottom-10 right-10 text-[12rem] font-display font-black text-white/5 leading-none select-none hidden lg:block">
                  ,
                </div>

                <div className="relative p-8 lg:p-12 lg:pr-1/3">
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <span className="px-4 py-1.5 bg-komma-fuchsia text-white text-sm font-semibold rounded-full">
                      Uitgelicht
                    </span>
                    <span className="px-4 py-1.5 bg-white/10 text-white/80 text-sm font-medium rounded-full">
                      {featuredKnowledgePost.category}
                    </span>
                    <span className="px-4 py-1.5 bg-white/10 text-white/80 text-sm font-medium rounded-full">
                      {getKindLabel(featuredKnowledgePost.kind)}
                    </span>
                  </div>

                  <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 group-hover:text-komma-fuchsia transition-colors">
                    {featuredKnowledgePost.title}
                  </h3>

                  <p className="text-white/70 text-lg lg:text-xl max-w-2xl mb-8">
                    {featuredKnowledgePost.excerpt}
                  </p>

                  <div className="flex flex-wrap items-center gap-6 text-white/60 text-sm mb-8">
                    <span className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      {featuredKnowledgePost.author}
                    </span>
                    <span className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {formatDate(featuredKnowledgePost.date)}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {featuredKnowledgePost.readTime} leestijd
                    </span>
                  </div>

                  <span className="inline-flex items-center text-white font-semibold group-hover:text-komma-fuchsia transition-colors">
                    Lees kennisartikel
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
                  </span>
                </div>
              </div>
            </Link>
          ) : null}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {knowledgePosts.map((post) => (
              <Link key={post.slug} to={getBlogPostUrl(post)} className="group">
                <article className="h-full bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-komma-fuchsia/30 hover:shadow-xl hover:shadow-komma-fuchsia/5 transition-all duration-300">
                  <div className="h-2 bg-komma-navy group-hover:bg-komma-fuchsia transition-colors" />

                  <div className="p-6 lg:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full group-hover:bg-komma-fuchsia/10 group-hover:text-komma-fuchsia transition-colors">
                        {post.category}
                      </span>
                      <span className="text-gray-400 text-sm">{post.readTime}</span>
                    </div>

                    <h3 className="font-display text-xl lg:text-2xl font-bold text-komma-navy mb-3 group-hover:text-komma-fuchsia transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 mb-6 line-clamp-4">{post.excerpt}</p>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <Calendar className="h-4 w-4" />
                        {formatDate(post.date)}
                      </div>

                      <span className="flex items-center text-komma-navy font-medium text-sm group-hover:text-komma-fuchsia transition-colors">
                        Lees meer
                        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="actueel" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-komma-fuchsia font-semibold text-sm tracking-wide uppercase">
              Actueel
            </span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-komma-navy">
              Recente observaties, ontwikkelingen en marktupdates
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Hier vind je tijdgebonden artikelen over ontwikkelingen in de markt,
              events en actuele bewegingen rondom externe inhuur.
            </p>
          </div>

          {featuredActueelPost ? (
            <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8 items-start">
              <Link to={getBlogPostUrl(featuredActueelPost)} className="group block">
                <article className="h-full bg-gray-50 rounded-3xl border border-gray-100 p-8 lg:p-10 hover:border-komma-fuchsia/30 hover:shadow-xl transition-all">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="px-4 py-1.5 bg-komma-fuchsia/10 text-komma-fuchsia text-sm font-semibold rounded-full">
                      Uitgelicht
                    </span>
                    <span className="px-4 py-1.5 bg-white text-gray-600 text-sm font-medium rounded-full border border-gray-100">
                      {featuredActueelPost.category}
                    </span>
                  </div>

                  <h3 className="font-display text-3xl font-bold text-komma-navy mb-4 group-hover:text-komma-fuchsia transition-colors">
                    {featuredActueelPost.title}
                  </h3>

                  <p className="text-gray-600 text-lg mb-6">{featuredActueelPost.excerpt}</p>

                  <div className="flex flex-wrap items-center gap-6 text-gray-500 text-sm mb-6">
                    <span className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      {featuredActueelPost.author}
                    </span>
                    <span className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {formatDate(featuredActueelPost.date)}
                    </span>
                  </div>

                  <span className="inline-flex items-center text-komma-navy font-semibold group-hover:text-komma-fuchsia transition-colors">
                    Lees artikel
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
                  </span>
                </article>
              </Link>

              <div className="grid gap-6">
                {actueelPosts
                  .filter((post) => post.slug !== featuredActueelPost.slug)
                  .map((post) => (
                    <Link key={post.slug} to={getBlogPostUrl(post)} className="group">
                      <article className="bg-white rounded-2xl border border-gray-100 p-6 hover:border-komma-fuchsia/30 hover:shadow-lg transition-all">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full group-hover:bg-komma-fuchsia/10 group-hover:text-komma-fuchsia transition-colors">
                            {post.category}
                          </span>
                          <span className="text-gray-400 text-sm">{post.readTime}</span>
                        </div>
                        <h3 className="font-display text-xl font-bold text-komma-navy mb-3 group-hover:text-komma-fuchsia transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 line-clamp-3 mb-4">{post.excerpt}</p>
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                          <Calendar className="h-4 w-4" />
                          {formatDate(post.date)}
                        </div>
                      </article>
                    </Link>
                  ))}
              </div>
            </div>
          ) : null}
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-komma-fuchsia font-semibold text-sm tracking-wide uppercase">
            Samen verkennen
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-komma-navy">
            Heb je een vraagstuk dat je verder wilt aanscherpen?
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Als je wilt toetsen wat dit in jouw situatie betekent, denken we graag met je mee
            in een vrijblijvend gesprek.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-komma-fuchsia text-white font-semibold rounded-xl hover:bg-komma-fuchsia-dark transition-colors shadow-lg shadow-komma-fuchsia/25"
          >
            Bespreek jouw vraagstuk
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
