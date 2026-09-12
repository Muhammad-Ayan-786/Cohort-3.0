import { RouterProvider } from 'react-router'
import router from './app.routes'
import { AuthContextProvider } from '../modules/auth/context/AuthProvider'

const App = () => {
  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  )
}

export default App