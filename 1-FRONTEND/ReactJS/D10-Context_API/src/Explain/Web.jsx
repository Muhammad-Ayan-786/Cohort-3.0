import { useState } from 'react'
import Comp1 from './Comp1'

const Web = () => {
  const [data, setData] = useState("I'm Data")

  return (
    <div className="min-h-screen bg-[#0B0E14] text-slate-200 p-6 md:p-10 font-mono">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <span className="inline-block text-[11px] tracking-widest uppercase text-cyan-400/70 mb-2">
            State origin
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_12px_2px_rgba(34,211,238,0.6)]" />
            Web
          </h1>
          <p className="text-sm text-slate-500 mt-2 pl-5">
            holds <code className="text-cyan-300/90 bg-cyan-400/10 px-1.5 py-0.5 rounded">data</code> in state — everything below just relays it
          </p>
        </div>

        <div className="relative pl-5 border-l-2 border-dashed border-slate-700/60 ml-1">
          <Comp1 data={data} />
        </div>
      </div>
    </div>
  )
}

export default Web