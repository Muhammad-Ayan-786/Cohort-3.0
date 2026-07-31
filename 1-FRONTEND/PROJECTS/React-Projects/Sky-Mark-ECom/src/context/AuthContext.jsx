import { createContext, useState } from "react";
import { useNavigate } from "react-router";

export const AuthStore = createContext();

export const AuthContextProvider = ({ children }) => {

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem('currentUser')) || null
  )

  const [usersArr, setUsersArr] = useState(() => (
    JSON.parse(localStorage.getItem('userArr')) || []
  ))

  const navigate = useNavigate()

  const loginUser = (user) => {
    const matchedUser = usersArr.find(val => (
      val.email === user.email &&
      val.password === user.password
    ))

    if (!matchedUser) {
      setCurrentUser(null)
      localStorage.setItem('currentUser', JSON.stringify(null))
      return false
    }

    setCurrentUser(matchedUser)
    localStorage.setItem('currentUser', JSON.stringify(matchedUser))

    navigate('/home')
    return true
  }

  let authValues = {
    currentUser, setCurrentUser,
    usersArr, setUsersArr,
    loginUser
  }

  return <AuthStore.Provider value={authValues}>
    {children}
  </AuthStore.Provider>
}