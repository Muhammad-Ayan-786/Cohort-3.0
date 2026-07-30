import { useRef, useState } from "react"

const Form = () => {

  const formRef = useRef({})
  const [product, setProduct] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()

    let obj = {
      name: formRef.current.name.value,
      price: formRef.current.price.value,
      category: formRef.current.category.value,
      image: formRef.current.image.value
    }

    setProduct(obj)
  }


  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-linear-to-r from-purple-400 to-cyan-400">
        ✦ Form with useRef Hook ✦
      </h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 bg-[#12121c]/80 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-2xl"
      >
        <div className="relative">
          <input
            ref={(e) => formRef.current.name = e}
            type="text"
            autoComplete="off"
            placeholder="Product Name"
            className="w-full p-4 bg-[#1e1e2e]/80 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all placeholder:text-white/30"
          />
          <div className="absolute inset-0 rounded-lg bg-linear-to-r from-cyan-500/10 to-purple-500/10 -z-10"></div>
        </div>

        <div className="relative">
          <input
            ref={(e) => formRef.current.price = e}
            type="text"
            autoComplete="off"
            placeholder="Price"
            className="w-full p-4 bg-[#1e1e2e]/80 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all placeholder:text-white/30"
          />
          <div className="absolute inset-0 rounded-lg bg-linear-to-r from-cyan-500/10 to-purple-500/10 -z-10"></div>
        </div>

        <div className="relative">
          <span className="text-sm font-medium text-white/60 mb-2 block">Select Category</span>
          <select
            ref={(e) => formRef.current.category = e}
            className="w-full p-4 bg-[#1e1e2e]/80 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all appearance-none"
          >
            <option value="MEN">Men</option>
            <option value="WOMEN">Women</option>
            <option value="KIDS">Kids</option>
          </select>
          <div className="absolute inset-0 rounded-lg bg-linear-to-r from-cyan-500/10 to-purple-500/10 -z-10"></div>
        </div>

        <div className="relative">
          <input
            ref={(e) => formRef.current.image = e}
            type="text"
            autoComplete="off"
            placeholder="Image URL"
            className="w-full p-4 bg-[#1e1e2e]/80 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all placeholder:text-white/30"
          />
          <div className="absolute inset-0 rounded-lg bg-linear-to-r from-cyan-500/10 to-purple-500/10 -z-10"></div>
        </div>

        <button
          type="submit"
          className="relative inline-flex items-center justify-center p-0.5 mt-6 overflow-hidden text-lg font-medium text-white rounded-xl group bg-linear-to-br from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 focus:ring-4 focus:outline-none focus:ring-cyan-800 transition-all duration-500"
        >
          <span className="relative px-8 py-3 transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-0">
            CREATE PRODUCT
          </span>
        </button>
      </form>

      {product && (
        <div className="mt-10 p-8 bg-[#12121c]/80 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl">
          <h2 className="text-2xl font-bold mb-6 text-center bg-clip-text text-transparent bg-linear-to-r from-purple-400 to-cyan-400">
            ✦ Product Details ✦
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <p className="text-white/80">
              <span className="font-semibold text-cyan-400">Name:</span> {product.name}
            </p>
            <p className="text-white/80">
              <span className="font-semibold text-cyan-400">Price:</span> {product.price}
            </p>
            <p className="text-white/80">
              <span className="font-semibold text-cyan-400">Category:</span> {product.category}
            </p>
            <p className="text-white/80">
              <span className="font-semibold text-cyan-400">Image:</span> {product.image}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Form

/*
If you want to access the real DOM element, you can use useRef.

useRef() - A hook that fetches Real DOM element
*/