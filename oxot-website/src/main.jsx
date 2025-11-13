import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './global.css'
import App from './App.jsx'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

// Initialize GSAP defaults
gsap.config({
  force3D: true,
  nullTargetWarn: false
})

// Set default easing
gsap.defaults({
  ease: 'power2.out',
  duration: 0.8
})

// Detect touch devices
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
if (isTouchDevice) {
  document.documentElement.classList.add('touch')
} else {
  document.documentElement.classList.add('no-touch')
}

// Initialize app
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
