import { useQuery } from "@tanstack/react-query"
import { getProductsDataApi } from "../api/productsAPI"
import { useEffect, useState } from "react"

export const useProductsApi = (searchParams) => {

  const [filteredData, setFilteredData] = useState([])

  const { data, isPending, error } = useQuery({
    queryKey: ['products'], // This keeps the API separate. Always go in array []
    queryFn: getProductsDataApi, // The API function. Don't call it,
    staleTime: 5000, // This is cache, how long to keep the data in cache in ms. Also have 'Infinity' that will never cache
  })

  const searchedProducts = () => {
    const query = searchParams.toLowerCase()

    if (query === '') return setFilteredData(data)

    const filteredData = data.filter((product) => product.title.toLowerCase().includes(query))

    if (filteredData.length === 0) setFilteredData([])
    else setFilteredData(filteredData)
  }

  useEffect(() => {
    searchedProducts()
  }, [searchParams])


  return {
    data, isPending, error, filteredData
  }
}