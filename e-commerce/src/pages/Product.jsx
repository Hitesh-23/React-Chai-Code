import React, {useState} from 'react'
import products from '../data/product'
import ProductCard from '../components/ProductCard'

const Product = () => {
  
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h1>
        <p className="text-gray-600 text-lg mb-12">Browse our exclusive collection of premium products</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((items) => {
            return <ProductCard key={items.id} product={items}/>
          })}
        </div>
      </div>
    </div>
  )
}

export default Product