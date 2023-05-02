import CartElement from "./CartElement"
import CartTotal from "./CartTotal"
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./Cart.css";



const Cart = () => {
const { cart }= useContext (CartContext)
return (
  <>
   
    {cart.length > 0 ? (
      <>
        
        <CartElement />
        <CartTotal />
      </>
    ) : (
      <h2 className='cart-message-center'>Your cart is empty</h2>
    )}
  </>
);
};


export default Cart;