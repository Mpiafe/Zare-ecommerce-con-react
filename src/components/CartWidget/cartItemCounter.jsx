import { useContext } from "react";
import { CartContext } from "../../context/CartContext";


const CartItemCounter = ({ producto }) => {
  const { cart, setCart, addToCart } = useContext(CartContext);

  const decrese = () => {
    const productorepeat = cart.find((item) => item.id === producto.id);

    productorepeat.quanty !== 1 &&
      setCart(cart.map((item) => (item.id === producto.id ? { ...producto, quanty: productorepeat.quanty - 1 } : item)));
  };
  return (
    <>
      <p className='counter-button' onClick={decrese}>
        
      </p>
      <p>{producto.quanty}</p>
      <p className='counter-button' onClick={() => addToCart(producto)}>
        +
      </p>
    </>
  );
};

export default CartItemCounter;