import { createBrowserRouter, RouterProvider } from "react-router"
import AuthLayout from "../Layout/AuthLayout"
import MainLayout from "../Layout/MainLayout"
import ArtistLayout from "../Layout/ArtistLayout"

import LoginPage from "../pages/LoginPage"
import RegisterPage from "../pages/RegisterPage"
import HomePage from "../pages/HomePage"
import FavrouitePage from "../pages/FavrouitePage"
import ArtistDashboardPage from "../pages/ArtistDashboardPage"

const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      { path: '', element: <LoginPage /> },
      { path: '/register', element: <RegisterPage /> },
    ]
  },
  {
    path: '/main',
    element: <MainLayout />,
    children: [
      { path: '', element: <HomePage /> },
      { path: 'favrouite', element: <FavrouitePage /> },
    ]
  },
  {
    path: '/artist',
    element: <ArtistLayout />,
    children: [
      { path: '', element: <ArtistDashboardPage /> },
    ]
  }
])

export default router