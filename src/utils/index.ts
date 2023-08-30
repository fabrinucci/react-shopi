import { type ProductCart } from '../../types'

export const totalPrice = (products: ProductCart[]) => {
  const price = products.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )
  return Math.round(price * 100) / 100
}

export const totalQuantity = (products: ProductCart[]) => {
  return products.reduce((acc, item) => acc + item.quantity, 0)
}

export const getDate = () => {
  const fullDate = new Date()
  const day = fullDate.getDate()
  const month = fullDate.getMonth() + 1
  const year = fullDate.getFullYear()

  const date = `${month}/${day}/${year}`
  return date
}