import { Star, ShoppingCart, Heart, Truck, ArrowRight } from "lucide-react"
import { useNavigate } from "react-router"

const ProductCard = ({ product }) => {
  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      className="group relative cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/80 shadow-xl shadow-black/20 transition-all duration-500 hover:-translate-y-2 hover:border-rose-400/30 hover:shadow-2xl"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(244,114,182,0.14),transparent_35%)] opacity-0 transition duration-500 group-hover:opacity-100" />

      <div className="relative flex h-72 items-center justify-center overflow-hidden bg-linear-to-br from-zinc-900 via-zinc-800 to-zinc-700 p-8">
        <button className="absolute right-4 top-4 z-20 rounded-full border border-white/10 bg-zinc-950/70 p-2 text-zinc-300 backdrop-blur transition hover:scale-110 hover:bg-white/10 hover:text-rose-300">
          <Heart size={16} />
        </button>

        <div className="absolute left-4 top-4 flex items-center gap-1 rounded-full bg-amber-400 px-3 py-1 text-xs font-semibold text-zinc-950 shadow-lg">
          <Star size={13} fill="currentColor" />
          {product.rating.rate}
        </div>

        <img
          src={product.image}
          alt={product.title}
          className="h-56 object-contain transition duration-500 group-hover:scale-110 group-hover:rotate-2"
        />
      </div>

      <div className="relative space-y-4 p-5">
        <span className="inline-flex rounded-full border border-rose-400/20 bg-rose-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-rose-200">
          {product.category}
        </span>

        <h2 className="line-clamp-2 text-lg font-bold text-white transition group-hover:text-rose-200">
          {product.title}
        </h2>

        <p className="line-clamp-2 text-sm leading-6 text-zinc-400">
          {product.description}
        </p>

        <div className="flex items-center gap-2 text-sm font-medium text-emerald-300">
          <Truck size={15} />
          Free shipping
        </div>

        <div className="flex items-center justify-between pt-2">
          <div>
            <p className="text-2xl font-black tracking-tight text-white">${product.price}</p>
            <p className="text-xs text-zinc-500">{product.rating.count} reviews</p>
          </div>

          <button className="flex items-center gap-2 rounded-2xl bg-white px-4 py-2.5 text-sm font-semibold text-zinc-950 transition-all duration-300 hover:scale-105 hover:bg-rose-400 hover:text-white">
            <ShoppingCart size={16} />
            Add
            <ArrowRight size={16} className="transition group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard