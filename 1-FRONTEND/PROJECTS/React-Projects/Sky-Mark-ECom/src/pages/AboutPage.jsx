import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {
  Zap,
  Package,
  Users,
  Star,
  Truck,
  ShieldCheck,
  Heart,
  Award,
  ArrowRight,
} from 'lucide-react'
import AboutStats from '../components/AboutStats'
import MeetMembers from '../components/MeetMembers'
import { membersData, statsData, valuesData } from '../data/DataForAbout'
import AboutValueCard from '../components/AboutValueCard'
import { NavLink } from 'react-router'


const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#090909] text-white flex flex-col">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl mx-auto px-6 py-16 w-full space-y-24">

        {/* Header Section */}
        <section className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
          {/* Logo Badge */}
          <div className="w-16 h-16 rounded-2xl bg-volt flex items-center justify-center shadow-lg shadow-volt/10">
            <Zap size={32} className="text-black fill-black" />
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-black tracking-tight">
            About <span className="text-volt">SkyMart</span>
          </h1>

          {/* Intro Description */}
          <p className="text-stone-400 text-lg leading-relaxed md:text-xl">
            SkyMart is a next-generation e-commerce platform built to make online
            shopping fast, fair, and enjoyable — for everyone.
          </p>
        </section>

        {/* Stats Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {
            statsData.map((stat, idx) => <AboutStats key={idx} stat={stat} />)
          }
        </section>

        {/* Our Story Section */}
        <section className="border border-stone-850/80 bg-[#111111]/40 rounded-[28px] p-8 md:p-12 max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl font-extrabold tracking-tight">Our Story</h2>
          <div className="space-y-6 text-stone-400 leading-relaxed text-[17px]">
            <p>
              SkyMart started in 2022 as a small side project — two engineers tired of
              bloated, slow e-commerce experiences. We asked ourselves: what if shopping
              online was actually enjoyable?
            </p>
            <p>
              Three years later, SkyMart serves over 50,000 customers across the country.
              We stock electronics, fashion, jewelry, and everyday essentials — all at
              prices that don't require a second mortgage.
            </p>
            <p>
              We're still the same team at heart: obsessed with speed, transparency, and
              making you feel good about every purchase you make here.
            </p>
          </div>
        </section>

        {/* What We Stand For Section */}
        <section className="space-y-10">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-center">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {
              valuesData.map((value, idx) => <AboutValueCard key={idx} value={value} />)
            }
          </div>
        </section>

        {/* Meet the Team Section */}
        <section className="space-y-10">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-center">
            Meet the Team
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {
              membersData.map((member, idx) => <MeetMembers key={idx} member={member} />)
            }
          </div>
        </section>

        {/* Ready to Shop Banner */}
        <section className="border border-stone-850/80 bg-[#111111]/40 rounded-[28px] p-10 md:p-12 text-center max-w-4xl mx-auto backdrop-blur-sm">
          <h2 className="text-3xl font-extrabold tracking-tight mb-2">Ready to shop?</h2>
          <p className="text-stone-500 text-[15px] mb-8 font-medium">
            Explore thousands of products at unbeatable prices.
          </p>
          <NavLink to={"/store"} className="inline-flex items-center gap-2 bg-volt text-black font-extrabold text-[15px] px-8 py-3.5 rounded-xl hover:bg-[#aee200] active:scale-[0.98] transition-all duration-200 cursor-pointer">
            Browse Products
            <ArrowRight size={18} strokeWidth={2.5} />
          </NavLink>
        </section>
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  )
}

export default AboutPage