import { createContext, useState } from "react";

export const AuthStore = createContext()

export const AuthContextProvider = ({ children }) => {

  const [registeredUsers, setRegisteredUsers] = useState(() => (
    JSON.parse(localStorage.getItem('registeredUsers')) || []
  ))

  const [loggedInUser, setLoggedInUser] = useState(() => (
    JSON.parse(localStorage.getItem('loggedInUser'))
  ))

  const value = {
    registeredUsers, setRegisteredUsers,
    loggedInUser, setLoggedInUser
  }

  return <AuthStore.Provider value={value}>
    {children}
  </AuthStore.Provider>
}