import './App.css';
import { Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import Home from "./components/Home/Home";
import { CartProvider } from './context/CartContext';



function App() {


  
return (
    
  
    <>
    <CartProvider>
       <NavBar/>
          <Routes> 
            <Route path= "/" element = {<Home/>} />
          </Routes>
    </CartProvider>
    </>
    
  )
}

export default App