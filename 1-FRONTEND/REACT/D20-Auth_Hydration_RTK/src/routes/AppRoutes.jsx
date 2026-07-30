import { createBrowserRouter, RouterProvider } from "react-router"

import PublicProtected from "../routes/protected/PublicProtected"
import MainProtected from "../routes/protected/MainProtected"

import AuthLayout from "../layouts/AuthLayout"
import LoginPage from "../pages/LoginPage"
import RegisterPage from "../pages/RegisterPage"

import MainLayout from "../layouts/MainLayout"
import HomePage from "../pages/HomePage"

import { useEffect } from "react"
import toast from "react-hot-toast"
import { useDispatch } from "react-redux"
import { addUser } from "../features/authSlice"


const AppRoutes = () => {

  const dispatch = useDispatch()

  const hydrateUser = () => {
    console.log("hydration processed...");

    let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (!loggedInUser) {
      toast.error("UnAuthorized user");
      return;
    }

    dispatch(addUser(loggedInUser))
  }

  useEffect(() => {
    hydrateUser()
  }, [])


  let router = createBrowserRouter([
    { //* Auth Routes
      path: '/',
      element: <PublicProtected />,
      children: [
        {
          element: <AuthLayout />,
          children: [
            {
              path: '',
              element: <LoginPage />
            },
            {
              path: '/register',
              element: <RegisterPage />
            }
          ]
        }
      ]
    },
    { //* Main Routes
      path: '/main',
      element: <MainProtected />,
      children: [
        {
          element: <MainLayout />,
          children: [
            {
              path: '',
              element: <HomePage />
            }
          ]
        }
      ]
    }
  ])

  return <RouterProvider router={router} />
}
export default AppRoutes