import { useContext, useEffect } from 'react'
import { AuthStore } from '../context/AuthProvider'
import useApi from '../../shared/useApi'
import { useNavigate } from 'react-router'

const ProfilePage = () => {
  const { user, setUser, setAccessToken, accessToken } = useContext(AuthStore)
  const api = useApi()

  const navigate = useNavigate()

  const displayName = user?.name || 'Guest user'
  const email = user?.email || 'No email connected'
  const initials = displayName
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  const handleSignOut = () => {
    setUser(null)
    setAccessToken(null)
    navigate('/')
  }

  const fetchProfileUser = async () => {
    try {

      const response = await api.get('/auth/me')

      setUser(response.data.data.user)

    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    fetchProfileUser()
  }, [])


  return (
    <main className="min-h-screen overflow-hidden bg-[#f3f0e9] text-[#17211f]">
      <div className="mx-auto max-w-7xl px-5 py-6 sm:px-8 lg:px-12 lg:py-10">
        <nav className="flex items-center justify-between border-b border-[#17211f]/15 pb-6">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f06d4f] text-sm font-black text-white">
              AC
            </span>
            <span className="text-sm font-bold uppercase tracking-[0.22em]">Account center</span>
          </div>
          <button
            className="rounded-full border border-[#17211f]/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] transition cursor-pointer hover:border-[#f06d4f] hover:text-[#d85236] focus:outline-none focus:ring-2 focus:ring-[#f06d4f] focus:ring-offset-2"
            onClick={handleSignOut}
            type="button"
          >
            Sign out
          </button>
        </nav>

        <section className="grid gap-10 pb-16 pt-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:pt-20">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#d85236]">Your space / 01</p>
            <h1 className="max-w-3xl text-5xl font-black leading-[0.92] tracking-[-0.06em] sm:text-7xl lg:text-8xl">
              Make your
              <span className="block text-[#d85236]">mark.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#17211f]/65">
              A calm place to manage your identity, preferences, and the details that keep your account moving.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-4xl bg-[#17211f] p-7 text-[#f3f0e9] shadow-2xl shadow-[#17211f]/20 sm:p-9">
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full border-20 border-[#f06d4f]/80" />
            <p className="relative text-xs font-bold uppercase tracking-[0.25em] text-[#f06d4f]">Profile status</p>
            <div className="relative mt-10 flex items-end justify-between">
              <span className="text-6xl font-black tracking-[-0.08em]">75%</span>
              <span className="pb-2 text-sm text-[#f3f0e9]/60">complete</span>
            </div>
            <div className="relative mt-5 h-2 overflow-hidden rounded-full bg-white/15">
              <div className="h-full w-3/4 rounded-full bg-[#f06d4f]" />
            </div>
            <p className="relative mt-5 text-sm leading-6 text-[#f3f0e9]/60">Add a profile photo to finish your setup.</p>
          </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-4xl bg-[#f06d4f] p-7 text-white sm:p-9">
            <div className="flex items-start justify-between">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-white/30 bg-white text-3xl font-black text-[#d85236]">
                {initials || 'GU'}
              </div>
              <span className="rounded-full bg-[#17211f]/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.15em]">Active</span>
            </div>
            <h2 className="mt-12 text-3xl font-black tracking-[-0.04em]">{displayName}</h2>
            <p className="mt-2 break-all text-white/75">{email}</p>
            <div className="mt-10 flex items-center justify-between border-t border-white/25 pt-5 text-xs font-bold uppercase tracking-[0.15em]">
              <span>Member</span>
              <span>Since today</span>
            </div>
          </div>

          <div className="rounded-4xl border border-[#17211f]/12 bg-white/55 p-7 sm:p-9">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d85236]">Personal details</p>
                <h2 className="mt-3 text-2xl font-black tracking-[-0.04em]">Account information</h2>
              </div>
              <span className="hidden h-10 w-10 items-center justify-center rounded-full bg-[#dce9e2] text-lg sm:flex">+</span>
            </div>

            <div className="mt-10 divide-y divide-[#17211f]/10">
              <div className="flex flex-col gap-2 py-5 first:pt-0 sm:flex-row sm:items-center sm:justify-between">
                <span className="text-sm font-semibold text-[#17211f]/50">Full name</span>
                <span className="font-bold sm:text-right">{displayName}</span>
              </div>
              <div className="flex flex-col gap-2 py-5 sm:flex-row sm:items-center sm:justify-between">
                <span className="text-sm font-semibold text-[#17211f]/50">Email address</span>
                <span className="break-all font-bold sm:text-right">{email}</span>
              </div>
              <div className="flex flex-col gap-2 py-5 sm:flex-row sm:items-center sm:justify-between">
                <span className="text-sm font-semibold text-[#17211f]/50">Account access</span>
                <span className="font-bold text-[#2e8060]">Verified and secure</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-5 grid gap-5 sm:grid-cols-3">
          <div className="bg-[#dce9e2] p-6 sm:p-7">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#17211f]/50">01 / Identity</p>
            <p className="mt-12 text-xl font-black">Looking good.</p>
            <p className="mt-2 text-sm leading-6 text-[#17211f]/60">Your personal details are up to date.</p>
          </div>
          <div className="bg-[#17211f] p-6 text-[#f3f0e9] sm:p-7">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f06d4f]">02 / Security</p>
            <p className="mt-12 text-xl font-black">Protected.</p>
            <p className="mt-2 text-sm leading-6 text-white/55">Your session is secured with token access.</p>
          </div>
          <div className="bg-[#e8d7b9] p-6 sm:p-7">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#17211f]/50">03 / Next move</p>
            <p className="mt-12 text-xl font-black">Add a photo.</p>
            <p className="mt-2 text-sm leading-6 text-[#17211f]/60">Give your account a little more personality.</p>
          </div>
        </section>
      </div>
    </main>
  )
}

export default ProfilePage