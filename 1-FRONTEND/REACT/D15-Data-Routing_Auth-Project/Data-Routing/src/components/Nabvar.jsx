import { NavLink } from 'react-router'

const Nabvar = () => {
  return (
    <nav className='w-full p-4 flex justify-center items-center'>

      <div className='w-1/3 flex justify-between bg-amber-200 px-12 py-3 rounded-2xl'>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/about'}>About</NavLink>
        <NavLink to={'/services'}>Services</NavLink>
      </div>

    </nav>
  )
}

export default Nabvar