import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.jsx'
import './styles/index.css'
import './styles/styles-globals.css'

createRoot(document.getElementById('root')).render(
    <App />
)
