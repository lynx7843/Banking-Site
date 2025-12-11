import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx' // <-- Ensure this points to the file above


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)