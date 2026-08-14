import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { User, AtSign, Mail, Lock } from 'lucide-react'
import { useContext, useEffect } from 'react'
import { AuthStore } from '../context/AuthContext'
import toast from 'react-hot-toast'

const RegisterPage = () => {

  const navigate = useNavigate()

  const { registerUser } = useContext(AuthStore)

  const { handleSubmit, register, formState: { errors }, reset, setValue, watch } = useForm()

  const role = watch('role')

  const submitHandler = (data) => {
    const response = registerUser(data)
    console.log(response);

    if (!response.success) {
      toast.error(response.message)
      reset()
      return
    }

    toast.success(response.message)
    navigate('/')
  }

  useEffect(() => {
    setValue('role', 'listener')
  }, [])

  return (
    <div className="h-full overflow-hidden bg-[#171717] text-white">
      <div className="relative flex h-full items-center justify-center px-4 py-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(122,68,255,0.25),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(122,68,255,0.12),transparent_26%)]" />

        <div className="relative w-full h-full rounded-[2.5rem] px-6 py-8 shadow-[0_30px_120px_rgba(0,0,0,0.65)] sm:px-10 sm:py-10">
          <div className="mx-auto flex max-w-md flex-col items-center text-center">
            <h1 className="text-6xl font-semibold tracking-tight text-[#cdb7ff] ">MusicHub</h1>
            <p className="mt-1 text-sm text-[#e1d6ff]/85">Join the sound revolution.</p>

            <form onSubmit={handleSubmit(submitHandler)} className="mt-8 w-full h-[80%] rounded-2xl bg-[#201c25]/95 px-4 py-9 shadow-[0_18px_45px_rgba(0,0,0,0.28)] ring-1 ring-white/5 sm:px-5 sm:py-6">

              {/* ROLES SECTION */}
              <div className="grid grid-cols-2 gap-3">
                {/* LISTENER Role */}
                <div
                  onClick={() => setValue('role', 'listener')}
                  className={`${role === 'listener' ? 'border-[#8a5cf6] bg-[#2b2730] shadow-[0_0_0_1px_rgba(138,92,246,0.18)]' : 'border-white/10 bg-[#19171b] text-[#c7bfda]'} rounded-xl active:scale-95 border px-4 py-5 text-center cursor-pointer`}
                >
                  <div className="text-2xl text-[#d5c2ff]">♪</div>
                  <div className="mt-1 text-[0.7rem] font-semibold tracking-[0.3em] text-[#d7d0df]">LISTENER</div>
                </div>

                {/* ARTIST Role */}
                <div
                  onClick={() => setValue('role', 'artist')}
                  className={`${role === 'artist' ? 'border-[#8a5cf6] bg-[#2b2730] shadow-[0_0_0_1px_rgba(138,92,246,0.18)]' : 'border-white/10 bg-[#19171b] text-[#c7bfda]'} rounded-xl active:scale-95 border px-4 py-5 text-center cursor-pointer`}
                >
                  <div className="text-2xl text-[#d9d1ea]">⌇</div>
                  <div className="mt-1 text-[0.7rem] font-semibold tracking-[0.3em] text-[#d7d0df]">ARTIST</div>
                </div>
              </div>


              <div className="mt-4 space-y-3 text-left">

                {/* ROLE Hidden input */}
                <input {...register('role')} type="hidden" />

                {/* NAME input */}
                <div className="flex items-center gap-3 rounded-full border border-white/10 bg-[#141316] px-4 py-2.5 shadow-inner shadow-black/30">
                  <User size={18} className="text-[#b7aec4]" />
                  <input
                    {...register('fullName')}
                    type="text"
                    placeholder="Full Name"
                    className="w-full bg-transparent text-sm text-[#e6dfef] placeholder:text-[#aba2b7] focus:outline-none"
                  />
                </div>

                {/* USERNAME input */}
                <div className="flex items-center gap-3 rounded-full border border-white/10 bg-[#141316] px-4 py-2.5 shadow-inner shadow-black/30">
                  <AtSign size={18} className="text-[#b7aec4]" />
                  <input
                    {...register('username')}
                    type="text"
                    placeholder="Username"
                    className="w-full bg-transparent text-sm text-[#e6dfef] placeholder:text-[#aba2b7] focus:outline-none"
                  />
                </div>

                {/* EMAIL input */}
                <div className="flex items-center gap-3 rounded-full border border-white/10 bg-[#141316] px-4 py-2.5 shadow-inner shadow-black/30">
                  <Mail size={18} className="text-[#b7aec4]" />
                  <input
                    {...register('email')}
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-transparent text-sm text-[#e6dfef] placeholder:text-[#aba2b7] focus:outline-none"
                  />
                </div>

                {/* PASSWORD input */}
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-1">
                  <div className="flex items-center gap-3 rounded-full border border-white/10 bg-[#141316] px-4 py-2.5 shadow-inner shadow-black/30">
                    <Lock size={18} className="text-[#b7aec4]" />
                    <input
                      {...register('password')}
                      type="password"
                      placeholder="Password"
                      className="w-full bg-transparent text-sm text-[#e6dfef] placeholder:text-[#aba2b7] focus:outline-none"
                    />
                  </div>

                </div>

              </div>

              {/* REGISTER BUTTON */}
              <button
                type="submit"
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[linear-gradient(90deg,#d8b8ff_0%,#7d3ff2_100%)] px-5 py-3 text-sm font-semibold text-[#2a1343] shadow-[0_12px_30px_rgba(125,63,242,0.4)] transition-transform duration-200 hover:-translate-y-0.5"
              >
                Register <span className="text-xl">→</span>
              </button>

              {/* LOGIN LINK */}
              <p className="mt-4 text-center text-sm text-[#c3bbce]">
                Already have an account?{" "}
                <span
                  onClick={() => navigate('/')}
                  className="font-semibold text-[#d8c8ff] cursor-pointer"
                >Login</span>
              </p>
            </form>

          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage