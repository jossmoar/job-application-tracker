import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './i18n'
import './index.css'
import App from './App.tsx'

AOS.init({ once: true, duration: 500, easing: 'ease-out-cubic' })

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
