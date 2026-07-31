import React, { useContext, useState } from 'react'
import { Link } from 'react-router'
import { Mail, Lock, Eye, ArrowRight, Star, EyeOff } from 'lucide-react'
import Logo from '../components/Logo'
import { useForm } from 'react-hook-form'
import { AuthStore } from '../context/AuthContext'
import toast from 'react-hot-toast'

const LoginPage = () => {

  const { loginUser } = useContext(AuthStore)
  const [passType, setPassType] = useState('password')
  const [inlineError, setInlineError] = useState('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    mode: 'onSubmit'
  })


  const formSubmit = (data) => {
    setInlineError('')
    const success = loginUser(data)
    if (success) {
      reset()
    } else {
      setInlineError('Invalid email or password')
    }
  }

  const onError = (errors) => {
    const firstError = errors.email?.message || errors.password?.message;
    if (firstError) {
      toast.error(firstError);
    }
  }


  return (
    <main className="flex min-h-screen bg-[#090909] text-white">

      {/* Left Promo Section */}
      <section className="hidden lg:flex flex-col justify-between w-1/2 p-16 select-none bg-linear-to-br from-[#0d0d0d] to-[#080808]">
        {/* Logo at the top */}
        <div className="animate-fade-in-quick">
          <Logo />
        </div>

        {/* Content in the middle */}
        <div className="max-w-xl my-auto animate-fade-in-quick" style={{ animationDelay: '0.1s' }}>
          <span className="text-volt text-xs font-black tracking-[0.2em] uppercase block mb-4 font-heading">
            Welcome back
          </span>
          <h1 className="text-[56px] leading-[1.1] font-extrabold tracking-tight mb-6 font-heading">
            Shop the future.
            <span className="text-volt block mt-1">Today.</span>
          </h1>
          <p className="text-stone-400 text-[17px] leading-relaxed max-w-md font-body">
            Thousands of products, lightning-fast delivery, and prices that make your wallet happy.
          </p>
        </div>

        {/* Stats at the bottom */}
        <div className="grid grid-cols-3 gap-5 max-w-lg animate-fade-in-quick" style={{ animationDelay: '0.2s' }}>
          <div className="flex flex-col items-center justify-center border border-white/5 rounded-2xl p-5 text-center bg-white/2 backdrop-blur-md">
            <span className="text-2xl font-black text-volt font-heading">20K+</span>
            <span className="text-stone-500 text-xs mt-1 font-medium font-body">Products</span>
          </div>
          <div className="flex flex-col items-center justify-center border border-white/5 rounded-2xl p-5 text-center bg-white/2 backdrop-blur-md">
            <span className="text-2xl font-black text-volt font-heading">50K+</span>
            <span className="text-stone-500 text-xs mt-1 font-medium font-body">Users</span>
          </div>
          <div className="flex flex-col items-center justify-center border border-white/5 rounded-2xl p-5 text-center bg-white/2 backdrop-blur-md">
            <div className="flex items-center justify-center gap-0.5">
              <span className="text-2xl font-black text-volt font-heading">4.9</span>
              <Star size={18} className="text-volt fill-volt" />
            </div>
            <span className="text-stone-500 text-xs mt-1 font-medium font-body">Rating</span>
          </div>
        </div>
      </section>

      {/* Beautiful Vertical Divider */}
      <div className="hidden lg:block w-px bg-linear-to-b from-transparent via-white/10 to-transparent self-stretch my-16 opacity-70" />

      {/* Right Login Form Section */}
      <section className="flex flex-col justify-center items-center flex-1 p-6 lg:p-12">

        {/* Logo visible only on mobile/tablet */}
        <div className="lg:hidden mb-8 self-start animate-fade-in-quick">
          <Logo />
        </div>

        {/* Login Form */}
        <div className="w-full max-w-110 bg-[#111111]/80 border border-white/8 rounded-4xl p-8 md:p-10 shadow-2xl backdrop-blur-md animate-fade-in-quick" style={{ animationDelay: '0.15s' }}>
          <h2 className="text-3xl font-extrabold tracking-tight text-white mb-2 font-heading">Sign in</h2>
          <p className="text-stone-500 text-[14px] mb-8 font-body">Enter your credentials to continue</p>

          <form onSubmit={handleSubmit(formSubmit, onError)} className="space-y-4">

            {/* Inline Error Alert */}
            {inlineError && (
              <div className="p-4 rounded-xl border border-red-500/25 bg-red-500/10 backdrop-blur-md text-red-400 text-sm font-semibold flex items-center gap-2 animate-fade-in-quick">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="shrink-0">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                {inlineError}
              </div>
            )}

            <div>
              {/* Email Input */}
              <div className="relative flex items-center w-full">
                <span className="absolute left-4 text-stone-500">
                  <Mail size={18} />
                </span>
                <input
                  {...register("email", {
                    required: "Email is required!",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please enter a valid email address.",
                    },
                    validate: (value) =>
                      value.trim() !== "" || "Email cannot be empty or contain only spaces.",
                  })}
                  type="email"
                  placeholder="Email address"
                  className="w-full bg-[#161616] text-white placeholder-stone-500 text-sm rounded-xl py-3.5 pl-12 pr-12 border border-stone-850 focus:border-volt/50 focus:ring-1 focus:ring-volt/10 focus:outline-none transition-all duration-200 font-body"
                />
              </div>
            </div>

            <div>
              {/* Password Input */}
              <div className="relative flex items-center w-full">
                <span className="absolute left-4 text-stone-500">
                  <Lock size={18} />
                </span>
                <input
                  {...register("password", {
                    required: "Password is required!",
                    validate: (value) =>
                      value.trim() !== "" || "Password cannot be empty or contain only spaces.",
                  })}
                  type={passType}
                  placeholder="Password"
                  className="w-full bg-[#161616] text-white placeholder-stone-500 text-sm rounded-xl py-3.5 pl-12 pr-12 border border-stone-850 focus:border-volt/50 focus:ring-1 focus:ring-volt/10 focus:outline-none transition-all duration-200 font-body"
                />
                <button type="button" className="absolute right-4 text-stone-500 hover:text-stone-300 transition-colors cursor-pointer"
                  onClick={() => passType === "password" ? setPassType("text") : setPassType("password")}>
                  {passType === "password" ? <Eye size={18} /> : <EyeOff size={18} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 w-full bg-volt text-black font-extrabold text-[15px] py-3.5 rounded-xl mt-6 hover:bg-[#aee200] active:scale-[0.98] transition-all duration-200 cursor-pointer font-body shadow-lg shadow-volt/5 hover:shadow-volt/15"
            >
              Sign in
              <ArrowRight size={18} strokeWidth={2.5} />
            </button>
          </form>

          <div className="mt-8 text-center text-stone-500 text-sm font-body">
            Don't have an account?{' '}
            <Link to="/register" className="text-volt hover:underline font-semibold transition-colors">
              Create one
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default LoginPage