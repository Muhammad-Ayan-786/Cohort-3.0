import { useRef } from "react"

const Form = () => {

  const formRef = useRef({})

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formRef);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className='flex flex-col gap-6 bg-slate-600 font-semibold text-slate-100 p-6 text-xl rounded-xl'>

        <input
          ref={(e) => formRef.current.name = e.value}
          type="text" placeholder='Product Name'
        />
        <input
          ref={(e) => formRef.current.price = e}
          type="text" placeholder='Price'
        />

        <span>Select Category</span>
        <select ref={(e) => formRef.current.category = e}>
          <option value="MEN">Men</option>
          <option value="WOMEN">Women</option>
          <option value="KIDS">Kid</option>
        </select>

        <input
          ref={(e) => formRef.current.image = e}
          type="text" placeholder='Image'
        />

        <button className='bg-slate-800 py-2 rounded-md'>Create</button>
      </form>
    </div>
  )
}

export default Form

/*
If you want to access the real DOM element, you can use useRef.

useRef() - A hook that fetches Real DOM element
*/