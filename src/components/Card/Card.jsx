import { useContext } from "react";
import "./Card.css";
import { CartContext } from "../../context/CartContext";



const Card = ({producto}) => {
const { cart, setCart} = useContext (CartContext) 
 
  return (
       <div className="container-card">
            <div className="card">
              <h1>{producto.title}</h1>
              <img src={producto.image} alt="" width={100} />
              <p>$ {producto.price}</p>
              <button onClick={()=>addToCart(producto)}>Ver detalle</button>
              
            </div>
        </div>
    
  )
}


export default Card;