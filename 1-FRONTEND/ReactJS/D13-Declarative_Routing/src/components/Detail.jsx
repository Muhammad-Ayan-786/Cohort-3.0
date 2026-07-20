import { useNavigate } from "react-router"

const Detail = () => {

  const navigate = useNavigate()

  return (
    <div className='mt-12 bg-linear-to-br from-slate-800 to-slate-700 rounded-2xl shadow-2xl p-12 max-w-md w-full border border-slate-600 text-center'>
      <h1 className='text-4xl font-bold mb-4 bg-linear-to-r from-green-400 to-blue-500 bg-clip-text text-transparent'>
        Detail
      </h1>
      <p className='text-slate-300 mb-8 text-lg leading-relaxed'>
        This is the detail page inside the Home. This demonstrates nested routing with React Router's Outlet component.
      </p>
      <button
        onClick={() => navigate('/')}
        className='w-full bg-linear-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg'
      >
        Go Back To Home
      </button>
    </div>
  )
}

export default Detail