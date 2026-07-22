import { createBrowserRouter, RouterProvider } from "react-router"
import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {

  const router = createBrowserRouter([
    { // Auth Layout 
      path: '/',
      element: <AuthLayout />,
      children: [
        {
          path: '',
          element: <LoginPage />
        },
        {
          path: 'register',
          element: <RegisterPage />
        }
      ]
    },
    { // Main Layout
      path: '/main',
      element: <ProtectedRoute />,
      children: [
        {
          path: '',
          element: <MainLayout />
        }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default AppRoutes