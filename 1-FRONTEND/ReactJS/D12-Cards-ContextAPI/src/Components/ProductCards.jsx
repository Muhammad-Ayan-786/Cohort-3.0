import { useContext } from "react";
import { MyStore } from "../Context/MyContext";

const ProductCard = ({ product, elemInCart }) => {

  const { setCartItems, incrementQuantity, decrementQuantity } = useContext(MyStore)

  const addToCart = () => {
    setCartItems((prev) => [...prev, { ...product, quantity: 1 }])
    alert("Product added into Cart")
  }

  return (
    <article className="group overflow-hidden rounded-4xlrder border-white/10 bg-white/10 p-4 shadow-[0_25px_80px_rgba(15,23,42,0.3)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40">
      <div className="relative overflow-hidden rounded-[1.4rem] bg-linear-to-br from-slate-900 via-slate-800 to-slate-700 p-4">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.15),transparent_55%)]"></div>
        <img
          src={product.image}
          alt={product.title}
          className="relative mx-auto h-56 w-full object-contain transition duration-500 group-hover:scale-110"
        />
      </div>

      <div className="mt-5 space-y-4">
        <div className="flex items-center justify-between gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-400">
          <span>{product.category}</span>
          <span className="rounded-full border border-white/10 bg-slate-900/70 px-3 py-1 text-cyan-300">★ {product.rating.rate}</span>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-white">{product.title}</h2>
          <p className="max-h-16 overflow-hidden text-sm leading-7 text-slate-300">{product.description}</p>
        </div>

        <div className="flex items-center justify-between gap-3 border-t border-white/10 pt-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-500">Starting at</p>
            <p className="text-2xl font-black text-white">${product.price.toFixed(2)}</p>
          </div>

          {
            elemInCart && elemInCart.quantity >= 1 ?
              <div className="flex items-center gap-2 rounded-full border border-cyan-400/20 bg-slate-900/80 p-1">
                <button className="rounded-full bg-white/10 px-3 py-2 text-lg font-bold text-white"
                  onClick={() => decrementQuantity(product.id)}
                >-</button>

                <span className="min-w-10 text-center text-sm font-semibold text-white">
                  {elemInCart.quantity}
                </span>

                <button className="rounded-full bg-white/10 px-3 py-2 text-lg font-bold text-white"
                  onClick={() => incrementQuantity(product.id)}
                >+</button>
              </div>
              :
              <button
                onClick={addToCart}
                className="rounded-full bg-linear-to-r from-violet-500 to-cyan-400 px-4 py-2.5 text-sm font-semibold text-white transition hover:brightness-110"
              >
                Add to cart
              </button>
          }
        </div>
      </div>
    </article>
  );
};

export default ProductCard;