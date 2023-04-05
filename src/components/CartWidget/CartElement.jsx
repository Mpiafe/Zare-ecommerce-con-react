import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItemCounter from "./CartItemCounter";


const CartElement = () => {
  const { cart, setCart } = useContext(CartContext);

  const deleteProduct = (id) => {
    const foundId = cart.find((element) => element.id === id);

    const newCart = cart.filter((element) => {
      return element !== foundId;
    });

    setCart(newCart);
  };


return cart.map((producto) => {
    return (
        <div className='cartContent' key={producto.id}>
              <h3 className='name'>{producto.title}</h3>
              <CartItemCounter product={producto} />
              <img src={producto.image} alt='product-card' />
              <h4 className='price'>{producto.price}$</h4>
              <h3 class='cart-delete-button' onClick={() => deleteProduct(producto.id)}>
          ❌
        </h3>
        </div>
    );
  });
};

export default CartElement