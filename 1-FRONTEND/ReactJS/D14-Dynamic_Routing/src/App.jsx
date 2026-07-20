import Navbar from "./components/Navbar"
import AppRoutes from "./routes/AppRoutes"

const App = () => {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(244,114,182,0.28),_transparent_32%),linear-gradient(135deg,_#111827_0%,_#1f2937_50%,_#111827_100%)] p-4 text-zinc-100 sm:p-6 lg:p-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4">
        <Navbar />

        <main className="rounded-[2rem] border border-white/10 bg-zinc-950/60 p-4 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-6 lg:p-8">
          <AppRoutes />
        </main>
      </div>
    </div>
  )
}

export default App