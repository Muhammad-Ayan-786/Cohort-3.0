import Comp3 from './Comp3'

const Comp2 = ({ data }) => {
  return (
    <div className="relative pb-6">
      <span className="absolute -left-6.75 top-2 w-2.5 h-2.5 rounded-full bg-slate-600 ring-4 ring-[#0B0E14]" />

      <div className="bg-[#131826] border border-slate-800 rounded-lg px-5 py-4 opacity-90">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-base font-semibold text-slate-300">Comp2</h2>
          <span className="text-[10px] uppercase tracking-wider text-slate-600 bg-slate-800/60 px-2 py-0.5 rounded-full whitespace-nowrap">
            unused · passing ↓
          </span>
        </div>
        <p className="text-xs text-slate-600 mt-1">inside Comp1</p>
      </div>

      <div className="relative pl-5 border-l-2 border-dashed border-slate-700/40 ml-1 mt-4">
        <Comp3 data={data} />
      </div>
    </div>
  )
}

export default Comp2