import { useContext, useState } from 'react'
import { useNavigate } from 'react-router'
import Logo from './Logo'
import { NavLink } from 'react-router'
import { AuthStore } from '../context/AuthContext'
import { ShoppingCart, LogOut, Menu, X } from 'lucide-react'
import { CartStore } from '../context/CartContext'
import { ProductStore } from '../context/ProductContext'
import { toast } from 'react-hot-toast'

const Navbar = () => {

  const { currentUser, setCurrentUser } = useContext(AuthStore)
  const { onOpen } = useContext(CartStore)
  const { cartItems } = useContext(ProductStore)

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navigate = useNavigate()

  const logout = () => {
    setCurrentUser(null)
    localStorage.setItem('currentUser', JSON.stringify(null))
    toast.success('Logged out. See you soon! 👋')
    navigate('/login')
  }

  const navLinkClass = ({ isActive }) =>
    `text-[15px] font-semibold transition-colors duration-200 ${isActive ? 'text-[#bdf600]' : 'text-stone-400 hover:text-white'
    }`

  const mobileNavLinkClass = ({ isActive }) =>
    `block py-3 px-4 rounded-xl text-base font-semibold transition-all duration-200 ${isActive ? 'bg-volt/10 text-volt border-l-4 border-volt' : 'text-stone-300 hover:bg-white/5 hover:text-white'
    }`

  return (
    <header className="sticky top-0 z-30 transition-all duration-300 bg-[#090909]/95 backdrop-blur-md border-b border-stone-900/60">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-6">
        {/* Logo */}
        <NavLink to="/home" className="shrink-0">
          <Logo />
        </NavLink>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/home" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/store" className={navLinkClass}>
            Shop
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3 shrink-0">
          {/* User Profile Info */}
          {currentUser && (
            <div className="hidden sm:flex items-center gap-2.5 bg-[#121212] border border-stone-800/80 px-3.5 py-2 rounded-xl select-none">
              <div className="w-6 h-6 bg-volt rounded-lg flex items-center justify-center text-black text-xs font-black">
                {currentUser.avatar}
              </div>
              <span className="text-sm text-stone-200 font-bold max-w-30 truncate">
                {currentUser.name}
              </span>
            </div>
          )}

          {/* Cart Icon Button */}
          <button
            onClick={onOpen}
            className="relative p-2.5 bg-[#121212] hover:bg-stone-800/60 border border-stone-800/80 rounded-xl transition-all duration-200 text-stone-300 cursor-pointer"
          >
            <ShoppingCart size={18} strokeWidth={2} />
            <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-volt text-black text-[10px] font-black rounded-full flex items-center justify-center">
              {cartItems.length}
            </span>
          </button>

          {/* Logout Icon Button */}
          <button
            onClick={logout}
            title="Logout"
            className="p-2.5 bg-[#121212] hover:bg-red-500/10 hover:border-red-500/20 border border-stone-800/80 rounded-xl transition-all duration-200 text-stone-400 hover:text-red-400 cursor-pointer"
          >
            <LogOut size={16} strokeWidth={2.5} />
          </button>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 bg-[#121212] border border-stone-800/80 rounded-xl text-stone-300 hover:text-white cursor-pointer transition-all duration-200 active:scale-95"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Panel with clean expand animation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-stone-900/60 bg-[#090909]/98 backdrop-blur-md px-6 py-4 space-y-2 absolute top-20 left-0 w-full animate-fade-in-quick shadow-2xl">

          <NavLink to="/home" className={mobileNavLinkClass} onClick={() => setMobileMenuOpen(false)}>
            Home
          </NavLink>

          <NavLink to="/store" onClick={() => setMobileMenuOpen(false)} className={mobileNavLinkClass} >
            Shop
          </NavLink>

          <NavLink to="/about" onClick={() => setMobileMenuOpen(false)} className={mobileNavLinkClass} >
            About
          </NavLink>

          {currentUser && (
            // User Profile
            <div className="pt-4 mt-2 border-t border-white/5 flex items-center gap-3 px-4 py-2 text-stone-400">
              <div className="w-8 h-8 bg-volt rounded-lg flex items-center justify-center text-black text-sm font-black">
                {currentUser.avatar}
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-stone-200">{currentUser.name}</span>
                <span className="text-xs text-stone-500">{currentUser.email}</span>
              </div>
            </div>
          )}

          {currentUser && (
            // Logout
            <button
              onClick={() => {
                logout()
                setMobileMenuOpen(false)
              }}
              className="flex items-center gap-3 w-full py-3 px-4 rounded-xl text-base font-semibold text-red-400 hover:bg-red-500/10 transition-all duration-200"
            >
              <LogOut size={18} />
              Logout
            </button>
          )}
        </div>
      )}
    </header>
  )
}

export default Navbar