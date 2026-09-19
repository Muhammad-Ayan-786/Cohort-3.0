import { ArrowUpDown, Link2, Info } from 'lucide-react'
import LinkTile from './LinkTile'
import { useLinkLedger } from '../hooks/useLinkLedger'

// Empty comp when there are no links
const EmptyStateUI = ({ links }) => {
  return (
    <div className="flex flex-col items-center px-6 py-14 text-center sm:py-16">
      <div className="mb-5 flex h-16 w-16 items-center justify-center border border-[#FFD8C0] bg-[#FFF4E8] text-[#C2410C] shadow-[4px_4px_0px_0px_#FFE8D6]">
        <Link2 size={23} strokeWidth={1.7} />
      </div>
      <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#C2410C]">
        {links.length === 0 ? 'LEDGER EMPTY' : 'EMPTY VIEW'}
      </span>
      <h3 className="mt-2 font-headline text-3xl font-bold italic text-[#292522]">
        {links.length === 0 ? 'Create your first link.' : 'Nothing in the ledger.'}
      </h3>
      <p className="mt-2 max-w-md font-mono text-[12px] leading-relaxed tracking-wide text-[#78716C]">
        {links.length === 0
          ? 'Shortened URLs will appear here after your first successful dispatch.'
          : 'Switch back to List to review your active links and recent dispatches.'}
      </p>
      {links.length === 0 && (
        <span className="mt-5 inline-flex items-center gap-2 border border-[#E7E0D3] bg-[#FAF8F5] px-3 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[#78716C]">
          Your workspace is ready
        </span>
      )}
    </div>
  )
}

// Loading Skeleton when links are loading
const LoadingUI = () => {
  return (
    <div className="animate-pulse divide-y divide-[#F0EBE4]">
      {[1, 2, 3].map((row) => (
        <div key={row} className="p-5 sm:p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex min-w-0 flex-1 flex-wrap items-center gap-3">
              <span className="h-6 w-16 rounded bg-[#F3E9DF]" />
              <span className="h-4 w-52 max-w-full rounded bg-[#EEE9E2]" />
              <span className="hidden h-3 w-24 rounded bg-[#F3E9DF] sm:block" />
            </div>
            <span className="h-8 w-24 rounded-[3px] bg-[#EEE9E2]" />
          </div>
          <div className="mt-4 flex items-center justify-between gap-4">
            <span className="h-3 w-3/4 max-w-lg rounded bg-[#F3E9DF]" />
            <span className="hidden h-3 w-24 rounded bg-[#F3E9DF] sm:block" />
          </div>
        </div>
      ))}
      <div className="flex items-center justify-center gap-2 py-4 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-[#A8A29E]">
        <span className="h-1.5 w-1.5 rounded-full bg-(--accent-orange)" />
        Syncing ledger
      </div>
    </div>
  )
}


const YourLinks = () => {
  const {
    links,
    isLoadingLinks,
    showEmptyState,
    viewNotice,
    handleViewChange,
    deleteLink,
    deletingLinks
  } = useLinkLedger()


  return (
    <section className="w-full">
      <div className="mx-auto w-full max-w-262.5 px-5 py-10 sm:px-8 lg:px-12 xl:px-16">
        {/* HEADER BAR */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-4 border-b-2 border-[#DCD6CC]">

          {/* TITLE & ACTIVE COUNTER */}
          <div className="flex items-baseline gap-3">
            <h2 className="font-headline text-4xl sm:text-5xl font-normal tracking-tight text-[#1C1917]">
              Your links
            </h2>
            <span className="rounded bg-[#EAE6DE] px-2.5 py-0.5 font-mono text-[11px] font-semibold text-[#78716C] uppercase tracking-wider">
              {links.length} ACTIVE
            </span>
          </div>

          {/* VIEW & SORT CONTROLS */}
          <div className="flex items-center gap-6 font-mono text-[11px] text-[#78716C] uppercase tracking-wider">
            <div className="flex items-center gap-1.5">
              <span>VIEW:</span>
              <button
                onClick={() => handleViewChange('list')}
                className={`font-semibold hover:text-[#1C1917] transition-colors ${!showEmptyState ? 'text-(--accent-orange) underline decoration-1 underline-offset-4' : ''
                  }`}
              >
                List ({links.length})
              </button>
              <span>/</span>
              <button
                onClick={() => handleViewChange('empty')}
                className={`hover:text-[#1C1917] transition-colors ${showEmptyState ? 'text-(--accent-orange) underline decoration-1 underline-offset-4' : ''
                  }`}
              >
                Empty
              </button>
            </div>

            <div className="flex items-center gap-1 font-semibold text-[#4C4039]">
              <ArrowUpDown size={12} className="text-[#78716C]" />
              <span>SORT: MOST RECENT</span>
            </div>
          </div>
        </div>

        {/* VIEW NOTICE */}
        {viewNotice && (
          <div className="mt-4 flex items-start gap-3 border border-[#F5C2A5] border-l-4 border-l-(--accent-orange) bg-[#FFF9F2] px-4 py-3.5 shadow-[2px_2px_0px_0px_#FFE8D6]">
            <Info size={16} className="mt-0.5 shrink-0 text-(--accent-orange)" />
            <div className="min-w-0">
              <span className="block font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-[#C2410C]">
                VIEW UNAVAILABLE
              </span>
              <p className="mt-1 font-mono text-[11px] leading-relaxed tracking-wide text-[#6B5145]">
                {viewNotice}
              </p>
            </div>
          </div>
        )}

        {/* LINKS CONTAINER CARD */}
        <div className="mt-6 border border-[#E7E0D3] bg-white divide-y divide-[#E7E0D3] rounded-xs shadow-sm">
          {
            // LOADING STATE - Skeleton
            isLoadingLinks ? (
              <LoadingUI />
            ) : (
              // EMPTY STATE - Empty Box Ledger
              showEmptyState ? (
                <EmptyStateUI links={links} />
              ) : (
                links.map((item) => {
                  const shortUrl = `${import.meta.env.VITE_BACKEND_URL}/${item.shortCode}`
                  const domain = new URL(item.originalUrl).hostname.replace('www.', '')

                  return (
                    <LinkTile
                      key={item._id}
                      item={item}
                      shortUrl={shortUrl}
                      domain={domain}
                      deleteLink={deleteLink}
                      isDeleting={deletingLinks[item._id]}
                    />
                  )
                })
              )
            )
          }
        </div>
      </div>
    </section>
  )
}

export default YourLinks