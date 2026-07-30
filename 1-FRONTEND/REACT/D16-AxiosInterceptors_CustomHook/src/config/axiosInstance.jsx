import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com",
  //* URL - Universal Resource Locator
})

//* Interceptors are the middlewares of axios
axiosInstance.interceptors.request.use(
  (response) => {
    console.log("In interceptor ->", response);
    return response
  },
  (error) => {
    console.log("error in request", error);
  }
)

/* //* This is when sending the request
axiosInstance.interceptors.request.use(
  () => { },
  () => { }
)
*/