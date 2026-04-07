import { Routes, Route } from 'react-router-dom'
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

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diensten" element={<Diensten />} />
          <Route path="/over" element={<Over />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/kennis" element={<Nieuws />} />
          <Route path="/kennis/artikelen/:slug" element={<BlogPost />} />
          <Route path="/kennis/actueel/:slug" element={<BlogPost />} />
          <Route path="/nieuws" element={<LegacyNieuwsRedirect />} />
          <Route path="/nieuws/:slug" element={<LegacyNieuwsRedirect />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
      <Analytics />
      <SpeedInsights />
    </>
  )
}

export default App

