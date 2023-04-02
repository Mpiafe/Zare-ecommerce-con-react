import './App.css';
import { useState, useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import NavBar from  './components/NavBar/NavBar';
import Home from "./components/Home/Home"
import ProductList from "./components/ProductList/productList";
import ItemProduct from "./components/ItemProduct/ItemProduct";
import db from "../db/firebase-config.js";
import { collection, getDocs } from "firebase/firestore";



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
      
        <NavBar />
           
        <Routes> 
        <Route path= "/" element = {<Home/>} />
        <Route path= "/productos" element= {<ProductList productos ={productos}/>}/>
        <Route path= "/productos/:id" element= {<ItemProduct productos = {productos}/>} />
        </Routes>
       
    </div>
    
  )
}

export default App
