import { useContext } from "react"
import { NavLink, useNavigate } from "react-router"
import { ProductStore } from "../context/ProductContext"
import StartRating from "./StartRating"
import { CartStore } from "../context/CartContext"
import { toast } from "react-hot-toast"
import { ChevronLeft, ChevronRight, RotateCcw, Shield, ShoppingCart, Truck, Minus, Plus, Check } from "lucide-react"

const SpecificProduct = ({ product }) => {
  const navigate = useNavigate()

  const { cartItems, addToCart, incrementQuantity, decrementQuantity } = useContext(ProductStore)
  const { onOpen } = useContext(CartStore)

  const isInCart = cartItems.find(item => item.id === product.id)


  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 mb-16">

      {/* Product Image */}
      <div className="bg-white rounded-4xl border border-white/5 shadow-2xl p-10 flex items-center justify-center aspect-square animate-scale-in">
        {
          !(product?.images) ?
            <div>Loading...</div> :
            <img src={product.images[0]} alt="Aromatherapy Essential Oil Diffuser" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        }
      </div>

      {/* Product Details */}
      <div className="flex flex-col gap-5 animate-fade-up">
        <span className="badge bg-volt/10 text-volt border border-volt/20 capitalize w-fit text-xs">{product.category}</span>
        <h1 className="font-heading font-bold text-2xl sm:text-3xl text-white leading-tight">{product.title}</h1>

        {/* Rating */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <StartRating rating={Math.round(product.rating)} />
          </div>

          <span className="font-semibold text-white/70 text-sm">{Number(product.rating).toFixed(1)}</span>
          <span className="text-white/30 text-sm">({product?.reviews?.length} reviews)</span>
        </div>

        {/* Price */}
        <div className="py-4 border-y border-white/8">
          <span className="font-heading font-bold text-4xl text-volt">${product.price}</span>
        </div>

        {/* Description */}
        <p className="text-white/50 font-body text-sm leading-relaxed">{product.description}</p>


        {
          isInCart ? (
            <>
              {/* Quantity */}
              <div className="flex items-center gap-3 bg-white/4 border border-white/8 rounded-2xl p-4">
                <span className="text-white/50 text-sm font-body">In cart:</span>
                <div className="flex items-center gap-3 ml-auto">
                  {/* Decrement */}
                  <button
                    onClick={() => decrementQuantity(product)}
                    className="w-8 h-8 flex items-center justify-center bg-white/8 hover:bg-white/15 border border-white/10 rounded-xl transition-all cursor-pointer"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-minus">
                      <path d="M5 12h14"></path>
                    </svg>
                  </button>

                  <span className="font-heading font-bold text-lg w-6 text-center">{isInCart.quantity}</span>

                  {/* Increment */}
                  <button
                    onClick={() => incrementQuantity(product)}
                    className="w-8 h-8 flex items-center justify-center bg-white/8 hover:bg-white/15 border border-white/10 rounded-xl transition-all cursor-pointer"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus">
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Added to Cart */}
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    incrementQuantity(product)
                    toast.success('Quantity updated!')
                    onOpen()
                  }}
                  className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl font-heading font-bold text-base transition-all duration-200 active:scale-95 bg-green-500/15 text-green-400 border border-green-500/25 hover:bg-green-500/25 cursor-pointer"
                >
                  <Check size={18} />
                  Added to Cart
                </button>
              </div>

              <button
                onClick={() => onOpen()}
                className="btn-ghost w-full text-center text-sm cursor-pointer"
              >
                View Cart →
              </button>
            </>
          ) : (

            // Add to Cart
            <div
              onClick={() => {
                addToCart(product)
                toast.success('Added to cart 🛒')
                onOpen()
              }}
              className="flex gap-3 cursor-pointer"
            >
              <button className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl font-heading font-bold text-base transition-all duration-200 active:scale-95 btn-volt cursor-pointer">
                <ShoppingCart size={12} strokeWidth={2} />
                Add to Cart
              </button>
            </div>
          )
        }

        {/* Delivery Detail Cards */}
        <div className="grid grid-cols-3 gap-3 mt-1">
          <div className="bg-white/3 border border-white/6 rounded-2xl p-3 text-center">
            <Truck size={16} className="text-volt mx-auto mb-1.5" strokeWidth={2} />

            <p className="text-white/60 text-[11px] font-body font-semibold">Free Delivery</p>
            <p className="text-white/25 text-[10px] font-body">On orders $50+</p>
          </div>

          <div className="bg-white/3 border border-white/6 rounded-2xl p-3 text-center">
            <Shield className="w-4 h-4 text-volt mx-auto mb-1.5" strokeWidth={2} />

            <p className="text-white/60 text-[11px] font-body font-semibold">Secure Pay</p>
            <p className="text-white/25 text-[10px] font-body">256-bit SSL</p>
          </div>

          <div className="bg-white/3 border border-white/6 rounded-2xl p-3 text-center">
            <RotateCcw className="w-4 h-4 text-volt mx-auto mb-1.5" strokeWidth={2} />

            <p className="text-white/60 text-[11px] font-body font-semibold">Easy Returns</p>
            <p className="text-white/25 text-[10px] font-body">30-day policy</p>
          </div>
        </div>

        <div className="flex gap-3 mt-6">
          {/* Previous Button */}
          <button
            disabled={product.id === 61}
            onClick={() => navigate(`/store/${product.id - 1}`)}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white/10 hover:bg-white/15 border border-white/10 rounded-2xl transition-all text-white text-sm font-body disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-white/5 disabled:border-white/6 cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" strokeWidth={2} />
            Previous
          </button>

          {/* Next Button */}
          <button
            disabled={product.id === 153}
            onClick={() => navigate(`/store/${product.id + 1}`)}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-volt hover:bg-volt-light text-ink border border-volt rounded-2xl transition-all font-heading font-semibold text-sm disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-volt/40 disabled:border-volt/40 disabled:text-white/40 cursor-pointer"
          >
            Next
            <ChevronRight className="w-4 h-4" strokeWidth={2} />
          </button>
        </div>

      </div>

    </div >
  )
}

export default SpecificProduct