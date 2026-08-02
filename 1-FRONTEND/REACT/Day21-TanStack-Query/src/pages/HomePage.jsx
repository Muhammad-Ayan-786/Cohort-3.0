import { useNavigate } from "react-router";

const HomePage = () => {

  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
      <h1 className="text-6xl font-extrabold text-zinc-900 tracking-tight mb-6">
        Welcome to <span className="text-yellow-500">SkyDart</span>
      </h1>
      <p className="text-xl text-zinc-600 max-w-2xl mb-10 leading-relaxed">
        Discover the best products curated just for you. Quality, style, and convenience delivered straight to your door.
      </p>

      <div className="flex gap-4">
        <button
          onClick={() => navigate("/main/shop")}
          className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-2xl font-bold transition shadow-lg hover:shadow-purple-500/20 cursor-pointer"
        >
          Start Shopping
        </button>

        <button
          onClick={() => navigate("/main/about")}
          className="px-8 py-4 bg-zinc-100 hover:bg-zinc-200 text-zinc-900 rounded-2xl font-bold transition cursor-pointer"
        >
          Learn More
        </button>
      </div>
    </div>
  )
}

export default HomePage