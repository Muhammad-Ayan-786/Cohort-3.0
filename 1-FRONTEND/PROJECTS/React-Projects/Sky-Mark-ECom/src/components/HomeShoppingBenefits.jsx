import React from 'react'

const HomeShoppingBenefits = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {/* Fast Delivery */}
      <div className="bg-[#111] border border-white/8 rounded-2xl p-5 flex items-center gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-zap text-volt"
        >
          <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
        </svg>

        <div>
          <p className="font-body font-semibold text-white/80 text-sm">
            Fast Delivery
          </p>
          <p className="text-white/30 text-xs">
            Same-day on select items
          </p>
        </div>
      </div>

      {/* Secure Payments */}
      <div className="bg-[#111] border border-white/8 rounded-2xl p-5 flex items-center gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-shield text-blue-400"
        >
          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
        </svg>

        <div>
          <p className="font-body font-semibold text-white/80 text-sm">
            Secure Payments
          </p>
          <p className="text-white/30 text-xs">
            100% encrypted checkout
          </p>
        </div>
      </div>

      {/* Best Prices */}
      <div className="bg-[#111] border border-white/8 rounded-2xl p-5 flex items-center gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-tag text-green-400"
        >
          <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
          <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
        </svg>

        <div>
          <p className="font-body font-semibold text-white/80 text-sm">
            Best Prices
          </p>
          <p className="text-white/30 text-xs">
            Price-match guarantee
          </p>
        </div>
      </div>
    </div>
  )
}

export default HomeShoppingBenefits