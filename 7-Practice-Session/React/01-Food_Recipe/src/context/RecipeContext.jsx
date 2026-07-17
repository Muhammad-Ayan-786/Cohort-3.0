import { createContext, useState } from "react";

export const recipeContext = createContext()

export const RecipeProvider = ({ children }) => {
  const [formData, setFormData] = useState(() => (
    JSON.parse(localStorage.getItem('recipesArr')) || []
  ))

  const [addToCart, setAddToCart] = useState([])
  const [searchQuery, setSearchQuery] = useState("")


  const filteredItems = (char = "") => {
    const query = char.trim().toLowerCase()

    if (!query) return formData

    return formData.filter((val) => {
      const recipeName = val?.recipeName?.toLowerCase() || ''
      const recipeChef = val?.chefName?.toLowerCase() || ''
      const recipeDescp = val?.description?.toLowerCase() || ''

      return (
        recipeName.includes(query) ||
        recipeChef.includes(query) ||
        recipeDescp.includes(query)
      )
    })
  }

  const removeFromCart = (id) => {
    setAddToCart(prev => (
      prev.filter(val => val._id !== id)
    ))
  }

  const incrementQuantity = (id) => {
    setAddToCart(prev => (
      prev.map(val => (
        val._id === id ? {
          ...val,
          quantity: val.quantity + 1,
          price: val.unitPrice * (val.quantity + 1)
        } : val
      ))
    ))
  }

  const decrementQuantity = (id) => {
    setAddToCart(prev => {
      let quantityCheck = prev.filter(item => {
        if (item._id !== id) return item

        return item.quantity > 1
      })

      return quantityCheck.map(val => (
        val._id === id ? {
          ...val,
          quantity: val.quantity - 1,
          price: val.unitPrice * (val.quantity - 1)
        } : val
      ))
    })
  }

  const clearCart = () => {
    setAddToCart([])
  }

  let contextValue = {
    formData, setFormData,
    addToCart, setAddToCart,
    searchQuery, setSearchQuery,
    filteredItems, removeFromCart,
    incrementQuantity, decrementQuantity,
    clearCart
  }

  return <recipeContext.Provider value={contextValue}>
    {children}
  </recipeContext.Provider>
}