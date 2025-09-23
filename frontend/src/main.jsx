import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '@/App.jsx'
import { CookiesProvider } from 'react-cookie'
import RootProvider from '@hooks/RootProvider.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <CookiesProvider defaultSetOptions={{ path: '/' }}>
      <RootProvider>
        <App />
      </RootProvider>
    </CookiesProvider>
  // </StrictMode>,
)
