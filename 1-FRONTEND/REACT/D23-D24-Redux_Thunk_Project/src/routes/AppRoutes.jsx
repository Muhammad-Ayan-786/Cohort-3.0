import { createBrowserRouter, RouterProvider } from "react-router"

import PublicProtected from "./protected/PublicProtected"
import MainProtected from "./protected/MainProtected"

import AuthLayout from "../app/layouts/AuthLayout"
import MainLayout from "../app/layouts/MainLayout"

import LoginPage from "../features/auth/ui/pages/LoginPage"
import RegisterPage from "../features/auth/ui/pages/RegisterPage"

import HomePage from "../shared/ui/pages/HomePage"
import AboutPage from "../shared/ui/pages/AboutPage"
import ProductPage from "../features/products/ui/pages/ProductPage"
import CartPage from "../features/cart/ui/pages/CartPage"
import OrderPage from "../features/orders/ui/pages/OrderPage"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { hydrateUserAction } from "../features/auth/state/authAction"


const AppRoutes = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    (async () => {
      try {
        dispatch(hydrateUserAction())

      } catch (error) {
        console.log("Error in hydration ...", error)
      }
    })()
  }, [])

  const router = createBrowserRouter([
    { // * Public Routes
      path: '/',
      element: <PublicProtected />,
      children: [
        {
          path: '/',
          element: <AuthLayout />,
          children: [
            { path: '', element: <LoginPage /> },
            { path: 'register', element: <RegisterPage /> }
          ]
        }
      ]
    },
    { // * Main Routes
      path: '/main',
      element: <MainProtected />,
      children: [
        {
          path: '',
          element: <MainLayout />,
          children: [
            { path: '', element: <HomePage /> },
            { path: 'products', element: <ProductPage /> },
            { path: 'cart', element: <CartPage /> },
            { path: 'orders', element: <OrderPage /> },
            { path: 'about', element: <AboutPage /> },
          ]
        }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default AppRoutes