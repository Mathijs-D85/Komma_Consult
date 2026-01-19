import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Clock, User } from 'lucide-react'
import { blogPosts, getFeaturedPost, getAllCategories } from '@/content/blogPosts'
import { useState } from 'react'
import Seo from '@/seo/Seo'

export default function Nieuws() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const featuredPost = getFeaturedPost()
  const categories = getAllCategories()
  
  const filteredPosts = activeCategory 
    ? blogPosts.filter(post => post.category === activeCategory)
    : blogPosts

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('nl-NL', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }

  return (
    <>
      <Seo
        path="/nieuws"
        title="Nieuws & Inzichten"
        description="De laatste trends, inzichten en nieuws over externe inhuur, compliance en strategisch HR-beleid."
      />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-white">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-komma-fuchsia/5 transform skew-x-12 translate-x-20" />
          <div className="absolute top-20 right-20 text-[15rem] font-display font-black text-komma-navy/[0.03] leading-none select-none hidden xl:block">
            ,
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-komma-fuchsia font-semibold text-sm tracking-wide uppercase">
              Nieuws & Inzichten
            </span>
            <h1 className="mt-4 font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold text-komma-navy tracking-tight">
              De laatste
              <br />
              <span className="text-komma-fuchsia">ontwikkelingen</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              Blijf op de hoogte van trends, inzichten en nieuws over externe inhuur, 
              compliance en strategisch HR-beleid.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link 
              to={`/nieuws/${featuredPost.slug}`}
              className="group block"
            >
              <div className="relative bg-komma-navy rounded-3xl overflow-hidden">
                {/* Decorative elements */}
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
                      {featuredPost.category}
                    </span>
                  </div>
                  
                  <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 group-hover:text-komma-fuchsia transition-colors">
                    {featuredPost.title}
                  </h2>
                  
                  <p className="text-white/70 text-lg lg:text-xl max-w-2xl mb-8">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-6 text-white/60 text-sm mb-8">
                    <span className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      {featuredPost.author}
                    </span>
                    <span className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {formatDate(featuredPost.date)}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {featuredPost.readTime} leestijd
                    </span>
                  </div>
                  
                  <span className="inline-flex items-center text-white font-semibold group-hover:text-komma-fuchsia transition-colors">
                    Lees artikel
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Category Filter & Posts Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          {categories.length > 1 && (
            <div className="flex flex-wrap gap-3 mb-12">
              <button
                onClick={() => setActiveCategory(null)}
                className={`px-5 py-2.5 rounded-full font-medium transition-all ${
                  activeCategory === null
                    ? 'bg-komma-navy text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Alles
              </button>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2.5 rounded-full font-medium transition-all ${
                    activeCategory === category
                      ? 'bg-komma-navy text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          )}

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <Link
                key={post.slug}
                to={`/nieuws/${post.slug}`}
                className="group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <article className="h-full bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-komma-fuchsia/30 hover:shadow-xl hover:shadow-komma-fuchsia/5 transition-all duration-300">
                  {/* Card Header with category color */}
                  <div className="h-2 bg-komma-navy group-hover:bg-komma-fuchsia transition-colors" />
                  
                  <div className="p-6 lg:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full group-hover:bg-komma-fuchsia/10 group-hover:text-komma-fuchsia transition-colors">
                        {post.category}
                      </span>
                      <span className="text-gray-400 text-sm">
                        {post.readTime}
                      </span>
                    </div>
                    
                    <h3 className="font-display text-xl lg:text-2xl font-bold text-komma-navy mb-3 group-hover:text-komma-fuchsia transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
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

          {/* Empty State */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">,</div>
              <h3 className="font-display text-2xl font-bold text-komma-navy mb-2">
                Geen artikelen gevonden
              </h3>
              <p className="text-gray-600">
                Er zijn nog geen artikelen in deze categorie.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-komma-fuchsia font-semibold text-sm tracking-wide uppercase">
            Blijf op de hoogte
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-komma-navy">
            Wil je meer weten over externe inhuur?
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Plan een vrijblijvend gesprek en ontdek hoe Komma Consult 
            jouw organisatie kan helpen.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-komma-fuchsia text-white font-semibold rounded-xl hover:bg-komma-fuchsia-dark transition-colors shadow-lg shadow-komma-fuchsia/25"
          >
            Plan een gesprek
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
