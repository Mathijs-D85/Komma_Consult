import { ViteReactSSG } from 'vite-react-ssg'
import { routes } from './routes'
import './index.css'
import './components/chat/chat.css'

export const createRoot = ViteReactSSG({ routes })
