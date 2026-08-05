import { Outlet } from "react-router";
import Navbar from "../../shared/ui/components/Navbar";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-4">
      <Navbar />
      <div className="p-4">
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout