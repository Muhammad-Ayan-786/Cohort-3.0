import { useQuery } from "@tanstack/react-query"
import { getAllProductApi, getProductsByCategory, getProductsCategories } from "../api/productApis"
import { useEffect, useState } from "react"

export const useAllProduct = () => {
  const [search, setSearch] = useState(null)
  const [debounceSearch, setDebounceSearch] = useState(null)

  // Debouncing
  useEffect(() => {
    let timeout = setTimeout(() => {
      setDebounceSearch(search)
    }, 1000);

    return () => clearTimeout(timeout)
  }, [search])


  let { data, isPending, error } = useQuery({
    queryKey: ['products', debounceSearch], // This is like dependency arr
    queryFn: () => getAllProductApi(debounceSearch)
  })


  return {
    data, isPending, error,
    search, setSearch
  }
}

export const useAllCategories = () => {
  return useQuery({
    queryKey: ["AllCategories"],
    queryFn: getProductsCategories,
  });
};

export const useProductsByCategory = () => {
  const [category, setCategory] = useState(null)

  let { data, isPending, error } = useQuery({
    queryKey: ['productsByCategory', category], // This is like dependency arr
    queryFn: () => getProductsByCategory(category)
  })

  return {
    data, isPending, error,
    category, setCategory
  }
}