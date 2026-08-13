import { useInfiniteQuery } from "@tanstack/react-query"
import { getInfiniteScrollProducts } from "./apis/productsApi"
import ProductCard from "./components/ProductCard"

const TansStackInfinite = () => {

  let limit = 40

  let { data, isPending, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ['products'],
    queryFn: ({ pageParam }) => getInfiniteScrollProducts(limit, pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPage) => {

      // console.log("Last Page ->", lastPage);
      // console.log("All Page ->", allPage);

      let loadedData = allPage.length * limit

      // console.log("Loaded Data ->", loadedData);

      if (loadedData < lastPage.total) return loadedData

      return undefined
    }
  })

  if (isPending) return <div>Loading...</div>

  // console.log("Data ->", data);

  let allProducts = data?.pages?.flatMap(val => val.products) ?? []

  // console.log("All Products ->", allProducts);


  return (
    <div className="flex p-5 flex-col gap-6 items-center">
      <div className="grid w-full p-4 grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {
          allProducts.map(val => (
            <ProductCard key={val.id} product={val} />
          ))
        }

      </div>
      <div className="flex items-center justify-center gap-2">
        {
          hasNextPage && (
            <button onClick={() => fetchNextPage()} className="px-4 py-2 bg-cyan-600 text-white rounded-md cursor-pointer active:scale-95">
              {isFetchingNextPage ? "Loading..." : "Load More"}
            </button>
          )
        }
      </div>
    </div>
  )
}

export default TansStackInfinite 