import { ViteReactSSG } from 'vite-react-ssg'
import { routes } from './routes'
import '@fontsource/dm-sans/latin-400.css'
import '@fontsource/dm-sans/latin-400-italic.css'
import '@fontsource/dm-sans/latin-500.css'
import '@fontsource/dm-sans/latin-600.css'
import '@fontsource/dm-sans/latin-700.css'
import '@fontsource/outfit/latin-600.css'
import '@fontsource/outfit/latin-700.css'
import './index.css'
import './components/chat/chat.css'

export const createRoot = ViteReactSSG({ routes })
