import axios from "axios";

export const getAppProducts = async (limit, page = 1) => {
  try {

    const res = await axios.get(
      `https://dummyjson.com/products?limit=${limit}&skip=${page * limit}`
    )

    return res.data

  } catch (error) {
    console.log("Error in API", error)
  }
}


export const getInfiniteScrollProducts = async (limit, pageParams) => {
  try {

    const res = await axios.get(
      `https://dummyjson.com/products?limit=${limit}&skip=${pageParams}`
    )

    return res.data

  } catch (error) {
    console.log("Error in API", error)
  }
}