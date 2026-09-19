import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full border-t border-[#E7E0D3] bg-[#FAF8F5] mt-16 font-mono text-[11px] text-[#78716C]">
      <div className="mx-auto w-full max-w-262.5 px-5 py-10 sm:px-8 lg:px-12 xl:px-16">
        {/* TOP METADATA ROW */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-[#E7E0D3]">
          {/* BRAND RECAP */}
          <div>
            <div className="flex items-baseline gap-1.5 mb-2">
              <span className="font-headline font-bold italic text-2xl text-(--accent-orange)">
                Brevity
              </span>
              <span className="text-xs font-medium text-[#78716C]">/ REDIRECTION ENGINE</span>
            </div>
            <p className="max-w-md font-body text-[13px] text-[#4C4039] leading-relaxed">
              Engineered with brutalist typography and temporary redirects. Built for zero-tracking link condensation.
            </p>
          </div>

          {/* SYSTEM DIAGNOSTICS BOX */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 border border-[#DDD8CF] bg-[#F2EEE7] p-3.5 rounded-xs">
            <div>
              <span className="block text-[9px] uppercase tracking-wider text-[#A8A29E] font-bold">STATUS</span>
              <span className="font-bold text-[#16A34A] flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-[#16A34A]" /> OPERATIONAL
              </span>
            </div>
            <div>
              <span className="block text-[9px] uppercase tracking-wider text-[#A8A29E] font-bold">LATENCY</span>
              <span className="font-bold text-[#1C1917]">12ms Avg</span>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <span className="block text-[9px] uppercase tracking-wider text-[#A8A29E] font-bold">PROTOCOL</span>
              <span className="font-bold text-[#1C1917]">HTTP/3 302</span>
            </div>
          </div>
        </div>

        {/* BOTTOM LEGAL & LINKS */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-[0.14em]">
          <div className="w-full justify-between flex items-center gap-4">
            <span>© 2026 BREVITY INC.</span>
            <span>•</span>
            <span>ISSUE 04 EDITION</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer