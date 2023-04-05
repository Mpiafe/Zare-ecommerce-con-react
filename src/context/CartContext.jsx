
import { createContext, useState } from "react";


export const CartContext = createContext()

 export const CartProvider = ({ children })=> {
 const [cart, SetCart]= useState([])

 const addToCart = (producto)=>{
 setCart ([...cart, producto])
  }



  return (
    <CartContext.Provider value={{cart, addToCart}}>
    { children }
    </CartContext.Provider>
  )
}

 
