import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { ProductProvider } from './context/ProductContext.jsx'
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ProductProvider>
      <App />
      <ToastContainer
        position="top-center"
        closeOnClick={true}
        theme="dark"
      />
    </ProductProvider>
  </BrowserRouter>
)
