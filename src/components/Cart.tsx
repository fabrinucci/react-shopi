import { XMarkIcon } from '@heroicons/react/20/solid'
import { useShopi } from '../hooks'
import { totalPrice } from '../utils'
import { Checkout, OrderCard } from '.'
import { Link } from 'react-router-dom'

export const Cart = () => {
  const { count, cart, isOpenCart, closeCart } = useShopi()

  return (
    <aside
      className={`${
        isOpenCart ? 'flex' : 'hidden'
      } fixed right-0 top-[80px] z-50 h-full w-[250px] flex-col items-center overflow-auto rounded-sm border-2 border-r-0 border-gray-400 bg-slate-100 p-4 pb-20 sm:w-[360px]`}
    >
      <div className='flex w-full items-center justify-between'>
        <h3 className='text-2xl'>Cart</h3>
        <button onClick={closeCart}>
          <XMarkIcon className='w-8' />
        </button>
      </div>

      {cart.length === 0 ? (
        <div className='mt-8'>
          <h4 className='text-lg'>Your cart is empty</h4>
        </div>
      ) : (
        <div>
          <div className='mt-4'>
            {cart.map((product) => (
              <OrderCard key={product.id} product={product} type='Cart' />
            ))}
          </div>

          <div className='mt-4 flex flex-col gap-2'>
            <div className='flex w-full items-center justify-end gap-2'>
              <h4 className='text-lg font-semibold'>SubTotal:</h4>
              <p>${totalPrice(cart)}</p>
            </div>
            <div className='flex w-full items-center justify-end gap-2'>
              <h4 className='text-lg font-semibold'>Quantity:</h4>
              <p>{count}</p>
            </div>
          </div>
          <Link to='/my-orders/last'>
            <Checkout className='mt-5' />
          </Link>
        </div>
      )}
    </aside>
  )
}
