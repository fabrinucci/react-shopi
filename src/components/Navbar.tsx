import { NavLink } from 'react-router-dom'
import { ShoppingCartButton } from './'
import { Categories } from '../../types'

interface MenuProps {
  path: string
  name: string
  className: string
  category?: Categories | null
}

const menu1: MenuProps[] = [
  {
    path: '/',
    name: 'All',
    className: 'font-semibold text-xl'
  },
  {
    path: `/category/${Categories.Smartphones}`,
    name: 'Smartphones',
    className: ''
  },
  {
    path: `/category/${Categories.Fragrances}`,
    name: 'Fragrances',
    className: ''
  },
  {
    path: `/category/${Categories.Laptops}`,
    name: 'Laptops',
    className: ''
  },
  {
    path: `/category/${Categories.MensShirts}`,
    name: 'Mens Shirts',
    className: ''
  },
  {
    path: `/category/${Categories.Tops}`,
    name: 'Tops',
    className: ''
  }
]

const menu2 = [
  {
    path: '/my-orders',
    name: 'My Orders',
    className: ''
  },
  {
    path: '/my-account',
    name: 'My Account',
    className: ''
  },
  {
    path: '/sign-in',
    name: 'Sign In',
    className: ''
  }
]

export const Navbar = () => {
  const activeStyle = 'underline underline-offset-4'

  return (
    <nav className='fixed top-0 z-50 flex w-full items-center justify-between border-b-2 border-gray-400 bg-slate-100 px-6 py-4'>
      <ul className='flex items-center gap-4'>
        <li>
          <NavLink aria-label='Go to home' to='/'>
            <figure>
              <img className='h-9' src='/shopi.webp' alt='' />
            </figure>
          </NavLink>
        </li>
        {menu1.map(({ name, path, className }) => (
          <li key={name}>
            <NavLink
              aria-label={`View ${name.toLowerCase()} products`}
              to={path}
              className={({ isActive }) => (isActive ? activeStyle : '')}
            >
              <span className={className}>{name}</span>
            </NavLink>
          </li>
        ))}
      </ul>

      <ul className='flex items-center gap-4'>
        {menu2.map(({ name, path, className }) => (
          <li key={name}>
            <NavLink
              to={path}
              className={({ isActive }) => (isActive ? activeStyle : '')}
            >
              <span className={className}>{name}</span>
            </NavLink>
          </li>
        ))}
        <li>
          <ShoppingCartButton />
        </li>
      </ul>
    </nav>
  )
}
