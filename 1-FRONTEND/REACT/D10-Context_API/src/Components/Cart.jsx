import { useContext } from "react";
import { MyStore } from "../Context/MyContext";

const Cart = () => {
  const { productsCart } = useContext(MyStore)

  const total = productsCart.reduce((total, product) => total + product.price, 0);

  return (
    <section className="rounded-4xl border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
      <div className="flex items-start justify-between gap-4 sm:items-center sm:gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Cart overview</p>
          <h2 className="mt-3 text-3xl font-black text-slate-900">{productsCart.length} item{productsCart.length === 1 ? "" : "s"} in cart</h2>
        </div>
        <div className="rounded-full bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700">Total ${total.toFixed(2)}</div>
      </div>

      {productsCart.length === 0 ? (
        <div className="mt-10 rounded-3xl border border-dashed border-slate-200 bg-slate-50 p-10 text-center text-slate-500">
          <p className="text-lg font-semibold text-slate-900">Your cart is empty</p>
          <p className="mt-3 text-sm leading-6">Browse products and tap “Add to cart” to see them appear here.</p>
        </div>
      ) : (
        <div className="mt-8 space-y-4">
          {productsCart.map((product, index) => (
            <div key={`${product.id}-${index}`} className="grid gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-4 sm:grid-cols-[96px_minmax(0,1fr)]">
              <img
                src={product.image}
                alt={product.title}
                className="h-24 w-full max-w-24 rounded-2xl object-contain"
              />
              <div className="flex flex-col justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-slate-500">{product.category}</p>
                  <h3 className="mt-2 text-base font-semibold text-slate-900">{product.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{product.description.slice(0, 90)}...</p>
                </div>
                <div className="flex items-center justify-between gap-3 text-sm text-slate-700">
                  <span className="font-semibold text-slate-900">${product.price.toFixed(2)}</span>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">{product.rating.rate} ★</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Cart;