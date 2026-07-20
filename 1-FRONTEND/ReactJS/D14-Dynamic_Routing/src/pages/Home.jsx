import { useContext, useEffect } from "react"
import { ArrowRight, Sparkles, ShoppingBag, Truck } from "lucide-react"
import { ProductStore } from "../context/ProductContext"
import ProductCard from "../components/ProductCard"
import { NavLink } from "react-router"

const Home = () => {
  const { productsData, fetchData } = useContext(ProductStore)

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="space-y-8">
      <section className="rounded-4xl border border-white/10 bg-white/10 p-8 shadow-2xl shadow-black/10 backdrop-blur-xl md:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-zinc-950/40 px-3 py-1 text-sm font-medium text-zinc-200">
              <Sparkles size={16} className="text-rose-300" />
              New season drop
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
                Discover essentials that feel elevated.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-zinc-300">
                Shop a handpicked collection of modern favorites with premium quality,
                fast delivery, and a calm, refined storefront experience.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="/product"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-semibold text-zinc-950 transition hover:scale-105"
              >
                Browse collection
                <ArrowRight size={18} />
              </a>
              <div className="flex items-center gap-2 rounded-full border border-white/15 bg-zinc-950/40 px-4 py-2 text-sm text-zinc-300">
                <Truck size={16} className="text-emerald-400" />
                Free shipping on every order
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-linear-to-br from-rose-500 via-fuchsia-500 to-indigo-600 p-6 text-white">
            <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.25em] text-white/80">
              <ShoppingBag size={18} />
              Featured today
            </div>
            <div className="mt-6 space-y-4">
              <div className="rounded-2xl bg-white/15 p-4 backdrop-blur">
                <p className="text-2xl font-bold">Fast delivery</p>
                <p className="mt-1 text-sm text-white/80">Arrives at your door in just 2-3 days.</p>
              </div>
              <div className="rounded-2xl bg-white/15 p-4 backdrop-blur">
                <p className="text-2xl font-bold">Premium support</p>
                <p className="mt-1 text-sm text-white/80">Friendly help, easy returns, and smart recommendations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-4xl border border-white/10 bg-zinc-950/60 p-6 shadow-xl shadow-black/10 md:p-8">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-rose-300">
              Trending picks
            </p>
            <h2 className="text-2xl font-bold text-white">Loved by customers this week</h2>
          </div>
          <NavLink to="/product" className="text-sm font-semibold text-zinc-300 transition hover:text-white">
            See all products →
          </NavLink>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {productsData.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home