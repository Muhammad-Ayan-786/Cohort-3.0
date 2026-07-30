import axios from "axios"
import {
  ArrowLeft,
  Star,
  ShoppingCart,
  Heart,
  Truck,
  ShieldCheck,
  RotateCcw,
  CreditCard,
  Sparkles,
  BadgeCheck,
} from "lucide-react"

import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"

const ProductDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [singleProduct, setSingleProduct] = useState({})

  const fetchSingleData = async (productId) => {
    try {
      if (!productId) return

      const { data } = await axios.get(`https://fakestoreapi.com/products/${productId}`)
      setSingleProduct(data)
    } catch (error) {
      console.log("Error in API", error)
    }
  }

  useEffect(() => {
    fetchSingleData(id)
  }, [id])

  return (
    <div className="min-h-screen rounded-4xl border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(244,114,182,0.18),transparent_35%),linear-gradient(135deg,#111827_0%,#1f2937_100%)] p-4 text-zinc-100 sm:p-6 lg:p-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6">
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-zinc-950/70 px-4 py-3 shadow-lg shadow-black/20 backdrop-blur-xl">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-zinc-300 transition hover:bg-white/10 hover:text-white"
          >
            <ArrowLeft size={18} />
            Back
          </button>

          <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 transition hover:bg-white/20">
            <Heart size={18} />
          </button>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="rounded-4xl border border-white/10 bg-zinc-950/70 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-8">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-rose-400/30 bg-rose-500/10 px-3 py-1 text-sm font-semibold text-rose-200">
              <Sparkles size={16} />
              Premium selection
            </div>
            <div className="rounded-3xl bg-linear-to-br from-zinc-900 via-zinc-800 to-zinc-700 p-8">
              <img
                src={singleProduct.image}
                alt={singleProduct.title}
                className="mx-auto h-80 w-full max-w-70 object-contain transition duration-500 hover:scale-105 sm:h-95"
              />
            </div>
          </div>

          <div className="space-y-6 rounded-4xl border border-white/10 bg-zinc-950/70 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-sm font-medium uppercase tracking-[0.25em] text-zinc-300">
                {singleProduct?.category}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-semibold text-emerald-300">
                <BadgeCheck size={16} />
                In stock now
              </span>
            </div>

            <div className="space-y-3">
              <h1 className="text-3xl font-black leading-tight text-white sm:text-4xl">
                {singleProduct?.title}
              </h1>
              <p className="text-lg leading-8 text-zinc-400">
                {singleProduct?.description}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 rounded-[1.25rem] border border-white/10 bg-white/5 p-4">
              <div className="flex items-center gap-2 text-amber-300">
                <Star size={18} fill="currentColor" />
                <span className="font-semibold text-white">{singleProduct?.rating?.rate}</span>
              </div>
              <span className="text-sm text-zinc-400">
                {singleProduct?.rating?.count} happy reviews
              </span>
            </div>

            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">Price</p>
                <p className="text-4xl font-black text-white">${singleProduct?.price}</p>
              </div>
              <div className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-zinc-300">
                Free delivery over $50
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 font-semibold text-zinc-950 transition hover:scale-[1.01]">
                <ShoppingCart size={18} />
                Add to cart
              </button>
              <button className="flex flex-1 items-center justify-center rounded-2xl border border-white/15 bg-zinc-900 px-5 py-3 font-semibold text-white transition hover:bg-zinc-800">
                Buy now
              </button>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                {
                  icon: Truck,
                  title: "Fast delivery",
                  text: "Arrives in 2-3 business days.",
                  color: "text-emerald-300",
                },
                {
                  icon: RotateCcw,
                  title: "Easy returns",
                  text: "Hassle-free 30-day returns.",
                  color: "text-sky-300",
                },
                {
                  icon: ShieldCheck,
                  title: "Secure checkout",
                  text: "Protected payments and support.",
                  color: "text-violet-300",
                },
                {
                  icon: CreditCard,
                  title: "Flexible payment",
                  text: "Pay with cards or wallets.",
                  color: "text-amber-300",
                },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4">
                    <Icon className={`mb-3 ${item.color}`} size={20} />
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-zinc-400">{item.text}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="rounded-4xl border border-white/10 bg-zinc-950/70 p-6 shadow-xl shadow-black/10 backdrop-blur-xl sm:p-8">
          <h2 className="text-2xl font-bold text-white">Product details</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4">
              <p className="text-sm text-zinc-400">Category</p>
              <p className="mt-1 font-semibold text-white">{singleProduct?.category}</p>
            </div>
            <div className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4">
              <p className="text-sm text-zinc-400">Rating</p>
              <p className="mt-1 font-semibold text-white">{singleProduct?.rating?.rate} / 5</p>
            </div>
            <div className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4">
              <p className="text-sm text-zinc-400">Product ID</p>
              <p className="mt-1 font-semibold text-white">#{singleProduct?.id}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail