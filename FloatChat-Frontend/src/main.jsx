import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Auth from './components/auth.jsx'
import Landing from './components/Landing.jsx'
import Research from './components/Research.jsx'
import About from './components/About.jsx'
import Data from './components/Data.jsx'
import Chat from './components/Chat.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Landing />
  </StrictMode>,
)
