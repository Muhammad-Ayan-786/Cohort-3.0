import { ShoppingCart, Search, ChefHat, Sparkles } from "lucide-react";
import { useContext } from "react";
import { recipeContext } from "../context/RecipeContext";

function Navbar({ onCartClick }) {

  const { addToCart, searchQuery, setSearchQuery } = useContext(recipeContext)

  return (
    <nav className="sticky top-0 z-50 border-b border-orange-100 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <div className="flex cursor-pointer items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-orange-500 to-amber-400 text-white shadow-md">
            <ChefHat size={22} />
          </div>

          <div>
            <h1 className="text-xl font-bold text-orange-600">RecipeHub</h1>
            <p className="text-xs font-medium text-gray-500">Fresh picks daily</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mx-6 hidden flex-1 max-w-lg md:flex">
          <div className="relative w-full">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              onChange={e => setSearchQuery(e.target.value)}
              value={searchQuery}
              type="text"
              placeholder="Search recipes..."
              className="w-full rounded-full border border-gray-200 bg-gray-50 py-3 pl-12 pr-4 text-sm text-gray-700 transition focus:border-orange-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-200"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onCartClick}
            className="relative rounded-full p-2.5 transition hover:bg-orange-50"
          >
            <ShoppingCart size={22} className="text-gray-700 transition hover:text-orange-500" />

            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-[10px] font-semibold text-white">
              {addToCart.length}
            </span>
          </button>

          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="profile"
            className="h-10 w-10 rounded-full object-cover ring-2 ring-orange-100"
          />
        </div>

      </div>
    </nav>
  );
}

export default Navbar;