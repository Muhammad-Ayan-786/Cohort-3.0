import { useState } from "react"

// Brute Force Approach For Input Handling
const BruteApprochForInputHandling = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <section className="max-w-md mx-auto mb-10 p-6 sm:p-8 rounded-2xl border border-rose-500/20 bg-slate-900/60">
      <div className="flex items-center gap-3 mb-1">
        <span className="inline-flex px-2.5 py-1 rounded-md text-xs font-mono font-semibold tracking-wider bg-rose-500/10 text-rose-400 border border-rose-500/20">v1</span>
        <h2 className="text-lg font-semibold text-slate-100">Brute Force</h2>
      </div>
      <p className="text-sm text-slate-500 mb-6">A separate useState + handler for every single field</p>

      <div className="space-y-3">
        <input onChange={(e) => {
          setName(e.target.value)
        }} type="text" placeholder='Name'
          className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500/40 focus:border-rose-500/60 transition-all duration-200" />
        <input onChange={(e) => {
          setEmail(e.target.value)
        }} type="text" placeholder='Email'
          className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500/40 focus:border-rose-500/60 transition-all duration-200" />
        <input onChange={(e) => {
          setPassword(e.target.value)
        }} type="text" placeholder='Password'
          className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500/40 focus:border-rose-500/60 transition-all duration-200" />
      </div>

      <div className="mt-6 rounded-xl bg-black/40 border border-slate-800/80 p-4 space-y-1.5">
        <h1 className="font-mono text-sm text-slate-400">Name is - <span className="text-emerald-400">{name}</span></h1>
        <h1 className="font-mono text-sm text-slate-400">Email is - <span className="text-emerald-400">{email}</span></h1>
        <h1 className="font-mono text-sm text-slate-400">Password is - <span className="text-emerald-400">{password}</span></h1>
      </div>
    </section>
  )
}

// Better Approach For Input Handling
const BetterApprochForInputHandling = () => {
  const [formData, setFormData] = useState({})

  return (
    <section className="max-w-md mx-auto mb-10 p-6 sm:p-8 rounded-2xl border border-amber-500/20 bg-slate-900/60">
      <div className="flex items-center gap-3 mb-1">
        <span className="inline-flex px-2.5 py-1 rounded-md text-xs font-mono font-semibold tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/20">v2</span>
        <h2 className="text-lg font-semibold text-slate-100">Better</h2>
      </div>
      <p className="text-sm text-slate-500 mb-6">One object, but still one inline handler per field</p>

      <div className="space-y-3">
        <input
          onChange={e => setFormData({ ...formData, name: e.target.value })}
          type="text" placeholder='Name'
          className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500/60 transition-all duration-200" />
        <input
          onChange={e => setFormData({ ...formData, email: e.target.value })}
          type="text" placeholder='Email'
          className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500/60 transition-all duration-200" />
        <input
          onChange={e => setFormData({ ...formData, password: e.target.value })}
          type="text" placeholder='Password'
          className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500/60 transition-all duration-200" />
      </div>

      <div className="mt-6 rounded-xl bg-black/40 border border-slate-800/80 p-4 space-y-1.5">
        <h1 className="font-mono text-sm text-slate-400">Name is - <span className="text-emerald-400">{formData.name}</span></h1>
        <h1 className="font-mono text-sm text-slate-400">Email is - <span className="text-emerald-400">{formData.email}</span></h1>
        <h1 className="font-mono text-sm text-slate-400">Password is - <span className="text-emerald-400">{formData.password}</span></h1>
      </div>
    </section>
  )
}

// Optimized Approach For Input Handling
const OptimizedApprochForInputHandling = () => {
  const [formData, setFormData] = useState({})

  const handleChange = (e) => {
    let { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  return (
    <section className="max-w-md mx-auto mb-10 p-6 sm:p-8 rounded-2xl border border-emerald-500/20 bg-slate-900/60">
      <div className="flex items-center gap-3 mb-1">
        <span className="inline-flex px-2.5 py-1 rounded-md text-xs font-mono font-semibold tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">v3</span>
        <h2 className="text-lg font-semibold text-slate-100">Optimized</h2>
      </div>
      <p className="text-sm text-slate-500 mb-6">One handler, driven entirely by the input's name attribute</p>

      <div className="space-y-3">
        <input onChange={handleChange} name="name" type="text" placeholder='Name'
          className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500/60 transition-all duration-200" />
        <input onChange={handleChange} name="email" type="text" placeholder='Email'
          className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500/60 transition-all duration-200" />
        <input onChange={handleChange} name="password" type="text" placeholder='Password'
          className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500/60 transition-all duration-200" />
      </div>

      <div className="mt-6 rounded-xl bg-black/40 border border-slate-800/80 p-4 space-y-1.5">
        <h1 className="font-mono text-sm text-slate-400">Name is - <span className="text-emerald-400">{formData.name}</span></h1>
        <h1 className="font-mono text-sm text-slate-400">Email is - <span className="text-emerald-400">{formData.email}</span></h1>
        <h1 className="font-mono text-sm text-slate-400">Password is - <span className="text-emerald-400">{formData.password}</span></h1>
      </div>
    </section>
  )
}

const App = () => {
  return (
    <main className="min-h-screen bg-slate-950 py-12 sm:py-16 px-4">
      <header className="max-w-md mx-auto mb-10 sm:mb-14">
        <p className="font-mono text-xs text-slate-500 tracking-widest uppercase mb-2">useState · form handling</p>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-2">Three ways to handle a form</h1>
        <p className="text-slate-500 text-sm leading-relaxed">
          Same three inputs, same result — each version below trades a little more repetition for a little more scale.
        </p>
      </header>

      <BruteApprochForInputHandling />
      <BetterApprochForInputHandling />
      <OptimizedApprochForInputHandling />
    </main>
  )
}

export default App

/*
There are 3 approches to handle form data :
1. Brute Force :
  The more inputs you have, the more state variables you need.

2. Better :
  Use object in state.

3. Optimized :
  Single change handler function and object in state
*/