import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { loginUserApi } from "../api/authApi";
import { addUser } from "../state/authSlice";
import toast from "react-hot-toast";

export const useAuth = () => {
  let navigate = useNavigate()
  let dispatch = useDispatch()

  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const registerForm = (data) => {
    console.log("register", data);
  }

  const loginForm = async (data) => {
    try {
      // api call
      let response = await loginUserApi(data)
      console.log(response);

      dispatch(addUser(response))
      toast.success('Login successful')

      reset()

    } catch (error) {
      console.log('Form api error', error)
    }
  }

  return {
    navigate,
    register,
    handleSubmit,
    errors,
    registerForm,
    loginForm,
  }
}