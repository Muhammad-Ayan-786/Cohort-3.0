import { Outlet, useNavigate } from 'react-router'

const Home = () => {

  const navigate = useNavigate()

  return (
    <div className='min-h-[calc(100vh-180px)] flex flex-col items-center justify-center'>
      <div className='bg-linear-to-br from-slate-800 to-slate-700 rounded-2xl shadow-2xl p-12 max-w-md w-full border border-slate-600'>
        <h1 className='text-5xl font-bold text-center mb-6 bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent'>
          Home
        </h1>
        <p className='text-slate-300 text-center mb-8 text-lg'>
          Welcome to our routing demo. Explore the details section to learn more!
        </p>
        <button
          onClick={() => navigate('/detail')}
          className='w-full bg-linear-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg'
        >Go to Detail</button>
      </div>

      <Outlet /> {/* Outlet is used to display nested routes' content */}
    </div>
  )
}

export default Home