import { useForm } from 'react-hook-form'

const ReactHookForm = () => {

  console.log("App rendering ...")

  let {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()


  const formSubmit = (data) => {
    console.log(data);
    reset()
  }


  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-linear-to-r from-purple-400 to-cyan-400">
        ✦ React Hook Form ✦
      </h1>

      <form
        onSubmit={handleSubmit(formSubmit)}
        className="flex flex-col gap-5 bg-[#12121c]/80 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-2xl"
      >
        <div className="relative">
          <input
            {...register('name')}
            type="text"
            autoComplete="off"
            placeholder="Product Name"
            className="w-full p-4 bg-[#1e1e2e]/80 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all placeholder:text-white/30"
          />
          <div className="absolute inset-0 rounded-lg bg-linear-to-r from-cyan-500/10 to-purple-500/10 -z-10"></div>
        </div>

        <div className="relative">
          <input
            {...register('price')}
            type="text"
            autoComplete="off"
            placeholder="Price"
            className="w-full p-4 bg-[#1e1e2e]/80 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all placeholder:text-white/30"
          />
          <div className="absolute inset-0 rounded-lg bg-linear-to-r from-cyan-500/10 to-purple-500/10 -z-10"></div>
        </div>

        <div className="relative">
          <input
            {...register('category')}
            type="text"
            autoComplete="off"
            placeholder="Category"
            className="w-full p-4 bg-[#1e1e2e]/80 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all placeholder:text-white/30"
          />
          <div className="absolute inset-0 rounded-lg bg-linear-to-r from-cyan-500/10 to-purple-500/10 -z-10"></div>
        </div>

        <div className="relative">
          <input
            {...register('image')}
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
    </div>
  );
}

export default ReactHookForm

/*
When ever "React Hook Form" is used, it will always re-render twice (2 Times)


{...register("name")} // Break down of this line :

Your '...register()' is like an obj :
```
register ({
  onChange: () => {} // a callback func
  name: 'The name of the input'
  // Validation like :
  onBlur: () => {} // a callback func
  required: null
})
```

What's 'handleSubmit()' is :
```
handleSubmit((data) => { // Takes a callback
  console.log(data) // 'data' is the form data
})
```


Behind the scene, React Hook Form (RHF) uses 'useRef()'
It stores all the references of each input, and
then on submit, it returns the the value from each
reference input in an Object.
*/