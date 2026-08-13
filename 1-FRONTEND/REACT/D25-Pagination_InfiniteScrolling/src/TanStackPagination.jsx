import { keepPreviousData, useQuery } from "@tanstack/react-query"
import { getAppProducts } from "./apis/productsApi"
import { useState } from "react"
import ProductCard from "./components/ProductCard"

const TanStackPagination = () => {

  let limit = 10
  const [page, setPage] = useState(0)

  let { data, isLoading, isError, isPlaceholderData } = useQuery({
    queryKey: ['products', page],
    queryFn: () => getAppProducts(limit, page),
    placeholderData: keepPreviousData
  })

  if (isLoading) return <div className="flex justify-center items-center h-64 text-xl text-gray-500">Loading products...</div>
  if (isError) return <div className="flex justify-center items-center h-64 text-xl text-red-500">Something went wrong. Please try again later.</div>

  let totalPage = Math.ceil(data.total / limit)

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Products</h1>
      {/* Product Cards */}
      <div
        style={{ opacity: isPlaceholderData ? 0.3 : 1, transition: 'opacity 0.2s' }}
        className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-10"
      >
        {
          data?.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        }
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 mt-10 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <button
          disabled={page === 0}
          onClick={() => setPage(page - 1)}
          className="px-6 py-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:border-gray-300 transition-all disabled:opacity-50 disabled:cursor-not-allowed font-medium text-gray-700 hover:text-gray-900 cursor-pointer"
        >
          Previous
        </button>
        <span className="text-gray-600 font-medium px-4">
          Page <span className="font-bold text-gray-900">{page + 1}</span> of {totalPage}
        </span>
        <button
          disabled={page === totalPage - 1}
          onClick={() => setPage(page + 1)}
          className="px-6 py-2 bg-gray-900 text-white rounded-lg shadow-md hover:bg-gray-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-300 font-medium cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default TanStackPagination