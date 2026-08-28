import { useForm } from "react-hook-form";
import axios from 'axios';

const SingleImageForm = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      const formData = new FormData()

      formData.append('image', data.image[0])

      await axios.post(
        'http://localhost:3000/file/single', formData
      )

      reset()

    } catch (error) {
      console.log('Error on single image upload', error);
    }
  }

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-200 w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Upload Single Image</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          {...register("image", { required: true })}
          type="file"
          className="block w-full text-sm text-gray-500 file:cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition cursor-pointer"
        >
          Submit Image
        </button>
      </form>
    </div>
  )
}

export default SingleImageForm