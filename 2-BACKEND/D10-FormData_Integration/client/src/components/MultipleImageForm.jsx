import { useForm } from "react-hook-form";
import axios from 'axios';

const MultipleImageForm = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {

      const formData = new FormData()

      for (let i = 0; i < data.images.length; i++) {
        formData.append('images', data.images[i])
        // console.log(data.images[i]);
      }

      await axios.post(
        'http://localhost:3000/file/multiple', formData
      )

      reset()

    } catch (error) {
      console.log('Error on multiple image upload', error);
    }
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-200 w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Upload Multiple Images</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          {...register("images", { required: true })}
          type="file"
          multiple
          className="block w-full text-sm text-gray-500 file:cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
        />
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded-lg font-medium hover:bg-purple-700 transition cursor-pointer"
        >
          Submit Images
        </button>
      </form>
    </div>
  )
}

export default MultipleImageForm