import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import NavBar from  './components/NavBar/NavBar';
import ProductList from "./components/ProductList/ProductList";
import Home from "./components/Home/Home"
import ItemProduct from "./components/ItemProduct/ItemProduct";


function App() {
  const [productos, setProductos] = useState([]);

  const getProductos = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setProductos(res.data);
  };

  useEffect(() => {
    getProductos();
  }, []);
console.log (productos)
  
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
