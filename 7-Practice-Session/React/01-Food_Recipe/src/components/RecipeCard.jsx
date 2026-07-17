import { ShoppingCart, Trash2 } from "lucide-react";
import { useContext } from "react";
import { toast } from "react-toastify";
import { recipeContext } from "../context/RecipeContext";

function RecipeCard({ recipe, isInCart }) {

  const { setAddToCart, removeFromCart } = useContext(recipeContext)

  const handleAddToCart = () => {
    setAddToCart((prev) => [...prev, { ...recipe, quantity: 1 }])

    toast.success('Added to cart 🛒✨', {
      position: 'bottom-right',
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: 'colored',
      className: 'rounded-2xl shadow-lg',
    })
  }

  const handleRemoveFromCart = () => {
    removeFromCart(recipe._id)

    toast.info('Removed from cart 🧺', {
      position: 'bottom-right',
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: 'colored',
      className: 'rounded-2xl shadow-lg',
    })
  }

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">

      {/* Image */}
      <div className="relative h-60 overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-full object-cover hover:scale-110 transition duration-500"
        />

        <span className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full font-semibold">
          ${recipe.price}
        </span>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col gap-4">

        {/* Title */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">
            {recipe.recipeName}
          </h2>

          <span className="text-yellow-500 font-semibold">
            ⭐ {recipe.rating}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-500">
          {recipe.description}
        </p>

        {/* Footer */}
        <div className="flex justify-between items-center">
          <div>
            <h4 className="font-semibold">
              {recipe.chefName}
            </h4>

            <p className="text-sm text-gray-500">
              ⏱ {recipe.prepTime}
            </p>
          </div>

          {
            isInCart ?
              <button
                onClick={handleRemoveFromCart}
                className="flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-100"
              >
                <Trash2 className="h-4 w-4" />
                Remove
              </button>
              :
              <button
                onClick={handleAddToCart}
                className="flex items-center gap-2 rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-600"
              >
                <ShoppingCart className="h-4 w-4" />
                Add
              </button>
          }

        </div>

      </div>
    </div>
  );
}

export default RecipeCard;