import { useContext } from "react";
import { CartContext } from "../../context/CartContext";


const CartTotal = () => {
const { cart }= useContext (CartContext)

const total= cart.reduce((acc,el)=> acc + el.price, 0)
  return (
    <div className="cartTotal">
      <h3>Total a pagar: $ {total}</h3>
    </div>
  )
}

export default CartTotal