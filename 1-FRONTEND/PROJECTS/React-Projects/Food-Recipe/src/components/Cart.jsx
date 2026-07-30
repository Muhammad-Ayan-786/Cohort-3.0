import { useContext } from "react"
import { recipeContext } from "../context/RecipeContext"

const Cart = ({ item }) => {

  const { removeFromCart, incrementQuantity, decrementQuantity } = useContext(recipeContext)

  return (
    <div key={item._id} className="flex gap-4">

      <img
        src={item.image}
        className="h-20 w-20 rounded-lg object-cover"
      />

      <div className="flex-1">
        <div className="flex justify-between">
          <h3 className="font-semibold">{item.recipeName}</h3>
          <span className="font-bold text-orange-500">${item.price}</span>
        </div>

        <p className="text-sm text-gray-500">{item.chefName}</p>

        {/* Quantity */}
        <div className="mt-3 flex items-center justify-between gap-2">
          <div className="flex items-center overflow-hidden rounded-full border border-orange-200 bg-orange-50 shadow-sm">
            <button
              onClick={() => decrementQuantity(item._id)}
              className="px-2 py-0.5 text-xs font-semibold text-orange-600 transition hover:bg-orange-100"
              type="button"
            >
              −
            </button>
            <span className="min-w-6 px-1.5 text-center text-xs font-semibold text-gray-700">
              {item.quantity}
            </span>
            <button
              onClick={() => incrementQuantity(item._id)}
              className="px-2 py-0.5 text-xs font-semibold text-orange-600 transition hover:bg-orange-100"
              type="button"
            >
              +
            </button>
          </div>

          <button
            onClick={() => removeFromCart(item._id)}
            className="rounded-full border border-red-200 bg-red-50 px-2 py-1 text-[10px] font-semibold text-red-600 transition hover:bg-red-100"
            type="button"
          >
            Remove
          </button>
        </div>

      </div>
    </div>
  )
}

export default Cart