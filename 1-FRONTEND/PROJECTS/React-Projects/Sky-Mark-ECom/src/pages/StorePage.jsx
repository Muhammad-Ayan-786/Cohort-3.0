import { useContext, useEffect } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { ProductStore } from '../context/ProductContext'
import ProductCard from '../components/ProductCard'
import { ProductSkeleton } from '../components/ProductSkeleton'
import StoreSearchBar from '../components/StoreSearchBar'
import { useSearchParams } from 'react-router'

const StorePage = () => {

  const [searchParams] = useSearchParams()
  const urlCategory = searchParams.get("category")

  const {
    fetchAllData,
    isLoading,

    searchQuery, setSearchQuery,
    category, sortOption,
    setCategory,

    cartItems,

    searchByQuery,
    selectedCategory,
    sortProducts
  } = useContext(ProductStore)

  useEffect(() => {
    if (!urlCategory) return
    setSearchQuery('')
    setCategory(urlCategory)
  }, [urlCategory])

  const searchResult = searchByQuery(searchQuery)
  const categoryResult = selectedCategory(searchResult, category)
  const finalResult = sortProducts(categoryResult, sortOption)

  useEffect(() => {
    fetchAllData()
  }, [])


  return (
    <div>
      <Navbar />

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>

        <div className="mb-8">
          <h1 className="font-heading font-bold text-3xl sm:text-4xl mb-2">All Products</h1>
          <p className="text-white/40 font-body text-sm">
            {finalResult.length} products found{" "}
            {category !== "all" && (
              <span className="text-volt">
                in <span className="capitalize">{category}</span>
              </span>
            )}
          </p>
        </div>


        {/* Search */}
        <StoreSearchBar />


        {/* Products */}
        {
          isLoading ?
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {[...Array(10)].map((_, i) => <ProductSkeleton key={i} />)}
            </div>
            :
            finalResult.length > 0
              ?
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {
                  finalResult?.map(product => {
                    let isInCart = cartItems.find(carProduct => carProduct.id === product.id)

                    return <ProductCard
                      key={product.id}
                      product={product}
                      isInCart={isInCart}
                    />
                  })
                }
              </div>
              :
              // Noo Products
              <div className="flex flex-col items-center py-24 gap-4 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-package-search text-white/15">
                <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"></path>
                <path d="m7.5 4.27 9 5.15"></path>
                <polyline points="3.29 7 12 12 20.71 7"></polyline>
                <line x1="12" x2="12" y1="22" y2="12"></line>
                <circle cx="18.5" cy="15.5" r="2.5"></circle>
                <path d="M20.27 17.27 22 19"></path>
              </svg>

              <div>
                <p className="font-heading font-bold text-xl text-white/50">
                  No products found
                </p>
                <p className="text-white/25 text-sm mt-1">
                  No results for "{searchQuery}"
                </p>
              </div>
              <button
                onClick={() => setSearchQuery('')}
                className="btn-ghost mt-2"
              >Clear Filters</button>
            </div>
        }
      </div>


      <Footer />

    </div>
  )
}

export default StorePage