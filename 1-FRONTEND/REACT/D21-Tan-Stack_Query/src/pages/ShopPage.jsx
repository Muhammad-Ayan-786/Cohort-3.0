import { useState } from "react";
import Filters from "../components/Filters";
import ProductCard from "../components/ProductCard";
import ProductCardSkeleton from "../components/ProductCardSkeleton";
import { useProductsApi } from "../hooks/useProductsApi";

const ShopPage = () => {

  const [searchParams, setSearchParams] = useState('')

  const { data, isPending, error, filteredData } = useProductsApi(searchParams);

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-6">
        <div className="bg-red-50 text-red-600 p-6 rounded-2xl border border-red-200 max-w-md w-full shadow-sm">
          <h2 className="text-xl font-bold mb-2">Oops! Something went wrong</h2>
          <p className="text-sm opacity-90">{error.message}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-6 px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition font-medium"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }


  return (

    <div className="flex flex-col gap-6">
      <Filters setSearchParams={setSearchParams} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {
          isPending ? (
            // If loading
            Array.from({ length: 8 }).map((_, index) => <ProductCardSkeleton key={index} />)
          ) : (
            filteredData ?
              (
                filteredData.length === 0 ? (
                  // No results
                  <div className="col-span-full flex flex-col items-center justify-center py-20 text-center">
                    <div className="bg-zinc-50 border border-zinc-200 p-8 rounded-3xl max-w-sm w-full">
                      <div className="text-4xl mb-4">🔍</div>
                      <h2 className="text-xl font-bold text-zinc-900 mb-2">No products found</h2>
                      <p className="text-zinc-500 text-sm">We couldn't find any items matching your search criteria. Try a different term.</p>
                    </div>
                  </div>
                ) : (
                  // If search results
                  filteredData.map((product) => <ProductCard key={product.id} product={product} />)
                )
              )
              :
              // If no search
              data.map((product) => <ProductCard key={product.id} product={product} />)
          )
        }
      </div>

    </div>

  )
}

export default ShopPage