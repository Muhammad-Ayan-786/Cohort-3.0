import { useContext } from "react";
import { AuthStore } from "../context/AuthContext";
import { Navigate } from "react-router";

const AuthProtect = ({ children }) => {
  const { currentUser } = useContext(AuthStore)

  if (!currentUser) {
    return <Navigate to="/login" replace />
  }

  return children
}

export default AuthProtect