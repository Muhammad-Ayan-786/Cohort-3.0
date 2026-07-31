import axios from "axios";
import { createContext, useState } from "react";

export const ProductStore = createContext()

export const ProductContextProvider = ({ children }) => {

  /* =============== All States =============== */

  const [productsArr, setProductsArr] = useState([])
  const [allCategories, setAllCategories] = useState([])
  const [cartItems, setCartItems] = useState(() => (
    JSON.parse(localStorage.getItem('cartItems')) || []
  ))

  const [searchQuery, setSearchQuery] = useState('')
  const [category, setCategory] = useState('all');
  const [sortOption, setSortOption] = useState('default');
  const [isLoading, setIsLoading] = useState(false);


  /* =============== Products Related Functions =============== */

  //* ALL PRODUCTS
  const fetchAllData = async () => {
    setIsLoading(true);
    try {
      const { data: { products } } = await axios.get('https://dummyjson.com/products?limit=93&skip=60')

      setProductsArr(products);

      const uniqueCategories = products.reduce((acc, product) => {
        if (!acc.includes(product.category)) {
          acc.push(product.category)
        }
        return acc
      }, [])
      setAllCategories(uniqueCategories);

    } catch (error) {
      console.log("Error in API", error);
    } finally {
      setIsLoading(false);
    }
  }


  //* Search By Query
  const searchByQuery = (char = '') => {
    const query = char.trim().toLowerCase()

    if (!query) return productsArr

    return productsArr.filter((val) => {
      const title = val?.title?.toLowerCase() || ''
      const category = val?.category?.toLowerCase() || ''
      const description = val?.description?.toLowerCase() || ''

      return (
        title.includes(query) ||
        category.includes(query) ||
        description.includes(query)
      )
    })
  }


  //* Filter By Category
  const selectedCategory = (products = productsArr, category = 'all') => {
    const selectedCategory = category.trim().toLowerCase()

    if (selectedCategory === 'all') return products

    const filteredCategory = products.filter(
      (product) => product.category === selectedCategory
    )

    return filteredCategory
  }


  //* Cart State
  const sortProducts = (products = productsArr, sort = 'default') => {
    if (sort === 'default') return products

    const copyProducts = [...products]

    const sortedProducts = copyProducts.sort((prev, next) => {
      if (sort === 'price-asc') return prev.price - next.price
      if (sort === 'price-desc') return next.price - prev.price
      if (sort === 'rating-desc') return next.rating - prev.rating
      if (sort === 'rating-asc') return prev.rating - next.rating
    })

    return sortedProducts
  }


  /* =============== Cart Related Functions =============== */

  //* Add to Cart
  const addToCart = (addProduct) => {
    const cartProduct = [...cartItems, { ...addProduct, quantity: 1, unitPrice: addProduct.price }]

    setCartItems(cartProduct)
    localStorage.setItem('cartItems', JSON.stringify(cartProduct))
  }

  //* Remove from Cart
  const removeFromCart = (productId) => {
    const cartProduct = cartItems.filter((val) => val.id !== productId)

    setCartItems(cartProduct)
    localStorage.setItem('cartItems', JSON.stringify(cartProduct))
  }

  //* Clear Cart
  const clearCart = () => {
    setCartItems([])
    localStorage.setItem('cartItems', JSON.stringify([]))
  }

  //* Increment Quantity
  const incrementQuantity = (product) => {

    const updatedPriceQuantity = cartItems.map((val) => (
      val.id === product.id ? {
        ...val, quantity: val.quantity + 1,
        price: (val.unitPrice * (val.quantity + 1)).toFixed(2)
      } : val
    ))

    setCartItems(updatedPriceQuantity)
    localStorage.setItem('cartItems', JSON.stringify(updatedPriceQuantity))
  }

  //* Decrement Quantity
  const decrementQuantity = (product) => {

    const updatedPriceQuantity = cartItems
      .filter(item => {
        if (item.id !== product.id) return item

        return item.quantity > 1;
      })
      .map(item =>
        item.id === product.id
          ? {
            ...item,
            quantity: item.quantity - 1,
            price: (item.unitPrice * (item.quantity - 1)).toFixed(2),
          }
          : item
      );

    setCartItems(updatedPriceQuantity);
    localStorage.setItem('cartItems', JSON.stringify(updatedPriceQuantity));
  }


  let productValues = {
    /* ---------------------- Products ---------------------- */
    productsArr, setProductsArr,      // All Products
    allCategories, setAllCategories,  // All Categories

    searchQuery, setSearchQuery,      // Query
    category, setCategory,            // Category
    sortOption, setSortOption,        // Sort

    fetchAllData,                     // Get all products (API)

    searchByQuery,                    // Search products by query
    selectedCategory,                 // Filter by category
    sortProducts,                      // Sort products by option

    /* ---------------------- Cart ---------------------- */
    cartItems, setCartItems,          // All Cart Items
    addToCart,                        // Add to Cart
    removeFromCart,                   // Remove from Cart
    clearCart,                        // Clear Cart
    incrementQuantity,                // Increment Quantity
    decrementQuantity,                // Decrement Quantity
  }

  return <ProductStore.Provider value={productValues}>
    {children}
  </ProductStore.Provider>
}