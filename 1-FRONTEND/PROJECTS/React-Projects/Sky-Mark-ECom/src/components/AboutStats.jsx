const AboutStats = ({ stat }) => {
  return (
    <div className="flex flex-col items-center justify-center border border-stone-850/80 rounded-2xl p-6 bg-[#111111]/40 text-center backdrop-blur-sm">
      <stat.icon size={22} className="text-volt mb-3" />
      <span className="text-3xl font-black text-white">{stat.title}</span>
      <span className="text-stone-500 text-sm mt-1.5 font-medium">{stat.descp}</span>
    </div>
  )
}

export default AboutStats