import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getBlogPostBySlug, getBlogPostUrl } from '@/content/blogPosts'

export default function LegacyNieuwsRedirect() {
  const { slug } = useParams<{ slug?: string }>()
  const navigate = useNavigate()

  useEffect(() => {
    if (slug) {
      const post = getBlogPostBySlug(slug)
      navigate(post ? getBlogPostUrl(post) : '/kennis', { replace: true })
      return
    }

    navigate('/kennis', { replace: true })
  }, [slug, navigate])

  return null
}
