import { ShoppingBag, Home, Package, Info } from "lucide-react"
import { NavLink } from "react-router"

const navLinkClass = ({ isActive }) =>
  `flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${isActive
    ? "bg-white text-zinc-950 shadow-lg"
    : "text-zinc-300 hover:bg-white/10 hover:text-white"
  }`

const Navbar = () => {
  return (
    <nav className="sticky top-4 z-20 flex items-center justify-between rounded-full border border-white/10 bg-zinc-950/70 px-4 py-3 shadow-lg shadow-black/20 backdrop-blur-xl">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-rose-500 to-violet-500">
          <ShoppingBag size={18} />
        </div>
        <div>
          <p className="text-base font-semibold">Nova Store</p>
          <p className="text-xs text-zinc-400">Minimal shopping, styled beautifully</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <NavLink to={"/"} className={navLinkClass}>
          <Home size={16} />
          Home
        </NavLink>
        <NavLink to={"/product"} className={navLinkClass}>
          <Package size={16} />
          Products
        </NavLink>
        <NavLink to={"/about"} className={navLinkClass}>
          <Info size={16} />
          About
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar