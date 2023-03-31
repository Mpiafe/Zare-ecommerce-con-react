import { useParams } from "react-router-dom";





const ItemProduct = ({ productos}) => {
    
 
    
  const { id } = useParams();
  const items = productos.find((producto) => producto.id == id);

  return (
    <div>
      <h4>{producto.title}</h4>
      <img src={producto.image} alt="" width={200} />
      <p>{producto.description}</p>
      <p>$ {producto.price}</p>
      
    </div>
  );
};

    

export default ItemProduct;
