
import "./Card.css"


const Card = ({ producto }) => {
  
  
  
  return (
       <div className="container-card">
            <div className="card">
              <h1>{producto.title}</h1>
              <img src={producto.image} alt="" width={200} />
              <p>$ {producto.price}</p>
              <button>Comprar</button>
            </div>
        </div>
    
  );
};

export default Card;