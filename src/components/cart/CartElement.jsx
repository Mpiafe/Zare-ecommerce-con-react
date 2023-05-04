import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItemCounter from "./CartItemCounter";


const CartElement = () => {
  const { cart, setCart } = useContext(CartContext);

  const deleteProducto = (id) => {
    const foundId = cart.find((producto) => producto.id === id);

    const newCart = cart.filter((producto) => {
      return producto !== foundId;
    });

    setCart(newCart);
  };


return cart.map((producto) => {
    return (
        <div className='cartContent' key={producto.id}>
              <h3 className='name'>{producto.title}</h3>
              <img src={producto.image} alt='product-card'/>
              <CartItemCounter producto= {producto} /> 
              <h4 className='price'> $ {producto.price * producto.quanty}</h4>
              <h3 className='cart-delete-button' onClick={() => deleteProducto(producto.id)}>❎</h3>
        </div>
    )
  });
};

export default CartElement;