import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'

const AppRoutes = () => {

  /*
    createBrowserRouter() -> <BrowserRouter></BrowserRouter>
    [] -> <Routes></Routes>
    {} -> <Route />
  */

  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [ // Don't give '/' to nested children route paths'
        {
          path: '', // Not giving any path will auto direct to parent's route.
          element: <Home />,
        },
        {
          path: '/about',
          element: <About />,
        },
        {
          path: '/services',
          element: <Services />,
        }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default AppRoutes