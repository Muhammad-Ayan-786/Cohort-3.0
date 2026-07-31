import { useNavigate } from "react-router"
import StartRating from "./StartRating"
import { useContext } from "react"
import { ProductStore } from "../context/ProductContext"
import { CartStore } from "../context/CartContext"
import { toast } from "react-hot-toast"
import { ShoppingCart, Trash2 } from "lucide-react"

const ProductCard = ({ product, isInCart }) => {
  const navigate = useNavigate()

  const { addToCart, removeFromCart } = useContext(ProductStore)
  const { onOpen } = useContext(CartStore)

  const handleAddToCart = (e, product) => {
    e.stopPropagation()
    addToCart(product)
    toast.success('Added to cart 🛒')
    onOpen()
  }

  const handleRemoveFromCart = (e, productId) => {
    e.stopPropagation()
    removeFromCart(productId)
  }

  return (
    <div
      onClick={() => navigate(`/store/${product.id}`)}
      className="product-card flex flex-col group animate-fade-up" style={{ animationDelay: "0ms" }}
    >

      {/* Image & Category */}
      <div className="relative aspect-square bg-white overflow-hidden">
        <img src={product.images[0]} alt="Wireless Bluetooth Headphones" loading="lazy" className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-500" />
        <span className="absolute top-3 left-3 badge bg-black/60 text-white/80 backdrop-blur-sm capitalize text-[10px]">{product.category}</span>
      </div>

      {/* Details */}
      <div className="p-4 flex flex-col flex-1 gap-2">
        <p className="text-white/30 text-[10px] uppercase tracking-widest font-body">{product.category}</p>
        <h3 className="font-body font-medium text-white/85 text-sm leading-snug clamp-2 flex-1">{product.title}</h3>

        {/* Rating in Stars */}
        <div className="flex items-center gap-1.5">
          <div className="flex items-center">
            <StartRating rating={Math.round(product.rating)} />
          </div>

          <span className="text-white/30 text-[10px]">({product.rating})</span>
        </div>

        {/* Price & Add to Cart */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-white/6">
          <span className="font-heading font-bold text-volt text-lg">${product.price}</span>

          {
            isInCart ? (
              // Remove from Cart
              <button
                onClick={(e) => handleRemoveFromCart(e, product.id)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold font-body transition-all cursor-pointer duration-200 active:scale-95 bg-red-500 text-white hover:bg-red-600"
              >
                <Trash2 className="w-3 h-3" strokeWidth={2} />
                Remove
              </button>

            ) : (
              // Add to Cart
              <button
                onClick={(e) => handleAddToCart(e, product)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold font-body transition-all cursor-pointer duration-200 active:scale-95 bg-volt text-ink hover:bg-volt-light"
              >
                <ShoppingCart className="w-3 h-3" strokeWidth={2} />
                Add
              </button>
            )
          }

        </div>
      </div>

    </div >
  )
}

export default ProductCard