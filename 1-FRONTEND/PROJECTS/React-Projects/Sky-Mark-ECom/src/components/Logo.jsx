import { Zap } from 'lucide-react'

const Logo = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-2 font-bold text-2xl tracking-tight select-none ${className}`}>
      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#bdf600]">
        <Zap size={18} className="text-black fill-black" />
      </div>
      <span className="text-white">
        Sky<span className="text-[#bdf600]">Mart</span>
      </span>
    </div>
  )
}

export default Logo
