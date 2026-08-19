import axios from 'axios'
import { useEffect, useState } from 'react'
import type { Product } from './types'
import ProductCard from './components/ProductCard'

type Props = {}

const App = (props: Props) => {

  const [productsData, setProductsData] = useState<Product[]>([])


  let getData = async () => {
    let res = await axios.get('https://fakestoreapi.com/products')
    // console.log(res.data);
    setProductsData(res.data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>

      {
        productsData.map(val => <ProductCard key={val.id} product={val} />)
      }

    </div>
  )
}

export default App