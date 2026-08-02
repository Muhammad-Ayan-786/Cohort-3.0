import React, { useState } from "react";

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="w-full max-w-sm rounded-2xl bg-white border border-zinc-200 p-5 shadow-lg hover:shadow-purple-500/20 hover:border-purple-500 transition-all duration-300">
      {/* Product Image */}
      <div className="h-60 w-full bg-zinc-100 rounded-xl overflow-hidden">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-contain p-4 hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Product Info */}
      <div className="mt-5">
        <h2 className="text-lg font-semibold text-zinc-900 line-clamp-1">
          {product.title}
        </h2>

        <p className="mt-2 text-2xl font-bold text-green-600">
          ${product.price}
        </p>

        <p className="mt-1 text-sm text-zinc-600">
          Stock:{" "}
          <span className="text-green-600 font-medium">{product.stock}</span>
        </p>

        {/* Quantity */}
        <div className="flex items-center gap-2 mt-5 bg-zinc-100 p-1.5 rounded-xl w-fit">
          <button
            onClick={() => quantity > 1 && setQuantity(quantity - 1)}
            className="w-9 h-9 rounded-lg bg-white text-zinc-900 hover:bg-zinc-50 active:scale-90 shadow-sm transition-all duration-200 font-bold"
          >
            -
          </button>

          <span className="w-10 text-center text-lg font-bold text-zinc-900">
            {quantity}
          </span>

          <button
            onClick={() => setQuantity(quantity + 1)}
            className="w-9 h-9 rounded-lg bg-white text-zinc-900 hover:bg-zinc-50 active:scale-90 shadow-sm transition-all duration-200 font-bold"
          >
            +
          </button>
        </div>

        {/* Add to Cart */}
        <button className="w-full mt-6 bg-purple-600 hover:bg-purple-700 active:scale-95 text-white font-semibold py-3 rounded-xl transition-all duration-200 shadow-md hover:shadow-purple-500/30">
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard