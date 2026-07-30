import { createContext, useState } from "react";

export const CartStore = createContext()

export const CartContextProvider = ({ children }) => {

  const [isCartOpen, setIsCartOpen] = useState(false);

  const onOpen = () => (setIsCartOpen(true))
  const onClose = () => (setIsCartOpen(false))

  return <CartStore.Provider value={{ isCartOpen, onOpen, onClose }}>
    {children}
  </CartStore.Provider>
}