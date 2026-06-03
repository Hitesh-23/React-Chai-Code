import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({product}) => {

  let {name, price, id, description} = product

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition transform hover:scale-105 overflow-hidden">
      <div className="bg-gradient-to-r from-gray-200 to-gray-300 h-48 flex items-center justify-center">
        <span className="text-6xl">📦</span>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 truncate">{name}</h3>
        <p className="text-gray-600 text-sm mt-2 line-clamp-2">{description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-2xl font-bold text-blue-600">₹{price}</span>
          <Link 
            to={`/products/${id}`}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProductCard