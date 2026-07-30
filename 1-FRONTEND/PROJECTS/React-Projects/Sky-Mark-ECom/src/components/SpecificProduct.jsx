import { useContext } from "react"
import { NavLink, useNavigate } from "react-router"
import { ProductStore } from "../context/ProductContext"
import StartRating from "./StartRating"
import { CartStore } from "../context/CartContext"

const SpecificProduct = ({ product }) => {
  const navigate = useNavigate()

  const { cartItems, addToCart, incrementQuantity, decrementQuantity } = useContext(ProductStore)
  const { onOpen } = useContext(CartStore)

  const isInCart = cartItems.find(item => item.id === product.id)


  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 mb-16">

      {/* Product Image */}
      <div className="bg-white rounded-3xl p-10 flex items-center justify-center aspect-square animate-scale-in">
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
                    className="w-8 h-8 flex items-center justify-center bg-white/8 hover:bg-white/15 border border-white/10 rounded-xl transition-all"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-minus">
                      <path d="M5 12h14"></path>
                    </svg>
                  </button>

                  <span className="font-heading font-bold text-lg w-6 text-center">{isInCart.quantity}</span>

                  {/* Increment */}
                  <button
                    onClick={() => incrementQuantity(product)}
                    className="w-8 h-8 flex items-center justify-center bg-white/8 hover:bg-white/15 border border-white/10 rounded-xl transition-all"
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
                <button className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl font-heading font-bold text-base transition-all duration-200 active:scale-95 bg-green-500/15 text-green-400 border border-green-500/25 hover:bg-green-500/25">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Added to Cart
                </button>
              </div>

              <button
                onClick={() => onOpen()}
                className="btn-ghost w-full text-center text-sm"
              >
                View Cart →
              </button>
            </>
          ) : (

            // Add to Cart
            <div
              onClick={() => {
                addToCart(product)
                onOpen()
              }}
              className="flex gap-3"
            >
              <button className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl font-heading font-bold text-base transition-all duration-200 active:scale-95 btn-volt">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart">
                  <circle cx="8" cy="21" r="1"></circle>
                  <circle cx="19" cy="21" r="1"></circle>
                  <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                </svg>
                Add to Cart
              </button>
            </div>
          )
        }

        {/* Delivery Detail Cards */}
        <div className="grid grid-cols-3 gap-3 mt-1">
          <div className="bg-white/3 border border-white/6 rounded-2xl p-3 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-truck text-volt mx-auto mb-1.5"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
              <path d="M15 18H9"></path>
              <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
              <circle cx="17" cy="18" r="2"></circle>
              <circle cx="7" cy="18" r="2"></circle>
            </svg>

            <p className="text-white/60 text-[11px] font-body font-semibold">Free Delivery</p>
            <p className="text-white/25 text-[10px] font-body">On orders $50+</p>
          </div>

          <div className="bg-white/3 border border-white/6 rounded-2xl p-3 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield text-volt mx-auto mb-1.5">
              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
            </svg>

            <p className="text-white/60 text-[11px] font-body font-semibold">Secure Pay</p>
            <p className="text-white/25 text-[10px] font-body">256-bit SSL</p>
          </div>

          <div className="bg-white/3 border border-white/6 rounded-2xl p-3 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-rotate-ccw text-volt mx-auto mb-1.5">
              <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
              <path d="M3 3v5h5"></path>
            </svg>

            <p className="text-white/60 text-[11px] font-body font-semibold">Easy Returns</p>
            <p className="text-white/25 text-[10px] font-body">30-day policy</p>
          </div>
        </div>

        <div className="flex gap-3 mt-6">
          {/* Previous Button */}
          <button
            disabled={product.id === 61}
            onClick={() => navigate(`/store/${product.id - 1}`)}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white/10 hover:bg-white/15 border border-white/10 rounded-2xl transition-all text-white text-sm font-body disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-white/5 disabled:border-white/6"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left">
              <path d="m15 18-6-6 6-6"></path>
            </svg>
            Previous
          </button>

          {/* Next Button */}
          <button
            disabled={product.id === 153}
            onClick={() => navigate(`/store/${product.id + 1}`)}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-volt hover:bg-volt-light text-ink border border-volt rounded-2xl transition-all font-heading font-semibold text-sm disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-volt/40 disabled:border-volt/40 disabled:text-white/40"
          >
            Next
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right">
              <path d="m9 18 6-6-6-6"></path></svg>
          </button>
        </div>

      </div>

    </div >
  )
}

export default SpecificProduct