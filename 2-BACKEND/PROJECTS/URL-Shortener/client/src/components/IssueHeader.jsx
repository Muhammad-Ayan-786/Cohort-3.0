const IssueHeader = () => {
  return (
    <section className="w-full">
      <div className="mx-auto w-full max-w-262.5 px-5 pt-8 sm:px-8 sm:pt-10 lg:px-12 xl:px-16">
        <div className="flex w-full items-center justify-between gap-6 border-b border-[#DCD6CC] pb-2">
          {/* LEFT */}
          <div className="flex min-w-0 items-center gap-2">
            <span className="shrink-0 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-(--accent-orange) sm:text-[11px]">
              ISSUE NO. 04
            </span>
            <span className="font-mono text-[10px] text-[#A8A29E] sm:text-[11px]"> — </span>
            <span className="min-w-0 truncate font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-[#292522] sm:text-[11px]">
              MINIMALIST REDIRECTION SERVICE
            </span>
          </div>

          {/* RIGHT */}
          <div className="flex shrink-0 items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-(--accent-orange)" />
            <span className="hidden font-mono text-[10px] font-medium tracking-[0.12em] text-[#292522] sm:block sm:text-[11px]">
              Dispatch Node: <strong className="font-bold">301.brevity.internal</strong>
            </span>
            <span className="font-mono text-[10px] font-medium tracking-widest text-[#292522] sm:hidden">
              DISPATCH NODE
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IssueHeader;