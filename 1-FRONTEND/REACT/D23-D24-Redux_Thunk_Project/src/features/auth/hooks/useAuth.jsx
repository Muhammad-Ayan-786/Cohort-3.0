import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { loginUserAction } from "../state/authAction";

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
      dispatch(loginUserAction(data))
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