import { useContext } from "react"
import { ProductStore } from "../context/ProductContext"
import { Package, TrendingUp, Star, Tag } from "lucide-react"

const HomeStats = () => {

  const { allCategories, cartItems, topRatedProducts } = useContext(ProductStore)

  const total = cartItems.reduce((acc, product) => (acc + (product.unitPrice * product.quantity)), 0)

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10 stagger">

      {/* Cart Items Length */}
      <div className="bg-[#111] border border-white/8 rounded-3xl p-6 flex items-start gap-4">

        <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 bg-volt/10 text-volt">
          <Package size={22} />
        </div>

        <div>
          <p className="font-heading font-bold text-2xl text-white">{cartItems.length}</p>
          <p className="text-white/50 text-sm font-body">Cart Items</p>
          <p className="text-white/25 text-xs font-body mt-0.5">In your bag</p>
        </div>

      </div>

      {/* Cart Total Value */}
      <div className="bg-[#111] border border-white/8 rounded-3xl p-6 flex items-start gap-4">

        <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 bg-blue-500/10 text-blue-400">
          <TrendingUp size={22} />
        </div>

        <div>
          <p className="font-heading font-bold text-2xl text-white">${total.toFixed(2)}</p>
          <p className="text-white/50 text-sm font-body">Cart Value</p>
          <p className="text-white/25 text-xs font-body mt-0.5">Ready to checkout</p>
        </div>

      </div>

      {/* Top Rated Product */}
      <div className="bg-[#111] border border-white/8 rounded-3xl p-6 flex items-start gap-4">

        <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 bg-amber-500/10 text-amber-400">
          <Star size={22} />
        </div>

        <div>
          <p className="font-heading font-bold text-2xl text-white">{topRatedProducts.length}</p>
          <p className="text-white/50 text-sm font-body">Top Products</p>
          <p className="text-white/25 text-xs font-body mt-0.5">Highly rated</p>
        </div>

      </div>

      {/* Categories of Products */}
      <div className="bg-[#111] border border-white/8 rounded-3xl p-6 flex items-start gap-4">

        <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 bg-purple-500/10 text-purple-400">
          <Tag size={22} />
        </div>

        <div>
          <p className="font-heading font-bold text-2xl text-white">{allCategories.length}</p>
          <p className="text-white/50 text-sm font-body">Categories</p>
          <p className="text-white/25 text-xs font-body mt-0.5">To explore</p>
        </div>

      </div>
    </div>
  )
}

export default HomeStats