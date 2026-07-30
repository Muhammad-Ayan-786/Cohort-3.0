import { Route, Routes } from "react-router"
import Home from "../pages/Home"
import About from "../pages/About"
import Contacct from "../pages/Contact"
import Detail from "../components/Detail"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="detail" element={<Detail />} />  {/* No need to give '/' to nested routes */}
      </Route>
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contacct />} />
    </Routes>
  )
}

export default AppRoutes