import { useCart } from "../../context/CartContext";






const CartElement = () => {
const { Cart }= useCart ()


return Cart.map((producto) => {
    return (
        <div className='cartContent' key={producto.id}>
              <h3 className='name'>{producto.title}</h3>
              <img src={producto.image} alt='product-card' />
              <h4 className='price'>{producto.price}$</h4>
        </div>
    );
  });
};

export default CartElement