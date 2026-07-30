import { useContext } from "react"
import { ProductStore } from "../context/ProductContext"

const HomeStats = () => {

  const { allCategories } = useContext(ProductStore)

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10 stagger">

      {/* Cart Items Length */}
      <div className="bg-[#111] border border-white/8 rounded-3xl p-6 flex items-start gap-4">

        <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 bg-volt/10 text-volt">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-package">
            <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
            <path d="M12 22V12"></path>
            <path d="m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7"></path>
            <path d="m7.5 4.27 9 5.15"></path>
          </svg>
        </div>

        <div>
          <p className="font-heading font-bold text-2xl text-white">1</p>
          <p className="text-white/50 text-sm font-body">Cart Items</p>
          <p className="text-white/25 text-xs font-body mt-0.5">In your bag</p>
        </div>

      </div>

      {/* Cart Total Value */}
      <div className="bg-[#111] border border-white/8 rounded-3xl p-6 flex items-start gap-4">

        <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 bg-blue-500/10 text-blue-400">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up">
            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
            <polyline points="16 7 22 7 22 13"></polyline>
          </svg>
        </div>

        <div>
          <p className="font-heading font-bold text-2xl text-white">$99.99</p>
          <p className="text-white/50 text-sm font-body">Cart Value</p>
          <p className="text-white/25 text-xs font-body mt-0.5">Ready to checkout</p>
        </div>

      </div>

      {/* Top Rated Product */}
      <div className="bg-[#111] border border-white/8 rounded-3xl p-6 flex items-start gap-4">

        <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 bg-amber-500/10 text-amber-400">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star">
            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
          </svg>
        </div>

        <div>
          <p className="font-heading font-bold text-2xl text-white">5</p>
          <p className="text-white/50 text-sm font-body">Top Products</p>
          <p className="text-white/25 text-xs font-body mt-0.5">Highly rated</p>
        </div>

      </div>

      {/* Categories of Products */}
      <div className="bg-[#111] border border-white/8 rounded-3xl p-6 flex items-start gap-4">

        <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 bg-purple-500/10 text-purple-400">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-tag">
            <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
            <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
          </svg>
        </div>

        <div>
          <p className="font-heading font-bold text-2xl text-white">{allCategories.length}</p>
          <p className="text-white/50 text-sm font-body">Categories</p>
          <p className="text-white/25 text-xs font-body mt-0.5">To explore</p>
        </div>

      </div>
    </div>
  )
}

export default HomeStats