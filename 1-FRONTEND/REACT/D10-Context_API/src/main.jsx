import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Web from './Explain/Web.jsx'
import { ContextProvider } from './Context/MyContext.jsx'

createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <App />
  </ContextProvider>
  // <Web />
)
