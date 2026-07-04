import { useState } from "react";

const Register = ({ setUsers, setToggle }) => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    image: '',
    description: ''
  }) // Single User Object

  // Input Handler
  const handleChange = (e) => {
    let { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  // Form Submit
  const handleSubmit = (e) => {
    e.preventDefault()
    setUsers(prev => [...prev, formData])
    setFormData({
      name: '',
      email: '',
      image: '',
      description: ''
    })
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.2),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(192,132,252,0.2),transparent_35%),linear-gradient(135deg,#f8fbff_0%,#eef2ff_50%,#fdf2f8_100%)] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 lg:flex-row lg:items-center">

        {/* Register */}
        <section className="flex-1 rounded-4xl border border-white/70 bg-slate-900/90 p-8 text-white shadow-[0_30px_80px_-25px_rgba(15,23,42,0.65)] backdrop-blur-xl sm:p-10">
          <p className="mb-4 inline-flex items-center rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3 py-1 text-sm font-medium text-cyan-200">
            Create your profile
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Register and shine with your community</h1>
          <p className="mt-4 max-w-xl text-lg leading-8 text-slate-300">
            Add your details with a smooth, premium experience and instantly appear in the user showcase.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
              <p className="text-sm text-slate-300">Fast Setup</p>
              <p className="mt-2 text-xl font-semibold">1 Min</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
              <p className="text-sm text-slate-300">Live Preview</p>
              <p className="mt-2 text-xl font-semibold">Instant</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
              <p className="text-sm text-slate-300">Elegant UI</p>
              <p className="mt-2 text-xl font-semibold">Premium</p>
            </div>
          </div>
        </section>

        {/* Form */}
        <section className="w-full max-w-xl rounded-4xl border border-slate-200/80 bg-white/80 p-6 shadow-[0_25px_70px_-25px_rgba(15,23,42,0.35)] backdrop-blur-xl sm:p-8">
          <div className="mb-6">
            <h2 className="text-3xl font-semibold text-slate-900">Register</h2>
            <p className="mt-2 text-sm text-slate-500">Fill in the details below to join the featured list.</p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm font-medium text-slate-700 cursor-pointer">
                Name
                <input
                  required
                  value={formData.name}
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  autoComplete="off"
                  onChange={handleChange}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 outline-none transition focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-100"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium text-slate-700 cursor-pointer">
                Email
                <input
                  required
                  value={formData.email}
                  name="email"
                  type="text"
                  placeholder="Enter your email"
                  autoComplete="off"
                  onChange={handleChange}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 outline-none transition focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-100"
                />
              </label>
            </div>

            <label className="flex flex-col gap-2 text-sm font-medium text-slate-700 cursor-pointer">
              Image URL
              <input
                required
                value={formData.image}
                name="image"
                type="url"
                placeholder="Paste image link"
                onChange={handleChange}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 outline-none transition focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-100"
              />
            </label>

            <label className="flex flex-col gap-2 text-sm font-medium text-slate-700 cursor-pointer">
              Description
              <input
                required
                value={formData.description}
                name="description"
                type="text"
                placeholder="Tell us a bit about yourself"
                autoComplete="off"
                onChange={handleChange}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 outline-none transition focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-100"
              />
            </label>

            <button className="rounded-2xl bg-linear-to-r from-sky-500 to-violet-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition duration-300 hover:scale-[1.01] hover:shadow-xl hover:shadow-violet-500/20">
              Create Account
            </button>
          </form>

          <p className="mt-6 text-sm text-slate-500">
            View Users{' '}
            <span
              onClick={() => setToggle(prev => !prev)}
              className="cursor-pointer font-semibold text-sky-600 transition hover:text-sky-700"
            >
              Users Cards
            </span>
          </p>
        </section>
      </div>
    </main>
  );
};

export default Register;


/*
If input has value, it's called "Controlled Input"
If input doesn't have value, it's called "Uncontrolled Input"

Two Ways Binding:
It simply means when the input is connected with react
state, and receiving state value in it's value attribute
*/