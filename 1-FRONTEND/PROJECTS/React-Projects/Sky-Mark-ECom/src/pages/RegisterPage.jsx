import React, { useContext, useState } from 'react'
import { User, Mail, Lock, Eye, ArrowRight, EyeOff } from 'lucide-react'
import Logo from '../components/Logo'
import { NavLink } from 'react-router'
import { useForm } from 'react-hook-form'
import { AuthStore } from '../context/AuthContext'
import { nanoid } from 'nanoid'
import toast from 'react-hot-toast'

const RegisterPage = () => {

  const { setUsersArr, usersArr } = useContext(AuthStore)
  const [passType, setPassType] = useState('password')

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors }
  } = useForm({
    mode: 'onSubmit'
  })


  const formSubmit = (data) => {
    const { confirmPassword, ...dataWithoutConfirm } = data;

    let userData = [...usersArr, {
      ...dataWithoutConfirm,
      id: nanoid(),
      joinedAt: new Date().getTime(),
      avatar: (data.name.charAt(0)).toUpperCase()
    }]

    setUsersArr(userData)
    localStorage.setItem('userArr', JSON.stringify(userData))
    toast.success('Account created successfully! 🎉')

    reset()
  }

  // Handle empty validation toast trigger on form submit errors
  const onError = (errors) => {
    if (Object.keys(errors).length > 0) {
      // Check if any field failed due to required validation
      const hasRequiredError = Object.values(errors).some(err => err.type === 'required')
      if (hasRequiredError) {
        toast.error('Fill all fields')
      }
    }
  }


  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#090909] text-white p-6 font-body">
      {/* Centered Logo at the top */}
      <div className="mb-8 animate-fade-in-quick">
        <Logo />
      </div>

      {/* Register Card */}
      <div className="w-full max-w-110 bg-[#111111]/80 border border-white/8 rounded-4xl p-8 md:p-10 shadow-2xl backdrop-blur-md animate-fade-in-quick" style={{ animationDelay: '0.1s' }}>
        <h2 className="text-3xl font-extrabold tracking-tight text-white mb-2 font-heading">
          Create account
        </h2>
        <p className="text-stone-500 text-[14px] mb-8 font-body">
          Join SkyMart and start shopping
        </p>

        <form onSubmit={handleSubmit(formSubmit, onError)} className="space-y-4">

          {/* Full Name */}
          <div>
            <div className="relative flex items-center w-full">
              <span className="absolute left-4 text-stone-500">
                <User size={18} />
              </span>
              <input
                {...register("name", {
                  required: "Full name is required!",
                  minLength: {
                    value: 3,
                    message: "Full name must be at least 3 characters.",
                  },
                  maxLength: {
                    value: 50,
                    message: "Full name cannot exceed 50 characters.",
                  },
                  pattern: {
                    value: /^[A-Za-z]+(?:\s[A-Za-z]+)*$/,
                    message: "Full name must contain only letters and single spaces.",
                  },
                  validate: (value) =>
                    value.trim() !== "" || "Full name cannot be empty or contain only spaces.",
                })}
                type="text"
                placeholder="Full name"
                className="w-full bg-[#161616] text-white placeholder-stone-500 text-sm rounded-xl py-3.5 pl-12 pr-12 border border-stone-850 focus:border-volt/50 focus:ring-1 focus:ring-volt/10 focus:outline-none transition-all duration-200 font-body"
              />
            </div>
            {errors.name && (
              <span className="text-red-500 text-sm mt-1 block font-body">
                {errors.name.message}
              </span>
            )}
          </div>

          {/* Email */}
          <div>
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
            {errors.email && (
              <span className="text-red-500 text-sm mt-1 block font-body">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Password */}
          <div className="space-y-2">
            <div className="relative flex items-center w-full">
              <span className="absolute left-4 text-stone-500">
                <Lock size={18} />
              </span>
              <input
                {...register("password", {
                  required: "Password is required!",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters.",
                  },
                  maxLength: {
                    value: 20,
                    message: "Password cannot exceed 20 characters.",
                  },
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
                    message:
                      "Password must contain at least one uppercase letter, one lowercase letter, and one number.",
                  },
                  validate: (value) =>
                    value.trim() !== "" || "Password cannot be empty or contain only spaces.",
                })}
                type={passType}
                placeholder="Password (min 6 chars)"
                className="w-full bg-[#161616] text-white placeholder-stone-500 text-sm rounded-xl py-3.5 pl-12 pr-12 border border-stone-850 focus:border-volt/50 focus:ring-1 focus:ring-volt/10 focus:outline-none transition-all duration-200 font-body"
              />
              <button type="button" className="absolute right-4 text-stone-500 hover:text-stone-300 transition-colors cursor-pointer"
                onClick={() => passType === 'password' ? setPassType('text') : setPassType('password')}
              >
                {passType === 'password' ? <Eye size={18} /> : <EyeOff size={18} />}
              </button>
            </div>
            {errors.password && (
              <span className="text-red-500 text-sm mt-1 block font-body">
                {errors.password.message}
              </span>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <div className="relative flex items-center w-full">
              <span className="absolute left-4 text-stone-500">
                <Lock size={18} />
              </span>
              <input
                {...register("confirmPassword", {
                  required: "Confirm password is required!",
                  validate: (value) =>
                    value === watch("password") || "Passwords do not match.",
                })}
                type="password"
                placeholder="Confirm password"
                className="w-full bg-[#161616] text-white placeholder-stone-500 text-sm rounded-xl py-3.5 pl-12 pr-12 border border-stone-850 focus:border-volt/50 focus:ring-1 focus:ring-volt/10 focus:outline-none transition-all duration-200 font-body"
              />
            </div>
            {errors.confirmPassword && (
              <span className="text-red-500 text-sm mt-1 block font-body">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="flex items-center justify-center gap-2 w-full bg-volt text-black font-extrabold text-[15px] py-3.5 rounded-xl mt-6 hover:bg-[#aee200] active:scale-[0.98] transition-all duration-200 cursor-pointer font-body shadow-lg shadow-volt/5 hover:shadow-volt/15"
          >
            Create Account
            <ArrowRight size={18} strokeWidth={2.5} />
          </button>
        </form>

        <div className="mt-8 text-center text-stone-500 text-sm font-body">
          Already have an account?{' '}
          <NavLink to={"/login"} className="text-volt hover:underline font-semibold transition-colors">
            Sign in
          </NavLink>
        </div>
      </div>
    </main>
  )
}

export default RegisterPage