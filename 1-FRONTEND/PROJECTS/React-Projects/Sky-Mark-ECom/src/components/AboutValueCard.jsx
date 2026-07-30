const AboutValueCard = ({ value }) => {
  return (
    <div className="flex gap-4 border border-stone-850/80 bg-[#111111]/40 rounded-[22px] p-6 backdrop-blur-sm">
      <div className="w-11 h-11 rounded-xl bg-stone-900/80 border border-stone-850/80 flex items-center justify-center shrink-0">
        <value.icon size={20} className="text-volt" />
      </div>
      <div className="space-y-1.5">
        <h3 className="text-lg font-bold text-white">{value.title}</h3>
        <p className="text-stone-400 text-[15px] leading-relaxed">
          {value.description}
        </p>
      </div>
    </div>
  )
}

export default AboutValueCard