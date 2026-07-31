import { NavLink, useParams } from "react-router"
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Footer from "./Footer"
import Navbar from "./Navbar"
import SpecificProduct from "./SpecificProduct";
import RelatedProducts from "./RelatedProducts";
import { DetailSkeleton } from "./DetailSkeleton";
import { ProductStore } from "../context/ProductContext";
import { ArrowLeft } from "lucide-react";

const ProductDetail = () => {

  const { id } = useParams()
  const [currentProduct, setCurrentProduct] = useState({})
  const [relatedProducts, setRelatedProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false);

  const { cartItems } = useContext(ProductStore)


  const fetchData = async (productId) => {
    setIsLoading(true)

    try {

      const { data: productData } = await axios.get(
        `https://dummyjson.com/products/${productId}`
      )
      setCurrentProduct(productData)

      const { data: { products: categoryProducts } } = await axios.get(
        `https://dummyjson.com/products/category/${productData.category}`
      )

      setRelatedProducts(
        categoryProducts.filter(p => p.id !== productData.id)
      )

    } catch (error) {
      console.log("Error fetching data", error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData(id);
  }, [id])



  return (
    <div>
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-white/30 font-body mb-8">
          <NavLink
            to={'/store'}
            className="hover:text-white flex items-center gap-1.5 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" strokeWidth={2} />
            Product
          </NavLink>

          <span>/</span>
          <span className="capitalize text-white/50">{currentProduct.category}</span>
          <span>/</span>
          <span className="text-white/70 clamp-1 max-w-50 truncate">{currentProduct.title}</span>
        </nav>

        {
          isLoading ?
            <DetailSkeleton />
            :
            <SpecificProduct product={currentProduct} />
        }

        {/* Related Products */}
        <section>
          <h2 className="font-heading font-bold text-2xl mb-6">Related Products</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {
              relatedProducts.map(product => {
                let isInCart = cartItems.find(carProduct => carProduct.id === product.id)

                return <RelatedProducts
                  key={product.id}
                  product={product}
                  isInCart={isInCart}
                />
              })
            }
          </div>
        </section>

      </div>


      <Footer />
    </div >
  )
}

export default ProductDetail