const Navbar = () => {
  return (
    <header className="w-full border-b border-[#E7E0D3]">
      <div className="mx-auto flex min-h-18 w-full flex-wrap items-center justify-between gap-4 px-5 py-6 max-w-262.5 sm:px-8 sm:py-7 lg:px-12 lg:py-6 xl:px-16">

        {/* LEFT SIDE */}
        <div className="flex min-w-0 items-center">

          {/* Brevity */}
          <span
            className="font-headline shrink-0 text-[25px] font-bold italic leading-none tracking-[-0.03em] text-(--accent-orange) sm:text-[27px]"
          >
            Brevity
          </span>

          {/* Slash */}
          <span className="ml-2 font-mono text-[12px] font-normal text-[#A8A29E]">
            /
          </span>

          {/* LINK */}
          <span className="ml-2 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-[#78716C] sm:text-[12px]">
            LINK
          </span>

          {/* Vertical Divider */}
          <span className="mx-4 h-5 w-px shrink-0 bg-[#DCD6CC]" />

          {/* Registry Active */}
          <div className="group flex min-h-8 items-center gap-2 rounded-full border border-[#CFC8BC] bg-[#F5F1E9] pl-2.5 pr-1.5 shadow-[0_2px_5px_rgba(41,37,34,0.06),inset_0_1px_0_rgba(255,255,255,0.7)] transition-all hover:-translate-y-px hover:border-[#BDB3A5] hover:shadow-[0_4px_10px_rgba(41,37,34,0.1)]">

            <span className="h-2 w-2 shrink-0 rounded-full bg-[#16A34A] ring-4 ring-[#DCEBDD] shadow-[0_0_0_1px_#9FC9A3]" />

            <span className="whitespace-nowrap font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-[#292522] sm:text-[11px]">
              REGISTRY ACTIVE
            </span>

            <span className="rounded-full bg-[#DCEBDD] px-2 py-1 font-mono text-[9px] font-bold uppercase tracking-widest text-[#28753B]">
              LIVE
            </span>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex shrink-0 items-center gap-2 rounded-full border border-[#D0C8BB] bg-[#E9E4DC] py-1.5 pl-2.5 pr-3 font-mono text-[10px] font-semibold uppercase tracking-[0.08em] text-[#292522] shadow-[0_2px_5px_rgba(41,37,34,0.06),inset_0_1px_0_rgba(255,255,255,0.65)] transition-all hover:-translate-y-px hover:border-[#BDB3A5] hover:bg-[#E3DDD3] hover:shadow-[0_4px_10px_rgba(41,37,34,0.1)] sm:gap-2.5 sm:pr-3.5 sm:text-[11px]">
          <span className="h-2 w-2 rounded-full bg-(--accent-orange) shadow-[0_0_0_3px_rgba(232,113,47,0.14)]" />
          <span>MERN STACK</span>
          <span className="h-4 w-px bg-[#C9C0B3]" />
          <span className="text-[#78716C]">V1.0</span>
        </div>

      </div>
    </header>
  );
};

export default Navbar;