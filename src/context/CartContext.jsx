
import { createContext, useState } from "react";


export const CartContext = createContext()

 export const CartProvider = ({ children })=> {
 const [cart, setCart]= useState([])

 const addToCart = (producto)=>{
 
  const productorepeat = cart.find((item) => item.id === producto.id);
  if (productorepeat){
  setCart (cart.map((item)=>item.id === producto.id ? {...producto, quanty: 
    productorepeat.quanty +1} : item))
  }else{
    setCart ([...cart, producto])
  }
  }



  return (
    <CartContext.Provider value={{cart, setCart, addToCart}}>
    { children }
    </CartContext.Provider>
  )
}