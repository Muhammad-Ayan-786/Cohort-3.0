import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center mb-8 px-8 py-4 bg-slate-800 rounded-lg shadow-lg border border-slate-700'>

      <h1 className='text-3xl font-bold bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent'>
        RouteHub
      </h1>

      <div className='flex gap-8'>
        <NavLink
          to={'/'}
          className={({ isActive }) => `px-4 py-2 rounded-lg transition-all duration-300 font-semibold 
          ${isActive ? 'bg-blue-500 text-white shadow-lg' : 'text-slate-300 hover:text-white hover:bg-slate-700'}`}
        >
          Home
        </NavLink>

        <NavLink
          to={'/about'}
          className={({ isActive }) => `px-4 py-2 rounded-lg transition-all duration-300 font-semibold
           ${isActive ? 'bg-blue-500 text-white shadow-lg' : 'text-slate-300 hover:text-white hover:bg-slate-700'}`}
        >
          About
        </NavLink>

        <NavLink
          to={'/contact'}
          className={({ isActive }) => `px-4 py-2 rounded-lg transition-all duration-300 font-semibold
          ${isActive ? 'bg-blue-500 text-white shadow-lg' : 'text-slate-300 hover:text-white hover:bg-slate-700'}`}
        >
          Contact
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar