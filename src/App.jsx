import './App.css';
import { Route, Routes } from "react-router-dom";
import NavBar from './components/nav/NavBar';
import Home from "./components/home/Home";
import { CartProvider } from './context/CartContext';
import CartContent from './components/cart/CartContent';



function App() {


  
return (
    
  
    <>
    <CartProvider>
       <NavBar/>
          <Routes> 
            <Route path= "/" element = {<Home/>} />
            <Route path= "/Cart" element = {<CartContent/>}/>
          </Routes>
    </CartProvider>
    </>
    
  )
}

export default App