import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './routes/Router.jsx'
import { AuthContextProvider } from './context/AuthContext.jsx'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <RouterProvider router={router} />
    <Toaster
      position="top-right"
      reverseOrder={false}
    />
  </AuthContextProvider>
)
