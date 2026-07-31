import { useContext } from "react"
import { CartStore } from "../context/CartContext"
import { NavLink } from "react-router"
import { ProductStore } from "../context/ProductContext"
import CartProduct from "./CartProduct"
import { toast } from "react-hot-toast"
import { ShoppingBag, X, ArrowRight, PackageOpen } from "lucide-react"

const CartDrawer = () => {

  const { onClose } = useContext(CartStore)

  const { cartItems, clearCart } = useContext(ProductStore)

  const total = cartItems.reduce((acc, product) => (acc + (product.unitPrice * product.quantity)), 0)

  const checkoutFunc = () => {
    if (!cartItems.length) return

    clearCart()
    toast.success('Order placed! 🎉 (Demo)')
    onClose()
  }


  return (
    <aside className="relative h-full w-full sm:w-105 bg-[#111111]/90 border-l border-white/10 z-50 flex flex-col backdrop-blur-xl animate-slide-in-right shadow-[0_0_60px_-15px_rgba(0,0,0,0.8)]">

      {/* Header */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-white/8">
        <div className="flex items-center gap-3">
          <ShoppingBag className="text-volt" size={20} />

          <h2 className="font-heading font-bold text-lg">Cart</h2>

          {cartItems.length > 0 &&
            <span className="badge bg-volt/15 text-volt text-xs">{cartItems.length} items</span>
          }
        </div>

        <button
          onClick={onClose}
          className="p-2 hover:bg-white/8 rounded-xl transition-colors text-white/50 hover:text-white"
        >
          <X size={18} />
        </button>
      </div>

      {
        cartItems.length > 0 ? (
          <>
            <div className="flex-1 overflow-y-auto scrollbar-none px-6 py-4 space-y-3">
              {
                // Product Card
                cartItems.map(product => (
                  <CartProduct key={product.id} cartProduct={product} />
                ))
              }
            </div>

            {/* Total & Checkout */}
            <div className="px-6 py-5 border-t border-white/8 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-white/50 text-sm font-body">Total</span>
                <span className="font-heading font-bold text-2xl text-white">${total.toFixed(2)}</span>
              </div>

              <button
                onClick={checkoutFunc}
                className="w-full btn-volt flex items-center justify-center gap-2 py-3.5 text-base font-heading font-bold"
              >
                Checkout{" "}
                <ArrowRight size={18} />
              </button>

              <button
                onClick={clearCart}
                className="w-full text-center text-xs text-white/25 hover:text-red-400 transition-colors py-1"
              >
                Clear cart
              </button>

            </div>
          </>
        ) : (
          // Empty Cart
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3">
            <div className="h-full flex flex-col items-center justify-center gap-4 text-center py-16">

              <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center">
                <PackageOpen size={36} className="text-white/20" />
              </div>

              <div>
                <p className="font-heading font-semibold text-white/70 text-lg">Cart is empty</p>
                <p className="text-white/30 text-sm mt-1">Go shop something cool!</p>
              </div>

              <NavLink to={"/store"} className="btn-volt mt-2" onClick={onClose}>
                Browse Products
              </NavLink>
            </div>
          </div>
        )
      }

    </aside>
  )
}

export default CartDrawer