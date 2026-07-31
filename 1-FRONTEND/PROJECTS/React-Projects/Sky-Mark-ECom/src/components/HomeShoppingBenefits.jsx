import { Zap, Shield, Tag } from "lucide-react";

const HomeShoppingBenefits = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {/* Fast Delivery */}
      <div className="bg-[#111] border border-white/8 rounded-2xl p-5 flex items-center gap-4">
        <Zap className="w-6 h-6 text-volt" strokeWidth={2} />

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
        <Shield className="w-6 h-6 text-blue-400" strokeWidth={2} />

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
        <Tag className="w-6 h-6 text-green-400" strokeWidth={2} />

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