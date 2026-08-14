import {
  Mail,
  Lock,
  Eye,
  Music4,
  ArrowRight,
} from "lucide-react";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-[#0b0b14] flex items-center justify-center p-8">
      <div className="w-full max-w-6xl rounded-3xl border border-white/10 bg-linear-to-br from-[#1d1945] via-[#16152f] to-[#101018] p-8">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ================= LEFT ================= */}
          <div className="flex justify-center">
            <div className="relative w-105 h-135 rounded-3xl bg-linear-to-b from-[#d8d8d8] to-[#bdbdbd] p-10 flex flex-col items-center justify-center overflow-hidden">

              <Music4 size={22} className="absolute top-8 right-8 text-white" />
              <Music4 size={24} className="absolute bottom-8 left-8 text-white" />

              {/* Album */}
              <div className="w-full h-56 rounded-2xl border border-white/20 bg-linear-to-br from-[#5148ff] to-[#2a256d] p-2 shadow-xl">
                <div className="w-full h-full rounded-xl border border-white/20 bg-[#2a2859] flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-linear-to-br from-[#bca8ff] to-[#8476ff]" />
                </div>
              </div>

              <h1 className="text-5xl font-black text-white mt-10">MusicHub</h1>

              <p className="text-center text-white/80 mt-4 text-lg leading-8">
                Experience high-fidelity sound
                <br />
                tailored to your soul.
              </p>
            </div>
          </div>

          {/* ================= RIGHT ================= */}

          <div className="flex justify-center">

            <div className="w-full max-w-md rounded-3xl bg-[#20202c]/90 border border-white/10 p-8 backdrop-blur-xl">

              <h2 className="text-4xl font-bold text-white">Welcome Back</h2>
              <p className="text-white/60 mt-2 mb-10">Sign in to continue your journey.</p>

              {/* Email */}
              <div className="mb-6">
                <label className="block text-xs tracking-widest text-white/70 font-semibold mb-3 uppercase">
                  Email Address
                </label>

                <div className="flex items-center bg-[#2b2b37] rounded-xl px-4 h-14 border border-white/10">
                  <Mail size={18} className="text-white/50" />

                  <input
                    type="email"
                    placeholder="name@example.com"
                    className="flex-1 bg-transparent px-3 outline-none text-white placeholder:text-white/35"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="mb-3">

                <div className="flex justify-between mb-3">

                  <label className="text-xs tracking-widest text-white/70 font-semibold uppercase">
                    Password
                  </label>

                </div>

                <div className="flex items-center bg-[#2b2b37] rounded-xl px-4 h-14 border border-white/10">

                  <Lock
                    size={18}
                    className="text-white/50"
                  />

                  <input
                    type="password"
                    placeholder="••••••••"
                    className="flex-1 bg-transparent px-3 outline-none text-white"
                  />

                  <Eye
                    size={18}
                    className="text-white/40 cursor-pointer"
                  />

                </div>

              </div>


              {/* Login */}

              <button className="w-full h-14 rounded-xl bg-linear-to-r from-cyan-400 to-sky-500 text-white font-semibold flex justify-center items-center gap-2 hover:scale-[1.02] duration-300 mt-8">

                Login

                <ArrowRight size={18} />

              </button>

              <p className="text-center text-white/50 mt-10 text-sm">

                Don't have an account?

                <button className="ml-1 text-white font-semibold hover:text-cyan-400">
                  Register
                </button>

              </p>

            </div>

          </div>

        </div>

      </div>
    </div>
  )
}

export default LoginPage