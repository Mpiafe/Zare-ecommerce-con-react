import { useState, useEffect } from "react";
import Card from "../card/Card";
import db from "../../../db/firebase-config";
import { collection, getDocs } from "firebase/firestore";


const ProductList = () => {
  const [productos, setProductos,cartList, setCartList] = useState([]);

  const itemsCollectionRef = collection(db, "items");
  console.log(itemsCollectionRef)

  const getItems = async () => {
  const itemsCollection = await getDocs(itemsCollectionRef);
  setProductos(itemsCollection.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
  };

  useEffect(() => {
    getItems();
  }, []);
  return (
    <div className="product-container">
      {productos.map((producto) => (
      <Card key={producto.id} producto={producto}/>
      ))}
    </div>
  )}


export default ProductList;