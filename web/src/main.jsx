import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './stylesheets/typography.css'
import './stylesheets/animations.css'
import './stylesheets/global.css'



createRoot(document.getElementById('root')).render(

  <App />
)
