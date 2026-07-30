import { NavLink, useParams } from "react-router"
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Footer from "./Footer"
import Navbar from "./Navbar"
import SpecificProduct from "./SpecificProduct";
import RelatedProducts from "./RelatedProducts";
import { ProductStore } from "../context/ProductContext";

const ProductDetail = () => {

  const { id } = useParams()
  const [currentProduct, setCurrentProduct] = useState({})
  const [relatedProducts, setRelatedProducts] = useState([])

  const { cartItems } = useContext(ProductStore)

  const fetchSingleData = async (id) => {
    try {
      if (!id || id < 1) return

      const { data } = await axios.get(`https://dummyjson.com/products/${id}`)
      setCurrentProduct(data)

    } catch (error) {
      console.log("Error in API", error);
    }
  }

  const fetchRelatedData = async () => {
    try {
      if (!id || id < 1) return
      if (!currentProduct.category) return

      const { data: { products: data } } = await axios.get(
        `https://dummyjson.com/products/category/${currentProduct.category}`
      )

      setRelatedProducts(
        data.filter(product => product.id !== currentProduct.id)
      )

    } catch (error) {
      console.log("Error in API", error);
    }
  }

  useEffect(() => {
    fetchSingleData(id);
  }, [id])

  useEffect(() => {
    if (currentProduct.category) {
      fetchRelatedData();
    }
  }, [currentProduct.category])


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
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left" data-darkreader-inline-stroke="" style={{ "--darkreader-inline-stroke": "currentColor" }}>
              <path d="m12 19-7-7 7-7"></path>
              <path d="M19 12H5"></path>
            </svg>
            Product
          </NavLink>

          <span>/</span>
          <span className="capitalize text-white/50">{currentProduct.category}</span>
          <span>/</span>
          <span className="text-white/70 clamp-1 max-w-50 truncate">{currentProduct.title}</span>
        </nav>

        <SpecificProduct product={currentProduct} />

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