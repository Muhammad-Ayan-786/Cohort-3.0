import { useContext } from "react"
import { AuthStore } from "../context/AuthContext"
import { NavLink } from "react-router"

const HomeHeroCard = () => {

  const { currentUser } = useContext(AuthStore)

  return (
    <div className="relative overflow-hidden rounded-3xl bg-[#111] border border-white/8 p-8 sm:p-12 mb-10">

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-16 -right-16 w-80 h-80 bg-volt/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-60 h-60 bg-volt/4 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgb(200, 244, 0) 1px, transparent 1px), linear-gradient(90deg, rgb(200, 244, 0) 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
      </div>

      <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
        <div>
          <p className="text-volt/70 text-sm font-body tracking-widest uppercase mb-3">Good afternoon 👋</p>
          <h1 className="font-heading font-bold text-4xl sm:text-5xl text-white leading-tight mb-4">
            Welcome back, <br />
            <span className="text-volt">{currentUser?.name.split(' ')[0]}</span>
          </h1>

          <p className="text-white/40 font-body max-w-md">
            Discover today's picks — hand-curated products across electronics, fashion, and more.
          </p>

          <div className="flex gap-3 mt-6 flex-wrap">
            <NavLink to={"/store"} className="btn-volt flex items-center gap-2">
              Shop Now{" "}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </NavLink>

            <NavLink to={"/store"} className="btn-ghost flex items-center gap-2">
              View All Products
            </NavLink>
          </div>
        </div>

        <div className="shrink-0 flex flex-col gap-3">
          <div className="bg-volt/10 border border-volt/20 rounded-2xl px-6 py-4 text-center">
            <p className="font-heading font-bold text-4xl text-volt">20+</p>
            <p className="text-white/40 text-xs font-body mt-1">Products Available</p>
          </div>
          <div className="bg-white/4 border border-white/8 rounded-2xl px-6 py-4 text-center">
            <p className="font-heading font-bold text-2xl text-white">Free</p>
            <p className="text-white/40 text-xs font-body mt-1">Delivery on ₹999+</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default HomeHeroCard