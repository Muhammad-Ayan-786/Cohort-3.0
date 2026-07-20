import { Navigate } from 'react-router';

const ProtectRoutes = ({ children }) => {

  let isAdmin = true

  if (!isAdmin) {
    return <Navigate to={'/'} />
  }

  return children
}

export default ProtectRoutes