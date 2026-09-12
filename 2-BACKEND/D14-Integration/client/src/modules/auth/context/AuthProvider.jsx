import { createContext, useState } from "react";

export const AuthStore = createContext()

export const AuthContextProvider = ({ children }) => {

  const [user, setUser] = useState(null)
  const [accessToken, setAccessToken] = useState(null)

  const val = {
    user,
    setUser,
    accessToken,
    setAccessToken
  }

  return <AuthStore.Provider value={val}>
    {children}
  </AuthStore.Provider>
}