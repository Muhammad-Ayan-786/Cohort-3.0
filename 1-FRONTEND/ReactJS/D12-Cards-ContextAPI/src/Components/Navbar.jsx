import { useContext } from "react";
import { MyStore } from "../Context/MyContext";

const Navbar = () => {

  const { setIsCartOpen, cartItems } = useContext(MyStore)

  return (
    <header className="overflow-hidden rounded-4xl border border-white/10 bg-slate-900/70 p-5 shadow-[0_25px_80px_rgba(15,23,42,0.45)] backdrop-blur-xl">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-4">
          <div className="relative flex h-14 w-14 items-center justify-center rounded-[1.3rem] bg-linear-to-br from-fuchsia-500 via-violet-500 to-cyan-400 text-xl font-black text-white shadow-[0_10px_30px_rgba(129,140,248,0.35)]">
            M
            <span className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-slate-900 bg-emerald-400"></span>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-cyan-300">Neon Market</p>
            <h1 className="text-2xl font-black text-white">Market Aura</h1>
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <button
            onClick={() => setIsCartOpen(false)}
            className="rounded-full border border-white/10 bg-white/10 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:bg-white/20"
          >
            Explore
          </button>
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative rounded-full bg-linear-to-r from-cyan-400 to-violet-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_35px_rgba(34,211,238,0.25)] transition hover:brightness-110"
          >
            Cart
            <span className="absolute -right-2 -top-2 inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-slate-950 px-2 text-xs font-semibold text-white">
              {cartItems.length}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;