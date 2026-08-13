import { createRoot } from 'react-dom/client'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import App from './App.jsx'
import TanStackPagination from './TanStackPagination.jsx'
import TansStackInfinite from './TansStackInfinite.jsx'


const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  // <App />

  <QueryClientProvider client={queryClient}>
    {/* <TanStackPagination /> */}
    <TansStackInfinite />
  </QueryClientProvider>
)
