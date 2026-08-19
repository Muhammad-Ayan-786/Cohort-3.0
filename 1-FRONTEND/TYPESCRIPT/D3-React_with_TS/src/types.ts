// interface is the blueprint of the object
export interface Product {
  id: number,
  title: string,
  category: string,
  image: string,
  price: number,
  description: string,
  rating: {
    rate: number,
    count: number
  }
}


// In future for handling API response
export interface ProductResponse {
  products: [],
  total: number,
  skip: number,
  limit: number
}