import { Link } from "react-router-dom";
import "./Card.css"


const Card = ({ producto }) => {
  return (
    <Link to={`${producto.id}`}>
      <div className="container-card">
        <h1>{producto.title}</h1>
        <img src={producto.image} alt="" width={200} />
        <p>$ {producto.price}</p>
       <button>Agregar al Carrito</button>
      </div>
    </Link>
  );
};

export default Card;