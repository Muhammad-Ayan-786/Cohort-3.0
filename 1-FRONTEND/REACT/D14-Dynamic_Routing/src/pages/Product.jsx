import { useContext, useEffect } from "react"
import { ArrowRight, ShieldCheck, Sparkles, Truck } from "lucide-react"
import { ProductStore } from "../context/ProductContext"
import ProductCard from "../components/ProductCard"

const Product = () => {
  const { productsData, fetchData } = useContext(ProductStore)

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="space-y-8">
      <section className="rounded-4xl border border-white/10 bg-linear-to-br from-zinc-900 via-zinc-900 to-zinc-800 p-8 shadow-2xl shadow-black/20 md:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-rose-400/30 bg-rose-500/10 px-3 py-1 text-sm font-semibold text-rose-200">
              <Sparkles size={16} />
              Premium collection
            </div>
            <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
              A curated lineup for modern routines.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-zinc-300">
              From everyday favorites to standout essentials, every product is chosen to balance
              comfort, quality, and timeless design.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="/"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-semibold text-zinc-950 transition hover:scale-105"
              >
                Shop best sellers
                <ArrowRight size={18} />
              </a>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-zinc-800/80 px-4 py-3 text-sm font-medium text-zinc-300">
                <ShieldCheck size={16} className="text-emerald-400" />
                Secure checkout
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-zinc-950/60 p-6">
            <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.25em] text-zinc-400">
              <Truck size={16} className="text-emerald-400" />
              Why shoppers love it
            </div>
            <div className="mt-6 space-y-4">
              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-xl font-semibold text-white">Trusted quality</p>
                <p className="mt-1 text-sm text-zinc-400">Every item is tested for comfort and durability.</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-xl font-semibold text-white">Simple experience</p>
                <p className="mt-1 text-sm text-zinc-400">Clean layout, easy navigation, and lightning-fast checkout.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          { title: "Free delivery", text: "Fast, reliable shipping on every purchase." },
          { title: "Easy returns", text: "Change your mind with a simple 30-day return window." },
          { title: "Dedicated support", text: "Real people ready to help whenever you need it." },
        ].map((item) => (
          <div key={item.title} className="rounded-[1.25rem] border border-white/10 bg-zinc-950/60 p-5">
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-zinc-400">{item.text}</p>
          </div>
        ))}
      </section>

      <section className="rounded-4xl border border-white/10 bg-zinc-950/60 p-6 shadow-xl shadow-black/10 md:p-8">
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-rose-300">
              Browse all
            </p>
            <h2 className="text-2xl font-bold text-white">Featured products</h2>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {productsData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Product