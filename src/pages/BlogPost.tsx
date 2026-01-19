import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, Calendar, Clock, ArrowRight } from 'lucide-react'
import { getBlogPostBySlug, blogPosts } from '@/content/blogPosts'
import { useEffect } from 'react'
import Seo from '@/seo/Seo'
import { SITE } from '@/seo/site'

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const post = slug ? getBlogPostBySlug(slug) : undefined

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  // Redirect to 404 if post not found
  useEffect(() => {
    if (slug && !post) {
      navigate('/404', { replace: true })
    }
  }, [slug, post, navigate])

  if (!post) {
    return null
  }

  const path = `/nieuws/${post.slug}`

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.url,
    },
    datePublished: post.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE.url}${path}`,
    },
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('nl-NL', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.slug !== post.slug)
    .slice(0, 2)

  // Get next/previous posts
  const currentIndex = blogPosts.findIndex(p => p.slug === post.slug)
  const previousPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null
  const nextPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null

  return (
    <>
      <Seo
        path={path}
        title={post.title}
        description={post.excerpt}
        type="article"
        image={post.image}
        publishedTime={post.date}
        jsonLd={articleJsonLd}
      />
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden bg-white">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-komma-fuchsia/5 transform skew-x-12 translate-x-20" />
          <div className="absolute top-20 right-20 text-[15rem] font-display font-black text-komma-navy/[0.03] leading-none select-none hidden xl:block">
            ,
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <Link 
            to="/nieuws"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-komma-fuchsia transition-colors mb-8 group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Terug naar overzicht
          </Link>

          {/* Category & Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="px-4 py-1.5 bg-komma-fuchsia/10 text-komma-fuchsia text-sm font-semibold rounded-full">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-komma-navy tracking-tight leading-tight">
            {post.title}
          </h1>

          {/* Meta info */}
          <div className="flex flex-wrap items-center gap-6 mt-8 text-gray-500">
            <div className="flex items-center gap-3">
              <img 
                src="/mathijs-duisdecker.jpg" 
                alt={post.author}
                className="w-12 h-12 rounded-full object-cover border-2 border-white shadow"
              />
              <div>
                <p className="font-semibold text-komma-navy">{post.author}</p>
                <p className="text-sm">Oprichter Komma Consult</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {formatDate(post.date)}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {post.readTime} leestijd
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <article 
            className="prose prose-lg prose-komma max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>

      {/* Author Box */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 border border-gray-100">
            <div className="flex flex-col sm:flex-row gap-6">
              <img 
                src="/mathijs-duisdecker.jpg" 
                alt={post.author}
                className="w-20 h-20 rounded-2xl object-cover"
              />
              <div>
                <h3 className="font-display text-xl font-bold text-komma-navy mb-2">
                  Over de auteur
                </h3>
                <p className="text-gray-600 mb-4">
                  Mathijs Duisdecker is oprichter van Komma Consult en expert op het gebied 
                  van externe inhuur, compliance en strategisch HR-beleid. Met jarenlange 
                  ervaring helpt hij organisaties hun inhuurprocessen te optimaliseren.
                </p>
                <Link 
                  to="/over"
                  className="text-komma-fuchsia font-semibold hover:text-komma-fuchsia-dark transition-colors"
                >
                  Meer over Mathijs →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Post Navigation */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-6">
            {previousPost ? (
              <Link 
                to={`/nieuws/${previousPost.slug}`}
                className="group p-6 rounded-xl border border-gray-100 hover:border-komma-fuchsia/30 hover:shadow-lg transition-all"
              >
                <span className="text-sm text-gray-500 flex items-center gap-2 mb-2">
                  <ArrowLeft className="h-4 w-4" />
                  Vorig artikel
                </span>
                <h4 className="font-display font-bold text-komma-navy group-hover:text-komma-fuchsia transition-colors line-clamp-2">
                  {previousPost.title}
                </h4>
              </Link>
            ) : (
              <div />
            )}
            
            {nextPost && (
              <Link 
                to={`/nieuws/${nextPost.slug}`}
                className="group p-6 rounded-xl border border-gray-100 hover:border-komma-fuchsia/30 hover:shadow-lg transition-all text-right"
              >
                <span className="text-sm text-gray-500 flex items-center justify-end gap-2 mb-2">
                  Volgend artikel
                  <ArrowRight className="h-4 w-4" />
                </span>
                <h4 className="font-display font-bold text-komma-navy group-hover:text-komma-fuchsia transition-colors line-clamp-2">
                  {nextPost.title}
                </h4>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-bold text-komma-navy mb-8">
              Gerelateerde artikelen
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {relatedPosts.map(relatedPost => (
                <Link
                  key={relatedPost.slug}
                  to={`/nieuws/${relatedPost.slug}`}
                  className="group"
                >
                  <article className="h-full bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-komma-fuchsia/30 hover:shadow-xl transition-all duration-300">
                    <div className="h-2 bg-komma-navy group-hover:bg-komma-fuchsia transition-colors" />
                    <div className="p-6 lg:p-8">
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                        {relatedPost.category}
                      </span>
                      <h3 className="font-display text-xl font-bold text-komma-navy mt-4 mb-3 group-hover:text-komma-fuchsia transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-600 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-komma-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-komma-fuchsia/10 transform skew-x-12 translate-x-1/4" />
        <div className="absolute bottom-10 right-10 text-[10rem] font-display font-black text-white/5 leading-none select-none hidden lg:block">
          ,
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Vragen over dit onderwerp?
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Plan een vrijblijvend gesprek en ontdek hoe Komma Consult 
            jouw organisatie kan helpen.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-komma-fuchsia text-white font-semibold rounded-xl hover:bg-komma-fuchsia-dark transition-colors"
          >
            Plan een gesprek
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
