import React,{useEffect, useState, useContext} from 'react'
import { useParams, Link } from 'react-router-dom'
import products from '../data/product'
import CartContext from '../context/CardContext'

const ProductDetail = () => {

  const {cartItems, addToCart} = useContext(CartContext)
  const [added, setAdded] = useState(false)

  const item = useParams()

  const product = products.find((eachElement) => {
    return eachElement.id == item.id
  })

  const handleAddToCart = () => {
    addToCart(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/products" className="text-blue-600 hover:text-blue-800 font-medium mb-6 inline-block">← Back to Products</Link>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-8">
            {/* Product Image */}
            <div className="flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg h-96">
              <span className="text-9xl">📦</span>
            </div>

            {/* Product Info */}
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex text-yellow-400 text-2xl">⭐⭐⭐⭐⭐</div>
                <span className="text-gray-600">(128 reviews)</span>
              </div>

              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                {product.description}
              </p>

              <div className="border-t border-b py-6 mb-8">
                <div className="flex items-baseline space-x-2 mb-2">
                  <span className="text-5xl font-bold text-blue-600">₹{product.price}</span>
                  <span className="text-gray-500 line-through text-lg">₹{Math.round(product.price * 1.2)}</span>
                </div>
                <p className="text-green-600 font-medium">Save ₹{Math.round(product.price * 0.2)} (20% off)</p>
              </div>

              <div className="space-y-3">
                <button
                  onClick={handleAddToCart}
                  className={`w-full py-3 px-6 rounded-lg font-bold text-lg transition ${
                    added
                      ? 'bg-green-500 text-white'
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                >
                  {added ? '✓ Added to Cart!' : '🛒 Add to Cart'}
                </button>
                <button className="w-full py-3 px-6 rounded-lg font-bold text-lg border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition">
                  ❤️ Add to Wishlist
                </button>
              </div>

              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">Why buy from us?</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Authentic product guaranteed</li>
                  <li>✓ 30-day return policy</li>
                  <li>✓ Free shipping on orders above ₹500</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail