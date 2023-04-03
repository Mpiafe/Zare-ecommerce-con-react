import { useState, useEffect } from "react";
import { getDocs } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import ProductList from "../ProductList/ProductList";


const ItemListContainer = () => {

const [productos, setProductos] = useState( [ ] )
const itemsCollectionRef = collection(db, "items");
const getItems = async () => {
const itemsCollection = await getDocs(itemsCollectionRef);
setProductos(itemsCollection.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
);
};
    
useEffect(() => {
getItems();
}, []);

  return (
    <ProductList productos={productos}/>
  )
}

export default ItemListContainer