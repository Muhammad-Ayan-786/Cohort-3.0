// import recipes from "../data/recipes";
import { Soup } from "lucide-react";
import { useContext } from "react";
import RecipeCard from "./RecipeCard";
import { recipeContext } from "../context/RecipeContext";

function RecipeGrid() {
  const { formData, addToCart, filteredItems, searchQuery } = useContext(recipeContext)

  const visiableArr = filteredItems(searchQuery)

  return (
    <section className="w-full lg:w-[65%]">

      {/* Heading */}

      <div className="flex justify-between items-center mb-8">

        <div>
          <h1 className="text-4xl font-bold">
            Discover Recipes
          </h1>

          <p className="text-gray-500 mt-2">
            Top curated recipes for your next meal.
          </p>
        </div>

      </div>

      {/* Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {
          visiableArr.length > 0
            ?
            visiableArr.map((recipe) => {
              let isInCart = addToCart.find(val => val._id === recipe._id)

              return <RecipeCard
                key={recipe._id}
                recipe={recipe}
                isInCart={isInCart}
              />
            })
            :
            <div className="col-span-full rounded-3xl border border-dashed border-orange-200 bg-orange-50 p-10 text-center shadow-sm">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white text-orange-500 shadow-sm">
                <Soup size={24} />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-800">
                No recipes matched your search
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Try searching for a different recipe name, chef, or ingredient.
              </p>
            </div>
        }

      </div>

    </section>
  );
}

export default RecipeGrid;