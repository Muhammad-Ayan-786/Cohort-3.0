import { useContext, useEffect, useState } from "react"
import { ProductStore } from "../context/ProductContext"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import HomeHeroCard from "../components/HomeHeroCard"
import HomeStats from "../components/HomeStats"
import HomeShoppingBenefits from "../components/HomeShoppingBenefits"
import CartDrawer from "../components/CartDrawer"
import { NavLink } from "react-router"

const HomePage = () => {

  const { fetchAllData, allCategories } = useContext(ProductStore)

  useEffect(() => {
    fetchAllData()
  }, [])

  return (
    <div>
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Greeting and Explainer */}
        <HomeHeroCard />

        {/* Stats */}
        <HomeStats />


        <section className="mb-10">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-heading font-bold text-xl">Shop by Category</h2>
            <NavLink to="/store" className="text-volt text-sm hover:text-volt-light transition-colors flex items-center gap-1">
              View All {" "}
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </NavLink>
          </div>

          {
            allCategories.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {
                  allCategories.map((category, idx) => (
                    <NavLink
                      key={idx}
                      to={`/store?category=${category}`}
                      className="group bg-white border border-white/20 hover:border-white/40 hover:bg-white/95 rounded-2xl p-5 text-center transition-all duration-200 hover:-translate-y-0.5"
                    >
                      <div className="text-3xl mb-3">📦</div>
                      <p className="font-body font-semibold text-ink/80 text-sm capitalize">{category}</p>
                      <p className="text-ink/50 text-xs mt-1">{category.total} items</p>
                    </NavLink>
                  ))
                }
              </div>
            )
          }
        </section>




        {/* Shopping Benefits */}
        <HomeShoppingBenefits />

      </main>

      <Footer />

    </div>
  )
}

export default HomePage