import { useContext } from "react";
import { MyStore } from "../Context/MyContext";

const ProductCard = ({ product }) => {
  const { setProductsCart } = useContext(MyStore);

  return (
    <article className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_25px_75px_rgba(15,23,42,0.14)]">
      <div className="relative overflow-hidden bg-slate-100">
        <img
          src={product.image}
          alt={product.title}
          className="h-64 w-full object-contain transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="space-y-4 p-5">
        <div className="flex items-center justify-between gap-3 text-xs uppercase tracking-[0.3em] text-slate-500">
          <span>{product.category}</span>
          <span className="rounded-full bg-slate-100 px-2 py-1 text-slate-700">⭐ {product.rating.rate}</span>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-slate-900">{product.title}</h2>
          <p className="max-h-16 overflow-hidden text-sm leading-6 text-slate-600">{product.description}</p>
        </div>

        <div className="flex items-center justify-between gap-4 pt-2">
          <p className="text-xl font-black text-slate-900">${product.price.toFixed(2)}</p>
          <button
            onClick={() => setProductsCart((prev) => [...prev, product])}
            className="rounded-full bg-linear-to-r from-violet-600 to-cyan-500 px-4 py-2 text-sm font-semibold text-white transition hover:brightness-110"
          >
            Add to cart
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;