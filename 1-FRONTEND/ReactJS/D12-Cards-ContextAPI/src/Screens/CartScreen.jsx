import { useContext } from "react";
import { MyStore } from "../Context/MyContext";

const CartScreen = () => {
  const { cartItems } = useContext(MyStore)

  return (
    <section className="space-y-6">
      <div className="rounded-4xl border border-white/10 bg-linear-to-br from-fuchsia-500/10 via-slate-900/70 to-cyan-500/10 p-6 shadow-[0_20px_60px_rgba(2,6,23,0.35)]">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">Cart overview</p>
            <h2 className="mt-3 text-3xl font-black text-white">{cartItems.length} item{cartItems.length === 1 ? "" : "s"} in cart</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">Your selected favorites are waiting in a polished, premium checkout view.</p>
          </div>

          <div className="rounded-full border border-cyan-400/20 bg-slate-950/60 px-4 py-2 text-sm font-medium text-cyan-200">
            Live checkout glow
          </div>
        </div>
      </div>

      {cartItems.length === 0 ? (
        <div className="rounded-4xl border border-dashed border-cyan-400/20 bg-slate-900/60 p-10 text-center">
          <p className="text-xl font-semibold text-white">Your cart is empty</p>
          <p className="mt-3 text-sm leading-7 text-slate-300">Browse products and tap “Add to cart” to see them appear here in a fresh new layout.</p>
        </div>
      ) : (
        <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            {cartItems.map((product, index) => (
              <div key={`${product.id}-${index}`} className="grid gap-4 rounded-[1.6rem] border border-white/10 bg-white/10 p-4 shadow-[0_20px_60px_rgba(15,23,42,0.2)] backdrop-blur-xl sm:grid-cols-[96px_minmax(0,1fr)]">
                <div className="rounded-[1.2rem] bg-linear-to-br from-slate-900 via-slate-800 to-slate-700 p-2">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-24 w-full rounded-[0.9rem] object-contain"
                  />
                </div>
                <div className="flex flex-col justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-400">{product.category}</p>
                    <h3 className="mt-2 text-base font-semibold text-white">{product.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{product.description.slice(0, 90)}...</p>
                  </div>
                  <div className="flex items-center justify-between gap-3 text-sm text-slate-200">
                    <span className="font-semibold text-white">${product.price.toFixed(2)}</span>
                    <span className="rounded-full border border-white/10 bg-slate-950/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">{product.rating.rate} ★</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <aside className="rounded-4xl border border-white/10 bg-slate-900/70 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.2)]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-cyan-300">Order summary</p>
            <div className="mt-6 space-y-3 text-sm text-slate-300">
              <div className="flex items-center justify-between">
                <span>Items selected</span>
                <span className="font-semibold text-white">{cartItems.length}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Delivery</span>
                <span className="font-semibold text-white">Express</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Payment</span>
                <span className="font-semibold text-white">Secure</span>
              </div>
            </div>

            <div className="mt-6 rounded-[1.3rem] border border-cyan-400/20 bg-cyan-400/10 p-4 text-cyan-100">
              <p className="text-sm font-semibold">Ready for checkout</p>
              <p className="mt-2 text-sm leading-7 text-cyan-50/80">Your cart is polished, vibrant, and prepared for the next step.</p>
            </div>
          </aside>
        </div>
      )}
    </section>
  );
};

export default CartScreen;