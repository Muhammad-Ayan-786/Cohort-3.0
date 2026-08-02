import { Outlet } from "react-router"
import Navbar from "../components/Navbar"

const MainLayout = () => {
  return (
    <div className="p-2 min-h-screen">
      <Navbar />
      <div className="p-4">
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout