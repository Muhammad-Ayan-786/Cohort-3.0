const Comp4 = ({ data }) => {
  console.log(data);

  return (
    <div className="relative">
      <span className="absolute -left-6.75 top-2 w-3 h-3 rounded-full bg-cyan-400 ring-4 ring-[#0B0E14] shadow-[0_0_14px_3px_rgba(34,211,238,0.55)]" />

      <div className="bg-cyan-400/5 border border-cyan-400/40 rounded-lg px-5 py-4 shadow-[0_0_24px_-8px_rgba(34,211,238,0.4)]">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-base font-semibold text-white">Comp4</h2>
          <span className="text-[10px] uppercase tracking-wider text-cyan-300 bg-cyan-400/10 px-2 py-0.5 rounded-full whitespace-nowrap">
            ✓ used here
          </span>
        </div>
        <p className="text-xs text-slate-500 mt-1 mb-3">inside Comp3</p>

        <div className="bg-black/40 rounded-md px-3 py-2 text-sm text-cyan-200 font-mono">
          {data}
        </div>
      </div>
    </div>
  )
}

export default Comp4