import { ShoppingCart, X } from "lucide-react";
import { useContext, useState } from "react";
import { recipeContext } from "../context/RecipeContext";
import Cart from "./Cart";

function CartDrawer({ isOpen, onClose }) {
  const { addToCart, clearCart } = useContext(recipeContext)
  const [checkoutMessage, setCheckoutMessage] = useState("")

  const total = addToCart.reduce((total, val) => (total += val.price), 0)

  const handleCheckout = () => {
    if (!addToCart.length) return

    clearCart()
    setCheckoutMessage("Thanks for your order — your cart is now cleared.")
  }
  return (
    <div className={`fixed inset-0 z-50 transition-opacity duration-500 ${isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}>
      <button
        type="button"
        aria-label="Close cart drawer"
        className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}
        onClick={onClose}
      />

      <aside className={`absolute right-0 top-0 flex h-screen w-full flex-col bg-white shadow-2xl transition-transform duration-500 ease-out sm:w-96 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>

        {/* Header */}
        <div className="flex items-center justify-between border-b p-5">

          <h2 className="text-2xl font-bold">Your Cart</h2>

          <button
            type="button"
            onClick={onClose}
            className="text-3xl font-bold cursor-pointer"
            aria-label="Close cart drawer"
          >
            <X />
          </button>

        </div>

        {/* Cart Items */}
        <div className="flex-1 space-y-5 overflow-y-auto scrollbar-none p-5">

          {/* Cart Item */}
          {
            addToCart.length === 0
              ?
              <div className="flex min-h-70 flex-col items-center justify-center rounded-2xl border border-dashed border-orange-200 bg-orange-50/70 px-6 py-10 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                  <ShoppingCart className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Your cart is empty</h3>
                <p className="mt-2 text-sm text-gray-500">Add your favorite recipes and they'll show up here.</p>
              </div>

              :

              addToCart.map(item => {
                return <Cart key={item._id} item={item} />
              })
          }

        </div>

        {/* Footer */}
        <div className="border-t p-5">
          <div className="mb-4 flex justify-between text-lg">
            <span>Total</span>
            <span className="font-bold text-orange-500">${total}</span>
          </div>

          {checkoutMessage && (
            <div className="mb-4 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
              {checkoutMessage}
            </div>
          )}

          <div className="grid gap-3 sm:grid-cols-2">
            <button
              className="w-full rounded-lg bg-orange-500 py-3 text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60"
              type="button"
              onClick={handleCheckout}
              disabled={!addToCart.length}
            >
              Checkout
            </button>

            <button
              className="w-full rounded-lg border border-orange-200 bg-white py-3 text-orange-600 transition hover:border-orange-300 hover:bg-orange-50 disabled:cursor-not-allowed disabled:opacity-50"
              type="button"
              onClick={() => {
                clearCart()
                setCheckoutMessage("Your cart was cleared.")
              }}
              disabled={!addToCart.length}
            >
              Clear cart
            </button>
          </div>
        </div>

      </aside>
    </div>
  );
}

export default CartDrawer;