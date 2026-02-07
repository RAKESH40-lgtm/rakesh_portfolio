import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UseContextProvider from './Hooks/useContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UseContextProvider>
      <App />
    </UseContextProvider>
  </StrictMode>,
)
