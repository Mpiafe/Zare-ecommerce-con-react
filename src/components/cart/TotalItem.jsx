import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./cart.css";

const TotalItem = () => {
    const { cart, setCart } = useContext(CartContext);

const itemQuanty = cart.reduce ((acc, el)=> acc + el.quanty, 0)


  return (
    <span className="cart-item-total">{itemQuanty}</span>
  )
}

export default TotalItem