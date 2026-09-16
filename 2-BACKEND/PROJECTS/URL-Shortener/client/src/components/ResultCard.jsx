import { useContext } from 'react'
import { ExternalLink, Copy, Check, ArrowUpRight } from 'lucide-react'
import { UrlContext } from '../context/urlProvider'
import { useCopyToClipboard } from '../hooks/useCopyToClipboard'

const ResultCard = () => {

  const { newURL } = useContext(UrlContext)

  const shortUrl = newURL ? `http://localhost:3000/${newURL.shortCode}` : null
  const { copiedId, copyToClipboard } = useCopyToClipboard()
  const copied = copiedId === 'result-card'


  return (
    <section className="w-full">
      <div className="mx-auto w-full max-w-262.5 px-5 pt-6 sm:px-8 lg:px-12 xl:px-16">
        {/* OUTER PEACH/ORANGE FRAME */}
        <div className="border-2 border-[#FFD8C0] bg-[#FFFBF5] p-5 sm:p-6 shadow-[4px_4px_0px_0px_#FFE8D6] rounded-xs">
          {/* HEADER METADATA ROW */}
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] tracking-[0.12em]">
            <div className="flex min-w-0 flex-wrap items-center gap-3">
              {/* NEWLY CREATED BADGE */}
              <span className="inline-flex items-center gap-1.5 rounded-md bg-[#FFEDD5] px-2.5 py-0.5 text-[10px] font-bold text-[#C2410C] tracking-wider uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-[#EA580C]" />
                NEWLY CREATED
              </span>
              <span className="font-semibold text-[#4C4039] uppercase tracking-widest">
                ID: #REC-9821
              </span>
            </div>

            <span className="font-semibold uppercase tracking-wider text-[#C2410C]">
              {newURL ? 'Dispatched Just Now' : 'Awaiting First Dispatch'}
            </span>
          </div>

          {/* INNER WHITE CONTENT BOX */}
          <div className="border border-[#E7E0D3] bg-white p-5 sm:p-6 rounded-[1px]">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="min-w-0 flex-1">
                {!newURL ? (
                  <div className="flex items-start gap-4 sm:gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#FFD8C0] bg-[#FFF4E8] font-mono text-sm font-bold text-[#C2410C] shadow-[3px_3px_0px_0px_#FFE8D6] sm:h-14 sm:w-14 sm:text-base">
                      01
                    </div>
                    <div className="min-w-0 pt-0.5">
                      <div className="mb-2 flex items-center gap-2">
                        <span className="h-px w-8 bg-(--accent-orange)" />
                        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#C2410C]">
                          READY WHEN YOU ARE
                        </span>
                      </div>
                      <h2 className="font-headline text-3xl font-bold italic leading-none tracking-[-0.02em] text-[#292522] sm:text-4xl">
                        Create your first link.
                      </h2>
                      <p className="mt-3 max-w-xl font-mono text-[12px] leading-relaxed tracking-wide text-[#78716C]">
                        Your shortened URL will land here after a successful dispatch.
                      </p>
                      <div className="mt-4 inline-flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[#9A3412]">
                        <ArrowUpRight size={14} />
                        <span>Start with the form above</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    {/* CONDENSED SLUG LABEL */}
                    <span className="block font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#A8A29E] mb-1.5">
                      CONDENSED SLUG
                    </span>

                    {/* SHORTENED URL */}
                    <div className="mb-2 flex min-w-0 max-w-full items-start gap-2">
                      <a
                        href={shortUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex min-w-0 max-w-full items-start gap-2 font-mono text-xl font-bold text-(--accent-orange) hover:underline sm:text-2xl"
                      >
                        <span className="break-all">{shortUrl}</span>
                        <ExternalLink size={18} className="shrink-0 text-(--accent-orange)" />
                      </a>
                    </div>

                    {/* TARGET URL PREVIEW */}
                    <p className="max-w-full wrap-break-word font-mono text-[12px] tracking-wide text-[#78716C]">
                      <span className="font-semibold text-[#4C4039]">Target:</span>{' '}
                      {newURL.originalUrl}
                    </p>
                  </>
                )}
              </div>

              {/* COPY BUTTON */}
              {newURL && (
                <button
                  onClick={() => copyToClipboard(shortUrl, 'result-card')}
                  className="shrink-0 flex items-center justify-center gap-2 bg-[#1C1917] hover:bg-[#332E2B] px-6 py-3 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-white transition-colors cursor-pointer rounded-none"
                >
                  {copied ? (
                    <>
                      <Check size={14} className="text-[#22C55E]" />
                      <span>COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              )}

            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default ResultCard