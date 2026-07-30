import { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router'
import HomPage from '../pages/HomePage'
import StorePage from '../pages/StorePage'
import AboutPage from '../pages/AboutPage'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import AuthProtect from './AuthProtect'
import { AuthStore } from '../context/AuthContext'
import ProductDetail from '../components/ProductDetail'

const AppRoutes = () => {
  const { currentUser } = useContext(AuthStore)

  return (
    <Routes>
      <Route path='/' element={
        <Navigate to={currentUser ? '/home' : '/login'} replace />
      } />

      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />

      <Route path='/home' element={
        <AuthProtect>
          <HomPage />
        </AuthProtect>
      } />

      <Route path='/store' element={<StorePage />} />
      <Route path='/store/:id' element={<ProductDetail />} />

      <Route path='/about' element={<AboutPage />} />

    </Routes>
  )
}

export default AppRoutes