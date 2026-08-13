import axios from 'axios';
import { useEffect, useState } from 'react'
import ProductCard from './components/ProductCard';
import ProductSkeleton from './components/ProductSkeleton';

const App = () => {

  let limit = 10

  const [products, setProducts] = useState(null)
  const [page, setPage] = useState(0)

  const getAppProducts = async () => {
    try {
      const res = await axios.get(
        `https://dummyjson.com/products?limit=${limit}&skip=${page * limit}`
      )

      setProducts(res.data)

    } catch (error) {
      console.log("Error in API", error)
    }
  }

  useEffect(() => {
    getAppProducts()
  }, [page])


  let totalPage = Math.ceil(products?.total / limit)


  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center tracking-tight">Premium Collection</h1>
      {
        products === null ? (
          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {/* Product Card Skeleton */}
            {Array.from({ length: 8 }).map((_, i) => <ProductSkeleton key={i} />)}
          </div>
        ) : (
          <div>
            {/* Product Cards */}
            <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-10">
              {
                products?.products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))
              }
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-6 mt-10">
              <button
                disabled={page === 0}
                onClick={() => setPage(page - 1)}
                className="px-6 py-2 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed font-medium text-gray-700 cursor-pointer"
              >
                Previous
              </button>
              <p className="text-gray-600 font-medium">Page {page + 1} of {totalPage}</p>
              <button
                disabled={page === totalPage - 1}
                onClick={() => setPage(page + 1)}
                className="px-6 py-2 bg-gray-900 text-white rounded-full shadow-md hover:bg-black transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-400 font-medium cursor-pointer"
              >
                Next
              </button>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default App