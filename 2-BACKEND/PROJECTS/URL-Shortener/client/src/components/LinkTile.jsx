import { Check, Copy, Eye, Trash2 } from 'lucide-react'
import { useCopyToClipboard } from '../hooks/useCopyToClipboard'

const LinkTile = ({ item, shortUrl, domain, deleteLink }) => {

  const { copiedId, copyToClipboard } = useCopyToClipboard()


  return (
    <div className="p-5 transition-colors hover:bg-[#FAF8F5] sm:p-6">
      {/* TOP ROW */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-3">
        {/* SLUG, URL & DOMAIN */}
        <div className="flex flex-wrap items-center gap-2.5 font-mono">
          {/* SLUG BADGE */}
          <span className="rounded bg-[#FFEDD5] px-2 py-0.5 text-[12px] font-bold text-[#C2410C]">
            /{item.shortCode}
          </span>

          {/* FULL SHORT URL */}
          <a
            href={shortUrl}
            target="_blank"
            rel="noreferrer"
            className="text-[15px] font-bold text-[#1C1917] hover:text-(--accent-orange) hover:underline"
          >
            {shortUrl}
          </a>


          <span className="text-[#A8A29E] font-bold">•</span>

          {/* DOMAIN TAG */}
          <span className="text-[13px] font-medium text-[#78716C]">
            {domain}
          </span>

          {/* CLICKS BADGE */}
          <span
            className="inline-flex items-center gap-1.5 rounded-full bg-[#FFEDD5] px-3 py-0.5 text-[11px] font-semibold text-[#C2410C] ml-1"
          >
            <Eye size={12} />
            <span>{item.clicks} clicks</span>
          </span>
        </div>

        {/* ACTION BUTTON GROUP */}
        <div className="flex items-center self-end md:self-auto border border-[#DCD6CC] bg-white rounded-[3px] overflow-hidden">
          <button
            onClick={() => copyToClipboard(shortUrl, item._id)}
            className="flex items-center gap-1.5 px-3 py-1.5 font-mono text-[11px] font-semibold text-[#1C1917] hover:bg-[#F2EEE7] transition-colors cursor-pointer"
          >
            {copiedId === item._id ? (
              <>
                <Check size={13} className="text-[#16A34A]" />
                <span>Copied</span>
              </>
            ) : (
              <>
                <Copy size={13} />
                <span>Copy</span>
              </>
            )}
          </button>

          <div className="h-4 w-px bg-[#DCD6CC]" />

          <button
            className="px-2.5 py-1.5 text-[#78716C] hover:text-[#DC2626] hover:bg-[#FEF2F2] transition-colors cursor-pointer"
            title="Delete Link"
            onClick={() => deleteLink(item._id)}
          >
            <Trash2 size={13} />
          </button>
        </div>
      </div>

      {/* BOTTOM ROW */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono text-[11px]">
        {/* TARGET URL */}
        <div className="truncate text-[#78716C] max-w-3xl">
          <span className="font-bold text-[#4C4039] uppercase tracking-wider">TARGET:</span>{' '}
          <span className="hover:text-[#1C1917]">{item.originalUrl}</span>
        </div>

        {/* CREATED DATE */}
        <span className="shrink-0 text-[#A8A29E] uppercase tracking-wider font-medium">
          {new Date(item.createdAt).toLocaleDateString('en-US', {
            month: 'short',
            day: '2-digit',
            year: 'numeric'
          }).toUpperCase()}
        </span>
      </div>
    </div>
  )
}

export default LinkTile