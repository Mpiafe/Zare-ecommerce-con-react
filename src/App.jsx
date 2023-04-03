import './App.css';
import { useState, useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import db from "../db/firebase-config.js";
import { collection, getDocs } from "firebase/firestore";
import Home from "./components/Home/Home";
import CartWidget from './components/CartWidget/CartWidget';
import ProductList from './components/ProductList/ProductList';





function App() {

  const [productos, setProductos] = useState([]);
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
    
    <div>
      
        <Routes> 
        <Route path= "/" element = {<Home/>} />
        <Route path= "/CartWidget" element= {<CartWidget/>}/>
        </Routes>
        <ProductList productos= {productos}/>

    
       
    </div>
    
  )
}

export default App
