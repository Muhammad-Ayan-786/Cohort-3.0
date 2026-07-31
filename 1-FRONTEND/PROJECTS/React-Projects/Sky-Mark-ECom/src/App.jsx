import { useContext } from 'react'
import AppRoutes from './routes/AppRoutes'
import { CartStore } from './context/CartContext'
import CartDrawer from './components/CartDrawer'

const App = () => {

  const { isCartOpen, onClose } = useContext(CartStore)

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white">

      {/* Cart Drawer Overlay & Component */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
          {/* Overlay background with blur and click-to-close */}
          <div
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 animate-fade-in-quick"
          />
          <CartDrawer />
        </div>
      )}

      <AppRoutes />
    </div>
  )
}

export default App