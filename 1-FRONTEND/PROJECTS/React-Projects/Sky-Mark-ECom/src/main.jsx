import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { AuthContextProvider } from './context/AuthContext.jsx'
import { ProductContextProvider } from './context/ProductContext.jsx'
import { CartContextProvider } from './context/CartContext.jsx'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthContextProvider>
      <ProductContextProvider>
        <CartContextProvider>
          <App />
          <Toaster
            position="bottom-right"
            reverseOrder={false}
          />
        </CartContextProvider>
      </ProductContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
)

