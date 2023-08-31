import { XMarkIcon } from '@heroicons/react/24/outline'
import { useShopi } from '../hooks'
import { type Product } from '../../types'

export const ProductDetail = () => {
  const { isOpenDetail, closeDetail, productToShow } = useShopi()
  const { description, image, price, title } = productToShow as Product

  return (
    <aside
      className={`${
        isOpenDetail ? 'flex' : 'hidden'
      } fixed right-0 top-[62px] z-10 h-full w-[300px] flex-col items-center overflow-scroll rounded-sm border-x-2 border-gray-400 bg-slate-100 px-8 pb-20 pt-4`}
    >
      <div className='flex w-full items-center justify-between'>
        <h3 className='text-2xl'>Detail</h3>
        <button onClick={closeDetail}>
          <XMarkIcon className='w-8' />
        </button>
      </div>

      <article className='mt-4 flex w-full flex-col items-start justify-start gap-4 pb-4'>
        <div className='mb-2 flex w-full flex-col gap-4'>
          <h4 className='text-2xl font-semibold'>${price}</h4>
          <h5 className='text-lg'>{title}</h5>
        </div>
        <figure>
          <img className='w-full' src={image} alt={title} />
        </figure>

        <p className='mt-2'>{description}</p>
      </article>
    </aside>
  )
}
