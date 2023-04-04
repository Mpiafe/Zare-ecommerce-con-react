
import { createContext, useState } from "react";


export const CartContext = createContext([])

export const CartProvider = ({ children })=> {
const [ Cart, setCart]= useState ([])

const addToCart = (producto)=>{
setCart ([...Cart, producto])
}

  return (

    <CartContext.Provider value= {{Cart, addToCart}}>
    { children }
    </CartContext.Provider>
  )
}


