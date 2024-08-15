import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Loader from './loader/Loader.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<div><Loader/></div>}>
      <BrowserRouter>
           <App />
      </BrowserRouter>
    </Suspense>
  </StrictMode>,
)
