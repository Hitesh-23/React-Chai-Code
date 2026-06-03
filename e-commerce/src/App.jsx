import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Product from './pages/Product'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import products from './data/product'
import Navbar from './components/Navbar'




const App = () => {

  // console.log(products);
  

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='products' element={<Product/>}/>
        <Route path='products/:id' element={<ProductDetail/>}/>
        <Route path='cart' element={<Cart/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App