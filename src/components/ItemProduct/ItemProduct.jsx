import { useParams } from "react-router-dom";
import "./ItemProduct.css";





const ItemProduct = ({ productos}) => {
    
  const { id } = useParams();
  const producto = productos.find((producto) => producto.id == id);
  

  return (
    <div className="product">
      <h4>{producto.title}</h4>
      <img src={producto.image} alt="" width={200} />
      <p>$ {producto.price}</p>
      <p>rating: {producto.rating.rate}</p>
    </div>
    
  );
};

export default ItemProduct;
    


