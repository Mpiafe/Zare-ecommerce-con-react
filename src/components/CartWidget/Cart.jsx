import CartElement from "./CartElement"
import CartTotal from "./CartTotal"
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";



const Cart = () => {
const { cart }= useContext (CartContext)
return (
  <>
    <Navbar />
    {cart.length > 0 ? (
      <>
        <CartElements />
        <CartTotal />
      </>
    ) : (
      <h2 className='cart-message-center'>Your cart is empty</h2>
    )}
  </>
);
};


export default Cart