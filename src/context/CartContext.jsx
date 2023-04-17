
import { createContext, useState } from "react";


export const CartContext = createContext()

 export const CartProvider = ({ children })=> {
 const [cart, setCart]= useState([])

 const addToCart = (producto)=>{
 setCart ([...cart, producto])
  }



  return (
    <CartContext.Provider value={{cart, setCart, addToCart}}>
    { children }
    </CartContext.Provider>
  )
}