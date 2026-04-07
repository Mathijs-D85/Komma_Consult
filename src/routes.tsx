import type { RouteRecord } from 'vite-react-ssg'
import { Outlet } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import Layout from './components/Layout'
import Home from './pages/Home'
import Diensten from './pages/Diensten'
import Over from './pages/Over'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Nieuws from './pages/Nieuws'
import BlogPost from './pages/BlogPost'
import LegacyNieuwsRedirect from './pages/LegacyNieuwsRedirect'
import NotFound from './pages/NotFound'
import { blogPosts } from './content/blogPosts'

function Root() {
  return (
    <HelmetProvider>
      <Layout>
        <Outlet />
      </Layout>
      <Analytics />
      <SpeedInsights />
    </HelmetProvider>
  )
}

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: 'diensten', element: <Diensten /> },
      { path: 'over', element: <Over /> },
      { path: 'contact', element: <Contact /> },
      { path: 'privacy', element: <Privacy /> },
      { path: 'kennis', element: <Nieuws /> },
      {
        path: 'kennis/artikelen/:slug',
        element: <BlogPost />,
        getStaticPaths: () =>
          blogPosts
            .filter((post) => post.kind === 'kennis')
            .map((post) => `/kennis/artikelen/${post.slug}`),
      },
      {
        path: 'kennis/actueel/:slug',
        element: <BlogPost />,
        getStaticPaths: () =>
          blogPosts
            .filter((post) => post.kind === 'actueel')
            .map((post) => `/kennis/actueel/${post.slug}`),
      },
      { path: 'nieuws', element: <LegacyNieuwsRedirect /> },
      {
        path: 'nieuws/:slug',
        element: <LegacyNieuwsRedirect />,
        getStaticPaths: () =>
          blogPosts
            .filter((post) => post.kind === 'actueel')
            .map((post) => `/nieuws/${post.slug}`),
      },
      { path: '404', element: <NotFound /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]
