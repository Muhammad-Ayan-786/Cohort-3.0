import { useContext, useState } from "react"
import Navbar from "./Components/Navbar"
import Cart from "./Components/Cart"
import ProductCard from "./Components/ProductCard"
import { MyStore } from "./Context/MyContext"

const App = () => {
  const { isCartOpen, products, productsCart, cartValue } = useContext(MyStore)

  return (
    <div className="min-h-screen bg-[#f7fbff] text-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <Navbar />

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.8fr_1fr]">
          <section className="space-y-6">
            <div className="rounded-4xl bg-linear-to-r from-slate-900 via-violet-700 to-cyan-600 p-8 text-white shadow-[0_30px_80px_rgba(15,23,42,0.12)]">
              <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/90">Curated storefront</p>
              <h1 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">Discover products with premium detail and modern style.</h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-100/90">Browse the latest electronics, clothing, and jewelry with rich ratings, elegant cards, and a shopping cart experience that looks as sleek as it feels.</p>
            </div>

            {isCartOpen ? (
              <div className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm">
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Products</p>
                    <p className="mt-4 text-3xl font-black text-slate-900">{products.length}</p>
                  </div>
                  <div className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm">
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Cart value</p>
                    <p className="mt-4 text-3xl font-black text-slate-900">${cartValue.toFixed(2)}</p>
                  </div>
                </div>

                <Cart />
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </section>

          <aside className="space-y-6">
            <div className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Quick actions</p>
              <h2 className="mt-4 text-2xl font-black text-slate-900">Cart preview</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">Your selections appear instantly below. Add a product to preview it in the cart summary.</p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-slate-50 p-4 text-center">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Items</p>
                  <p className="mt-3 text-2xl font-black text-slate-900">{productsCart.length}</p>
                </div>
                <div className="rounded-3xl bg-slate-50 p-4 text-center">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Value</p>
                  <p className="mt-3 text-2xl font-black text-slate-900">${cartValue.toFixed(2)}</p>
                </div>
              </div>
            </div>

            <div className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">Need inspiration?</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">Discover standout picks from premium accessories to stylish apparel. Use the cart to keep track of the best options.</p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default App