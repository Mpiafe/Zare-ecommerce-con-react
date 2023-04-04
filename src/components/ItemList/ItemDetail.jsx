import React from 'react'
import { useParams } from "react-router-dom";
import ItemCount from './ItemCount';

const ItemDetail = ({ productos }) => {
  const { id } = useParams();
  const producto = productos.find((producto) => producto.id == id);

  return (
    <>
    <div>
      <h4>{producto.title}</h4>
      <img src={producto.image} alt="" width={200} />
      <h5>{producto.category}</h5>
      <p>{producto.description}</p>
      <p>$ {producto.price}</p>
      <p>rating: {producto.rating.rate}</p>
    </div>
    
    <ItemCount/>
    </>
  );
};

export default ItemDetail;