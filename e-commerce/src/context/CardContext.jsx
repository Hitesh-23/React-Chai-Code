import { createContext, useState } from "react";

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])


  function addToCart(product) {
    console.log("Clicked", product)
    setCartItems([...cartItems, product])

  }

  function removeFromCart(id){
    console.log("This is from cardContext " ,id)
    console.log("This is also from cartContext", cartItems)
    const updatedCart = cartItems.filter((item) => {
      return item.id !== id
    })

    setCartItems( updatedCart)

  }

  return (
    <CartContext.Provider value={{cartItems, addToCart, removeFromCart}}>
      {children}
    </CartContext.Provider>
  )
}




export default CartContext