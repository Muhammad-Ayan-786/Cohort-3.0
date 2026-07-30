import axios from "axios";
import { createContext, useState } from "react";

export const ProductStore = createContext();

export const ProductProvider = ({ children }) => {

  const [productsData, setProductsData] = useState([])

  const fetchData = async () => {
    try {
      let { data } = await axios.get('https://fakestoreapi.com/products')
      setProductsData(data)

    } catch (error) {
      console.log('Error in API', error);
    }
  }

  return <ProductStore.Provider value={{ productsData, setProductsData, fetchData }}>
    {children}
  </ProductStore.Provider>
};