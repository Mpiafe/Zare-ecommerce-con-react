import './App.css';
import { useState, useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import NavBar from  './components/NavBar/NavBar';
import ProductList from "./components/ProductList/ProductList";
import Home from "./components/Home/Home"
import ItemProduct from "./components/ItemProduct/ItemProduct";
import db from "../db/firebase-config";
import { collection, getDocs } from 'firebase/firestore';

function App() {
  const [productos, setProductos] = useState([]);
  const productosCollectionRef = collection(db, "productos");

  const getProductos = async () => {
    const productosCollection = await getDocs(productosCollectionRef);
    productosCollection.docs.map((doc)=>({...doc.data(),id:doc.id}))
   
  };

  useEffect(() => {
    getProductos();
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
