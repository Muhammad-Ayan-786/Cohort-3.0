import React from 'react'

const CardData = ({ product, onDelete }) => {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-white/10 bg-slate-900/80 shadow-[0_18px_70px_-32px_rgba(2,8,23,0.95)] transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-[0_24px_90px_-28px_rgba(34,211,238,0.35)]">
      <div className="relative h-56 overflow-hidden bg-white/5 p-4">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-slate-300">
          {product.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold leading-6 text-slate-100">{product.title}</h3>

        <div className="mt-4 flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-400">Starting at</p>
            <p className="text-xl font-semibold text-cyan-300">${product.price}</p>
          </div>
          <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm font-medium text-cyan-300">
            Hot deal
          </span>
        </div>

        <button
          onClick={() => onDelete(product.id)}
          className="mt-6 rounded-2xl border border-rose-400/20 bg-rose-500/10 px-4 py-3 font-semibold text-rose-300 transition cursor-pointer hover:bg-rose-400/20"
        >
          Remove item
        </button>
      </div>
    </article>
  )
}

export default CardData