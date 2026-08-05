import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'

const PublicProtected = () => {

  const { user, isLoading } = useSelector(store => store.auth)

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-600 font-medium animate-pulse">Loading...</p>
        </div>
      </div>
    )
  }

  if (user) {
    return <Navigate to="/main" />
  }

  return <Outlet />
}

export default PublicProtected