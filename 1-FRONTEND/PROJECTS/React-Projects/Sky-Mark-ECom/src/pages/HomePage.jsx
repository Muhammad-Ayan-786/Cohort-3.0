import { useContext, useEffect, useState } from "react"
import { ProductStore } from "../context/ProductContext"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import HomeHeroCard from "../components/HomeHeroCard"
import HomeStats from "../components/HomeStats"
import HomeShoppingBenefits from "../components/HomeShoppingBenefits"
import CartDrawer from "../components/CartDrawer"
import { ArrowRight, ShoppingBag, Star } from "lucide-react"
import { useNavigate } from "react-router"
import TopRatedProductTile from "../components/TopRatedProductTile"

const HomePage = () => {

  const navigate = useNavigate()

  const { fetchAllData, allCategories, topRatedProducts } = useContext(ProductStore)

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


        {/* Shop by Category */}
        <section className="mb-10">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-heading font-bold text-xl">Shop by Category</h2>
            <button
              onClick={() => navigate('/store')}
              className="text-volt text-sm hover:text-volt-light transition-colors flex items-center gap-1 cursor-pointer"
            >
              View All {" "}
              <ArrowRight size={16} />
            </button>
          </div>

          {
            allCategories.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {
                  allCategories.map((category, idx) => (
                    <button
                      key={idx}
                      onClick={() => navigate(`/store?category=${category}`)}
                      className="group bg-white border border-white/20 hover:border-white/40 hover:bg-white/95 rounded-2xl p-5 text-center transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                    >
                      <div className="text-3xl mb-3">📦</div>
                      <p className="font-body font-semibold text-ink/80 text-sm capitalize">{category}</p>
                      <p className="text-ink/50 text-xs mt-1">products</p>
                    </button>
                  ))
                }
              </div>
            )
          }
        </section>


        {/* Top Rated Products */}
        <div className="mb-10 ">

          <div className="bg-white border border-white/20 rounded-3xl p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-heading font-bold text-lg flex items-center gap-2 text-ink">
                <Star size={18} className="text-amber-400 fill-amber-400" />
                Top Rated
              </h2>

              <button
                onClick={() => navigate('/store')}
                className="text-volt text-xs hover:text-volt-light flex items-center gap-1 cursor-pointer"
              >
                See all
                <ArrowRight size={12} />
              </button>
            </div>

            {/* Products Container */}
            <div className="space-y-2">

              {topRatedProducts.length > 0 &&
                topRatedProducts.slice(0, 5).map((product, idx) => (
                  <TopRatedProductTile key={idx} product={product} />
                ))
              }

            </div>
          </div>
        </div>


        {/* Shopping Benefits */}
        <HomeShoppingBenefits />

      </main>

      <Footer />

    </div>
  )
}

export default HomePage