import { useContext } from "react";
import { MyStore } from "../Context/MyContext";

const Navbar = () => {

  const { setIsCartOpen, productsCart } = useContext(MyStore)
  let cartCount = productsCart.length

  return (
    <header className="rounded-4xl border border-slate-200 bg-white p-5 shadow-[0_18px_65px_rgba(15,23,42,0.08)]">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-linear-to-br from-violet-600 to-cyan-500 text-lg font-black text-white shadow-[0_12px_25px_rgba(99,102,241,0.25)]">M</div>
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Marketplace</p>
            <h1 className="text-2xl font-black text-slate-900">Marketflow</h1>
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <button
            onClick={() => setIsCartOpen(false)}
            className="rounded-full border border-slate-200 bg-slate-50 px-5 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            Shop
          </button>
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative rounded-full bg-cyan-600 px-5 py-2 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(6,182,212,0.24)] transition hover:bg-cyan-700"
          >
            Cart
            <span className="absolute -right-2 -top-2 inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-slate-900 px-2 text-xs font-semibold text-white">
              {cartCount}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;