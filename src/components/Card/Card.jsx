import "./Card.css";
import { Link } from "react-router-dom"




const Card = ({ producto}) => {
  return (
    <Link to={`/productos/${producto.id}`}>
    <div className="container-card">
        <h1>{producto.title}</h1>
        <img src={producto.image} alt="" width={200}/>
        <p>$ {producto.price}</p>
    </div>
    </Link>
  )
}

export default Card