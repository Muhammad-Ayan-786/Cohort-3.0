import { Route, Routes } from 'react-router'
import Home from '../pages/Home'
import Product from '../pages/Product'
import About from '../pages/About'
import ProductDetail from '../pages/ProductDetail'
import ProtectRoutes from './ProtectRoutes'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />

      <Route path='/product' element={<Product />} />
      <Route path='/product/:id' element={<ProductDetail />} />

      <Route path='/about' element={
        <ProtectRoutes>
          <About />
        </ProtectRoutes>
      } />

    </Routes>
  )
}

export default AppRoutes