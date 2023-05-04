import CartElement from "./CartElement"
import CartTotal from "./CartTotal"
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./Cart.css";



const CartContent = () => {
const { cart }= useContext (CartContext)
return (
  <>
   
    {cart.length > 0 ? (
      <>
        
        <CartElement />
        <CartTotal />
      </>
    ) : (
      <h2 className='cart-message-center'>Tu carrito esta vacio</h2>
    )}
  </>
);
};


export default CartContent;