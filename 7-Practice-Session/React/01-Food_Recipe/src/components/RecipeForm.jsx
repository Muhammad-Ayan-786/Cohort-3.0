import { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipeContext } from "../context/RecipeContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { nanoid } from "nanoid";

function RecipeForm() {

  const { formData, setFormData } = useContext(recipeContext)

  const notify = (message) => {
    toast.success(message, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: 'colored',
      className: 'rounded-2xl shadow-lg',
    })
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    mode: "onChange"
  })

  const formSubmit = (data) => {

    let finalData = [...formData, {
      ...data,
      _id: nanoid(),
      unitPrice: data.price,
      rating: (Math.random() * 2 + 3).toFixed(1)
    }]

    setFormData(finalData)
    localStorage.setItem('recipesArr', JSON.stringify(finalData))
    notify('Recipe added successfully! 🍲')
    reset()
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />

      <aside className="w-full lg:w-[35%]">
        <div className="bg-white p-6 rounded-2xl shadow-lg sticky top-28">

          <h2 className="text-3xl font-bold mb-2">
            Add New Recipe
          </h2>

          <p className="text-gray-500 mb-6">
            Share your delicious recipe with everyone.
          </p>

          <form
            onSubmit={handleSubmit(formSubmit)}
            className="space-y-4"
          >

            {/* Recipe Name */}
            <div>
              <label className="block mb-2 font-medium" htmlFor="recipeName">
                Recipe Name
              </label>

              <input
                type="text"
                id="recipeName"
                autoComplete="off"
                placeholder="Recipe Name"
                {...register('recipeName', {
                  required: "Recipe name is required !",
                  pattern: {
                    value: /^[A-Za-z][A-Za-z\s'-]{1,49}$/,
                    message: "Recipe name must contain only letters, spaces, apostrophes, or hyphens."
                  },
                  validate: (value) =>
                    value.trim() !== "" || "This field cannot be empty or contain only spaces."
                })}
                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            {errors.recipeName && <p className="text-red-500">{errors.recipeName.message}</p>}

            {/* Chef Name */}
            <div>
              <label className="block mb-2 font-medium" htmlFor="chefName">
                Chef Name
              </label>

              <input
                type="text"
                id="chefName"
                autoComplete="off"
                placeholder="Chef Name"
                {...register('chefName', {
                  required: "Chef name is required !",
                  pattern: {
                    value: /^[A-Za-z]+(?:\s[A-Za-z]+)*$/,
                    message: "Chef name must contain only letters and single spaces."
                  },
                  validate: (value) =>
                    value.trim() !== "" || "This field cannot be empty or contain only spaces."
                })}
                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            {errors.chefName && <p className="text-red-500">{errors.chefName.message}</p>}

            {/* Price + Time */}
            <div className="grid grid-cols-2 gap-4">

              {/* Price */}
              <div>
                <label className="block mb-2 font-medium" htmlFor="price">
                  Price
                </label>

                <input
                  type="number"
                  id="price"
                  autoComplete="off"
                  placeholder="Price"
                  {...register("price", {
                    required: "Price is required!",
                    valueAsNumber: true,
                    min: {
                      value: 1,
                      message: "Price must be at least 1.",
                    },
                    max: {
                      value: 100000,
                      message: "Price cannot exceed 100000.",
                    },
                  })}
                  className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              {errors.price && <p className="text-red-500">{errors.price.message}</p>}

              {/* Time */}
              <div>
                <label className="block mb-2 font-medium" htmlFor="prepTime">
                  Prep Time
                </label>

                <input
                  type="text"
                  id="prepTime"
                  autoComplete="off"
                  placeholder="30 mins"
                  {...register('prepTime', {
                    required: 'Prepration time is required !',
                    pattern: {
                      value: /^\d+\s?(mins?|minutes?|hrs?|hours?)$/i,
                      message: "Enter prep time like '15 mins' or '2 hours'."
                    },
                    validate: (value) =>
                      value.trim() !== "" || "This field cannot be empty or contain only spaces."

                  })}
                  className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              {errors.prepTime && <p className="text-red-500">{errors.prepTime.message}</p>}

            </div>

            {/* Image */}
            <div>
              <label className="block mb-2 font-medium" htmlFor="image">
                Image URL
              </label>

              <input
                type="url"
                id="image"
                autoComplete="off"
                placeholder="Paste Image URL"
                {...register('image', {
                  required: 'Image URL is required !',
                  pattern: {
                    value: /^https?:\/\/.+$/i,
                    message: "Please enter a valid URL."
                  }
                })}
                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            {errors.image && <p className="text-red-500">{errors.image.message}</p>}

            {/* Description */}
            <div>
              <label className="block mb-2 font-medium" htmlFor="description">
                Description
              </label>

              <textarea
                rows="4"
                id="description"
                placeholder="Description..."
                {...register('description', {
                  required: 'Image is required !',
                  minLength: {
                    value: 20,
                    message: "Description must be at least 10 characters."
                  },
                  validate: (value) =>
                    value.trim() !== "" || "This field cannot be empty or contain only spaces."
                })}
                className="w-full border rounded-lg p-3 outline-none resize-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            {errors.description && <p className="text-red-500">{errors.description.message}</p>}

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition"
            >
              Create Recipe
            </button>

          </form>
        </div>
      </aside>
    </>
  );
}

export default RecipeForm;