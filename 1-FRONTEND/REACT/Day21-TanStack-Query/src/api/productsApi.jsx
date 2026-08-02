import { axiosInstance } from "../config/axiosInstance";

export const getProductsDataApi = async () => {
  try {
    console.log("Api call function running ...");
    let res = await axiosInstance.get('/products');
    return res.data.products

  } catch (error) {
    console.log("Error in API ->", error);
  }
}