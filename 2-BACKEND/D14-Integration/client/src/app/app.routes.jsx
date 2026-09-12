import { createBrowserRouter } from 'react-router'
import ProfilePage from '../modules/auth/pages/ProfilePage'
import RegisterPage from '../modules/auth/pages/RegisterPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RegisterPage />
  },
  {
    path: '/profile',
    element: <ProfilePage />
  }
])

export default router