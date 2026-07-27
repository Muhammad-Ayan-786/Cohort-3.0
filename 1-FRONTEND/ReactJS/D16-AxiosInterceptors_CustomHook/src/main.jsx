import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoutes from "./routes/AppRoutes";
import { AuthContextProvider } from './context/AuthContext';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <AppRoutes />
    <Toaster
      position="top-right"
      reverseOrder={true}
    />
  </AuthContextProvider>
)
