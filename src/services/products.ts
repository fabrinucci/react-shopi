import { type Product } from '../../types'

const URL = 'https://fakestoreapi.com/products'

export const getAllProducts = async (): Promise<Product[] | undefined> => {
  try {
    const res = await fetch(URL)
    const data = await res.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

// export const getAllProducts = async (
//   category: Categories | null = null
// ): Promise<Product[] | undefined> => {
//   try {
//     const res = await fetch(!category ? URL : `${URL}/category/${category}`)
//     const data = await res.json()
//     return data
//   } catch (error) {
//     console.log(error)
//   }
// }

// export const getProductsByCategory = async (
//   category: Categories
// ): Promise<Product[] | undefined> => {
//   try {
//     const res = await fetch(`${URL}/category/${category}`)
//     const data = await res.json()
//     return data
//   } catch (error) {
//     console.log(error)
//   }
// }
