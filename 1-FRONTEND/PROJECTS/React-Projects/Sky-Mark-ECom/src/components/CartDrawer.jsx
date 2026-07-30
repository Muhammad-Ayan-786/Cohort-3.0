import { useContext } from "react"
import { CartStore } from "../context/CartContext"
import { NavLink } from "react-router"
import { ProductStore } from "../context/ProductContext"
import CartProduct from "./CartProduct"

const CartDrawer = () => {

  const { onClose } = useContext(CartStore)

  const { cartItems, clearCart } = useContext(ProductStore)

  const total = cartItems.reduce((acc, product) => (acc + (product.unitPrice * product.quantity)), 0)

  const checkoutFunc = () => {
    if (!cartItems.length) return

    clearCart()
    // toast.success('Order placed! 🎉 (Demo)')
  }


  return (
    <aside className="fixed top-0 right-0 h-full w-full sm:w-105 bg-[#111] border-l border-white/10 z-50 flex flex-col transition-transform duration-300 ease-out translate-x-0 animate-slide-in">

      {/* Header */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-white/8">
        <div className="flex items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-bag text-volt">
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
            <path d="M3 6h18"></path>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>

          <h2 className="font-heading font-bold text-lg">Cart</h2>

          {cartItems.length > 0 &&
            <span className="badge bg-volt/15 text-volt text-xs">{cartItems.length} items</span>
          }
        </div>

        <button
          onClick={onClose}
          className="p-2 hover:bg-white/8 rounded-xl transition-colors text-white/50 hover:text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x">
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
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
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
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
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-package-open text-white/20">
                  <path d="M12 22v-9"></path>
                  <path d="M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z"></path>
                  <path d="M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13"></path>
                  <path d="M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z"></path>
                </svg>
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