import React, { useContext, useState } from 'react'
import { Link } from 'react-router'
import { Mail, Lock, Eye, ArrowRight, Star, EyeOff } from 'lucide-react'
import Logo from '../components/Logo'
import { useForm } from 'react-hook-form'
import { AuthStore } from '../context/AuthContext'

const LoginPage = () => {

  const { loginUser } = useContext(AuthStore)
  const [passType, setPassType] = useState('password')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    mode: 'onSubmit'
  })


  const formSubmit = (data) => {
    loginUser(data)
    reset()
  }


  return (
    <main className="flex min-h-screen bg-[#090909] text-white">

      {/* Left Promo Section */}
      <section className="hidden lg:flex flex-col justify-between w-1/2 p-12 pr-6 select-none">
        {/* Logo at the top */}
        <div>
          <Logo />
        </div>

        {/* Content in the middle */}
        <div className="max-w-xl my-auto">
          <span className="text-volt text-xs font-black tracking-[0.2em] uppercase block mb-4">
            Welcome back
          </span>
          <h1 className="text-[52px] leading-[1.15] font-extrabold tracking-tight mb-6">
            Shop the future.
            <span className="text-volt block mt-1">Today.</span>
          </h1>
          <p className="text-stone-400 text-[17px] leading-relaxed max-w-md">
            Thousands of products, lightning-fast delivery, and prices that make your wallet happy.
          </p>
        </div>

        {/* Stats at the bottom */}
        <div className="grid grid-cols-3 gap-4 max-w-lg">
          <div className="flex flex-col items-center justify-center border border-stone-800/80 rounded-2xl p-5 text-center bg-transparent">
            <span className="text-2xl font-black text-volt">20K+</span>
            <span className="text-stone-500 text-xs mt-1 font-medium">Products</span>
          </div>
          <div className="flex flex-col items-center justify-center border border-stone-800/80 rounded-2xl p-5 text-center bg-transparent">
            <span className="text-2xl font-black text-volt">50K+</span>
            <span className="text-stone-500 text-xs mt-1 font-medium">Users</span>
          </div>
          <div className="flex flex-col items-center justify-center border border-stone-800/80 rounded-2xl p-5 text-center bg-transparent">
            <div className="flex items-center justify-center gap-0.5">
              <span className="text-2xl font-black text-volt">4.9</span>
              <Star size={18} className="text-volt fill-volt" />
            </div>
            <span className="text-stone-500 text-xs mt-1 font-medium">Rating</span>
          </div>
        </div>
      </section>

      {/* Vertical Splitter */}
      <div className="hidden lg:block w-px bg-stone-850 self-stretch my-8" />

      {/* Right Login Form Section */}
      <section className="flex flex-col justify-center items-center flex-1 p-6 lg:p-12">

        {/* Logo visible only on mobile/tablet */}
        <div className="lg:hidden mb-8 self-start">
          <Logo />
        </div>

        <div className="w-full max-w-105 bg-[#111111] border border-stone-900/60 rounded-[28px] p-8 md:p-10">
          <h2 className="text-3xl font-extrabold tracking-tight text-white mb-2">
            Sign in
          </h2>
          <p className="text-stone-500 text-[14px] mb-8">
            Enter your credentials to continue
          </p>

          <form onSubmit={handleSubmit(formSubmit)} className="space-y-4">
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
                  className="w-full bg-[#161616] text-white placeholder-stone-500 text-sm rounded-xl py-3.5 pl-12 pr-12 border border-stone-800/80 focus:border-stone-750 focus:outline-none transition-colors duration-200"
                />
              </div>
              {errors.email && (
                <span className="text-red-500 text-[12px] mt-1">
                  {errors.email.message}
                </span>
              )}
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
                  className="w-full bg-[#161616] text-white placeholder-stone-500 text-sm rounded-xl py-3.5 pl-12 pr-12 border border-stone-800/80 focus:border-stone-750 focus:outline-none transition-colors duration-200"
                />
                <button type="button" className="absolute right-4 text-stone-500 hover:text-stone-300 transition-colors cursor-pointer"
                  onClick={() => passType === "password" ? setPassType("text") : setPassType("password")}>
                  {passType === "password" ? <Eye size={18} /> : <EyeOff size={18} />}
                </button>
              </div>
              {errors.password && (
                <span className="text-red-500 text-[12px] mt-1">
                  {errors.password.message}
                </span>
              )}
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 w-full bg-volt text-black font-extrabold text-[15px] py-3.5 rounded-xl mt-6 hover:bg-[#aee200] active:scale-[0.98] transition-all duration-200 cursor-pointer"
            >
              Sign in
              <ArrowRight size={18} strokeWidth={2.5} />
            </button>
          </form>

          <div className="mt-8 text-center text-stone-500 text-sm">
            Don't have an account?{' '}
            <Link to="/register" className="text-volt hover:underline font-semibold">
              Create one
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default LoginPage