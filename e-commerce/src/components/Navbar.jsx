import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../context/CardContext'


const Navbar = () => {

  const {cartItems} = useContext(CartContext)

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link to={`/`} className="text-2xl font-bold hover:text-blue-100 transition">
              🛍️ ShopHub
            </Link>
            <div className="hidden md:flex space-x-6">
              <Link to={`/`} className="hover:text-blue-100 transition font-medium">
                Home
              </Link>
              <Link to={`/products`} className="hover:text-blue-100 transition font-medium">
                Products
              </Link>
            </div>
          </div>
          <Link to={`/cart`} className="bg-red-500 hover:bg-red-600 px-6 py-2 rounded-full font-bold transition flex items-center space-x-2">
            <span>🛒 Cart</span>
            {cartItems.length > 0 && (
              <span className="bg-white text-red-500 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                {cartItems.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar