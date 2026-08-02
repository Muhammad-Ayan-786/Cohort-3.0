import { NavLink, useNavigate } from "react-router";
import { LogOut } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../features/authSlice";
import toast from "react-hot-toast";

const Navbar = () => {

  const navigate = useNavigate();
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  const logout = () => {
    localStorage.removeItem("loggedInUser");
    dispatch(removeUser());
    toast.success("Logout successful! See you soon! 👋");
    navigate("/");
  }

  const linkClass = ({ isActive }) =>
    `text-sm font-semibold transition-all duration-200 ${isActive ? "text-yellow-500 underline underline-offset-4 -translate-y-0.5" : "text-zinc-600 hover:text-yellow-600"
    }`;

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white border-b border-zinc-200 sticky top-0 z-50">
      <h1 className="text-xl font-bold text-zinc-900 tracking-tight">SkyDart</h1>

      <div className="flex gap-8">
        <NavLink className={linkClass} to={"/main"} end>
          Home
        </NavLink>
        <NavLink className={linkClass} to={"/main/shop"}>
          Shop
        </NavLink>
        <NavLink className={linkClass} to={"/main/about"}>
          About
        </NavLink>
      </div>

      <div className="flex gap-6 items-center">
        <span className="text-sm font-medium text-zinc-700">
          Hi, <span className="text-yellow-500 font-bold">{user.name}</span>
        </span>
        <button
          onClick={logout}
          className="p-2 hover:bg-zinc-100 rounded-full transition cursor-pointer"
        >
          <LogOut className="text-zinc-600 hover:text-red-500" size={18} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;