import { useAllProduct, useProductsByCategory } from '../../hooks/useProducts'
import Filter from '../components/Filter';
import ProductCard from "../components/ProductCard";
import ProductSkeleton from '../components/ProductSkeleton';

const ProductPage = () => {

  const { data, isPending, error, search, setSearch } = useAllProduct()
  const { data: categoriesData, category, setCategory } = useProductsByCategory()

  console.log(categoriesData)

  return (
    <div>

      <Filter search={search} setSearch={setSearch} category={category} setCategory={setCategory} />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {
          isPending ? (
            Array.from({ length: 8 }).map((_, index) => (
              <ProductSkeleton key={index} />
            ))
          ) : (
            categoriesData?.products.length ? (
              categoriesData?.products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : data?.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          )
        }
      </div>


    </div>
  )
}

export default ProductPage