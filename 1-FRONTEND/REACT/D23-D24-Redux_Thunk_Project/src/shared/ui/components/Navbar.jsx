import { NavLink } from "react-router";
import { Box, ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white border border-gray-200 rounded-2xl shadow-sm" role="navigation" aria-label="Main Navigation">
      <div className="flex items-center gap-6">
        <div className="font-extrabold text-2xl tracking-tight text-gray-900">
          HyperCart
          <span className="block text-[10px] uppercase tracking-widest text-gray-400 font-medium">Shop • Glow • Repeat</span>
        </div>
      </div>

      <div className="flex items-center gap-8" role="menubar">
        <NavLink to={'/main'} end className={({ isActive }) => `text-sm font-medium transition ${isActive ? 'text-black' : 'text-gray-500 hover:text-gray-800'}`}>
          Home
        </NavLink>
        <NavLink to={'/main/products'} className={({ isActive }) => `text-sm font-medium transition ${isActive ? 'text-black' : 'text-gray-500 hover:text-gray-800'}`}>
          Shop
        </NavLink>
        <NavLink to={'/main/about'} className={({ isActive }) => `text-sm font-medium transition ${isActive ? 'text-black' : 'text-gray-500 hover:text-gray-800'}`}>
          About
        </NavLink>
      </div>

      <div className="flex items-center gap-6">
        <NavLink to={'/main/cart'} className="relative text-gray-500 hover:text-gray-900" aria-label="Cart">
          <ShoppingCart size={20} />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] px-1.5 rounded-full">0</span>
        </NavLink>

        <NavLink to={'/main/orders'} className="text-gray-500 hover:text-gray-900" aria-label="Orders">
          <Box size={20} />
        </NavLink>

        <button className="px-4 py-2 bg-gray-900 text-white text-sm font-semibold rounded-lg hover:bg-gray-800 transition" aria-label="Logout">Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;