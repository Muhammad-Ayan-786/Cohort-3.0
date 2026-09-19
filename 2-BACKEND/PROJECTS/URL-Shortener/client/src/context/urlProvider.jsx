import { createContext, useState } from "react";

export const UrlContext = createContext()

export const UrlContextProvider = ({ children }) => {

  const [newURL, setNewURL] = useState(null)
  const [links, setLinks] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)


  const value = {
    newURL, setNewURL,
    links, setLinks,
    isLoading, setIsLoading,
    error, setError
  }


  return (
    <UrlContext.Provider value={value}>
      {children}
    </UrlContext.Provider>
  )
}