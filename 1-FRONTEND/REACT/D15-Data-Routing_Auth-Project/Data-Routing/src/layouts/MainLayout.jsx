import { Outlet } from "react-router"
import Nabvar from "../components/Nabvar"

const MainLayout = () => {
  return (
    <div>

      <Nabvar />

      <Outlet />

    </div>
  )
}

export default MainLayout