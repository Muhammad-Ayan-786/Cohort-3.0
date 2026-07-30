const MeetMembers = ({ member }) => {
  return (
    <div className="flex flex-col items-center border border-stone-850/80 bg-[#111111]/40 rounded-3xl p-6 backdrop-blur-sm text-center">
      <div className={`w-14 h-14 rounded-2xl ${member.boxColor} flex items-center justify-center text-black text-xl font-black mb-4 select-none`}>
        {member.name.charAt(0).toUpperCase()}
      </div>
      <h3 className="font-bold text-[16px] text-white">{member.name}</h3>
      <span className="text-stone-500 text-xs mt-1">{member.role}</span>
    </div>)
}

export default MeetMembers