import { Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import Layout from './components/Layout'
import Home from './pages/Home'
import Diensten from './pages/Diensten'
import Over from './pages/Over'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
      <Analytics />
      <SpeedInsights />
    </>
  )
}

export default App

