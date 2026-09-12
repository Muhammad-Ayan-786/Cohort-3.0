import { useContext, useState } from 'react'
import { AuthStore } from '../context/AuthProvider'
import useApi from '../../shared/useApi'
import { useNavigate } from 'react-router'

const RegisterPage = () => {
  const { setAccessToken, setUser } = useContext(AuthStore)
  const api = useApi()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState('')

  const navigate = useNavigate()

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')
    setSuccess('')
    setIsSubmitting(true)

    try {
      const response = await api.post('/auth/register', formData)

      const { accessToken, user } = response.data.data

      setAccessToken(accessToken)
      setUser(user)

      setSuccess('Your account has been created successfully.')

      navigate('/profile')

    } catch (requestError) {
      console.log(requestError);
      console.log(requestError.response);

      setError(
        requestError.response?.data?.message ||
        'Unable to create your account. Please try again.'
      )
    } finally {
      setIsSubmitting(false)
      setFormData({
        name: '',
        email: '',
        password: ''
      })
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-12">
      <section className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl shadow-slate-200/60 sm:p-10">
        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
            Get started
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Create your account
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Enter your details to get started.
          </p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>

          {/* Name */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="name">
              Name
            </label>
            <input
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              id="name"
              name="name"
              value={formData.name}
              placeholder="Your name"
              required
              type="text"
              onChange={handleChange}
            />
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="email">
              Email
            </label>
            <input
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              id="email"
              name="email"
              value={formData.email}
              placeholder="you@example.com"
              required
              type="email"
              onChange={handleChange}
            />
          </div>

          {/* Password */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="password">
              Password
            </label>
            <input
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              id="password"
              name="password"
              value={formData.password}
              placeholder="Create a password"
              required
              type="password"
              onChange={handleChange}
            />
          </div>

          {error && (
            <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
              {error}
            </p>
          )}

          {success && (
            <p className="rounded-lg bg-emerald-50 px-4 py-3 text-sm text-emerald-700" role="status">
              {success}
            </p>
          )}

          <button
            className="w-full rounded-lg bg-indigo-600 px-4 py-3 font-semibold text-white transition cursor-pointer hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
            disabled={isSubmitting}
            type="submit"
          >
            {isSubmitting ? 'Creating account...' : 'Create account'}
          </button>

        </form>

      </section>
    </main>
  )
}

export default RegisterPage