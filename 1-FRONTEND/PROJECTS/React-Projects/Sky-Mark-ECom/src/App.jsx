import { useContext } from 'react'
import AppRoutes from './routes/AppRoutes'
import { CartStore } from './context/CartContext'
import CartDrawer from './components/CartDrawer'

const App = () => {

  const { isCartOpen } = useContext(CartStore)

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white">

      {isCartOpen && <CartDrawer />}

      <AppRoutes />

    </div>
  )
}

export default App