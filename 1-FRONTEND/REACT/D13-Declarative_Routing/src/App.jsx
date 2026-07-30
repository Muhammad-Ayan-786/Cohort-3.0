import Navbar from './components/Navbar'
import AppRoutes from './routes/AppRoutes'

const App = () => {
  return (
    <div className='w-screen min-h-screen text-white p-8 bg-slate-900 '>

      <Navbar />

      <AppRoutes />

    </div>
  )
}

export default App