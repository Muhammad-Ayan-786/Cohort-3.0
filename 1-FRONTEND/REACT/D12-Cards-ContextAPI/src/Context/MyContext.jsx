import { createContext, useState } from "react";

export const MyStore = createContext()

export const ContextProvider = ({ children }) => {

  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])

  const incrementQuantity = (id) => {
    setCartItems(prev => (
      prev.map(val => (
        val.id === id ? { ...val, quantity: val.quantity + 1 } : val
      ))
    ))
  }

  const decrementQuantity = (id) => {
    setCartItems(prev => {
      let greaterQuantity = prev.filter(item => {
        if (item.id !== id) return item

        return item.quantity > 1
      })

      return greaterQuantity.map(val => (
        val.id === id ? { ...val, quantity: val.quantity - 1 } : val
      ))
    })
  }

  const providedData = {
    isCartOpen, setIsCartOpen,
    cartItems, setCartItems,
    incrementQuantity, decrementQuantity
  }

  return <MyStore.Provider value={providedData}>
    {children}
  </MyStore.Provider>
}