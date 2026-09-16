import { Link2, SlidersHorizontal, Zap, XCircle, Loader2, AlertTriangle, X, ChevronsUpDown } from 'lucide-react'
import { useURLForm } from '../hooks/useURLForm'

const ShortenForm = () => {

  const {
    inputRef, initialUrl,
    activeState, setActiveState,
    handleStateSwitch, handleSubmit, handleInput,
    error
  } = useURLForm()

  return (
    <section className="w-full">
      <div className="mx-auto w-full max-w-262.5 px-5 pt-6 sm:px-8 lg:px-12 xl:px-16">

        {/* REFINED TACTILE CONTROL BAR */}
        <div className="mb-6 flex min-h-18.5 flex-col justify-between gap-3 rounded-xl border border-[#E2D9C8] bg-[#F5F2EC] px-3 py-3 font-mono text-[11px] uppercase tracking-[0.12em] shadow-sm sm:flex-row sm:items-center sm:px-4">
          <div className="flex items-center gap-2 font-bold text-[#4C4039]">
            <SlidersHorizontal size={16} strokeWidth={2} className="shrink-0 text-(--accent-orange)" />
            <span className="tracking-[0.16em]">INTERACTIVE LEDGER STATES:</span>
          </div>

          {/* Segmented Control Switch */}
          <div className="flex w-full items-center rounded-md border border-[#DCD6CC] bg-[#FAF8F5] p-0.5 sm:w-auto">
            {['Standard', 'Shortening...', 'Error Trigger'].map((state) => {
              const isActive = activeState === state
              return (
                <button
                  key={state}
                  className={`flex-1 whitespace-nowrap rounded-md px-3.5 py-2 font-mono text-[10px] font-bold tracking-wider uppercase transition-all duration-150 sm:flex-none ${isActive
                    ? 'bg-[#1C1917] text-white shadow-sm'
                    : 'text-[#4C4039] hover:bg-[#EFECE6] hover:text-[#1C1917]'
                    }`}
                >
                  {state}
                </button>
              )
            })}
          </div>
        </div>

        {/* MAIN FORM CONTAINER CARD */}
        <div className="border-2 border-[#1C1917] bg-[#FAF8F5] p-6 sm:p-8 shadow-[5px_5px_0px_0px_#1C1917]">

          {/* CARD TOP HEADER ROW */}
          <div className="mb-4 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.14em]">
            <div className="flex items-center gap-2 font-semibold text-[#9A3412]">
              <Link2 size={15} className="text-(--accent-orange)" />
              <span>ORIGIN DESTINATION UNIFORM RESOURCE IDENTIFIER</span>
            </div>
            <span className="font-medium text-[#A8A29E] tracking-[0.18em]">RFC 3986</span>
          </div>

          {/* INPUT FIELD & BUTTON */}
          <div className="flex flex-col md:flex-row items-stretch">
            {/* INPUT FIELD */}

            <div className="flex flex-1 items-center border border-[#8C827A] bg-[#FAF8F5] px-3 py-2.5">
              <span className="mr-2 font-mono text-[14px] font-medium text-[#78716C] select-none">&gt;</span>
              <input
                type="text"
                ref={inputRef}
                defaultValue={initialUrl}
                placeholder="https://example.com/long-url"
                onInput={handleInput}
                className="w-full bg-transparent font-mono text-[13px] text-[#1C1917] placeholder-[#A8A29E] focus:outline-none"
              />
              <button
                type="button"
                className="text-[#8C827A] hover:text-[#1C1917] transition-colors ml-2 cursor-pointer"
                onClick={() => {
                  setActiveState('Standard')
                  inputRef.current.value = ''
                }}
              >
                <XCircle size={16} />
              </button>
            </div>

            {/* ACTION BUTTON */}
            {activeState === 'Shortening...' ? (
              <button
                disabled
                className="flex items-center justify-center gap-2 bg-[#B43C00] px-7 py-3 font-mono text-[12px] font-bold uppercase tracking-[0.14em] text-white transition-colors border border-[#B43C00] cursor-wait"
              >
                <Loader2 size={15} className="animate-spin text-white" />
                <span>SHORTENING...</span>
              </button>
            ) : (
              <button
                disabled={activeState === 'Error Trigger'}
                className="flex items-center justify-center gap-2 bg-(--accent-orange) hover:bg-[#C2410C] px-7 py-3 font-mono text-[12px] font-bold uppercase tracking-[0.14em] text-white transition-colors border border-(--accent-orange) cursor-pointer"
                onClick={handleSubmit}
              >
                {activeState === 'Error Trigger' ? (
                  <ChevronsUpDown size={15} className="text-white" />
                ) : (
                  <Zap size={15} className="fill-white text-white" />
                )}
                <span>SHORTEN &amp; DISPATCH</span>
              </button>
            )}
          </div>

          {/* ERROR ALERT BANNER (Triggers on 'Error Trigger' state) */}
          {activeState === 'Error Trigger' && (
            <div className="mt-4 flex items-start justify-between rounded border border-[#FCA5A5] bg-[#FEE2E2] p-4 text-mono">
              <div className="flex items-start gap-2.5">
                <AlertTriangle size={18} className="shrink-0 text-[#B91C1C] mt-0.5" />
                <div>
                  <h4 className="font-mono text-[12px] font-bold text-[#B91C1C] tracking-wide">
                    Request rejected
                  </h4>
                  <p className="mt-1 font-mono text-[11px] text-[#B91C1C] tracking-wide">
                    {error}
                  </p>
                </div>
              </div>
              <button
                onClick={() => handleStateSwitch('Standard')}
                className="text-[#B91C1C] hover:opacity-75 transition-opacity cursor-pointer p-0.5"
              >
                <X size={16} />
              </button>
            </div>
          )}

          {/* FOOTER METADATA */}
          <div className="mt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 font-mono text-[11px] text-[#78716C] tracking-widest">
            <span>Automatic canonicalization enabled</span>
            <span>Zero-tracking redirect (301 Permanent)</span>
          </div>
        </div>
      </div>
    </section>
  )
}


export default ShortenForm