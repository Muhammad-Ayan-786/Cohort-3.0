import { useContext } from "react"
import { Navigate, Outlet } from "react-router"
import { AuthStore } from "../context/AuthContext"

const ProtectedRoute = ({ children }) => {

  const { loggedInUser } = useContext(AuthStore)

  if (!loggedInUser) {
    return <Navigate to={'/'} />
  }

  return <Outlet />
}

export default ProtectedRoute