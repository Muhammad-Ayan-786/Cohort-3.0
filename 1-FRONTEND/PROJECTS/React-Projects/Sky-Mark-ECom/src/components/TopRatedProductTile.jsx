import toast from "react-hot-toast"
import { useNavigate } from "react-router"
import { CartStore } from "../context/CartContext"
import { useContext } from "react"
import { ProductStore } from "../context/ProductContext"
import { ShoppingBag } from "lucide-react"

const TopRatedProductTile = ({ product }) => {

  const navigate = useNavigate()

  const { addToCart, cartItems, incrementQuantity } = useContext(ProductStore)
  const { onOpen } = useContext(CartStore)

  const handleAddToCart = (e, product) => {
    e.stopPropagation()
    addToCart(product)
    toast.success('Added to cart 🛒')
    onOpen()
  }

  const handleIncrement = (e, product) => {
    e.stopPropagation()
    incrementQuantity(product)
    toast.success('Quantity updated!')
    onOpen()
  }

  const isInCart = cartItems.find((item) => item.id === product.id)

  return (
    <div
      onClick={() => navigate(`/store/${product.id}`)}
      className="group flex items-center gap-3 p-3 bg-white/3 hover:bg-white/6 border border-white/6 hover:border-volt/30 rounded-2xl transition-all duration-200 cursor-pointer"
    >
      {/* Product Image */}
      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shrink-0 p-1.5">
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 min-w-0">
        <p className="text-white/80 text-xs font-body clamp-1">{product.title}</p>
        <p className="text-volt font-heading font-bold text-sm mt-0.5">${product.price}</p>
      </div>

      {
        isInCart ? (
          // Increment Quantity
          <button
            onClick={(e) => handleIncrement(e, product)}
            className="shrink-0 w-7 h-7 bg-volt text-ink rounded-lg flex items-center justify-center transition-all cursor-pointer"
          >
            <ShoppingBag size={13} />
          </button>
        ) : (
          // Add to Cart
          <button
            onClick={(e) => handleAddToCart(e, product)}
            className="shrink-0 w-7 h-7 bg-volt/10 hover:bg-volt text-volt hover:text-ink rounded-lg flex items-center justify-center transition-all cursor-pointer"
          >
            <ShoppingBag size={13} />
          </button>
        )
      }
    </div>)
}

export default TopRatedProductTile