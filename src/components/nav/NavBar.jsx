import  "./navBar.css";
import { Link } from "react-router-dom";
import TotalItem from "../Cart/TotalItem";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";




const NavBar = () => {
  const { cart }= useContext (CartContext)
  return (
   <div className="nav-container">
    <nav className="navbar">
      <Link className="navbar-logo" to= {"/"}>
        <img src= "./images/logo.jpg"/>
      </Link>
      <Link className="seeCarrito" to= {"/Cart"}>
        🛒
        {cart.length >0 ?<TotalItem/> : null }
        
      </Link>
    </nav>
   </div>
    
  )
}



export default NavBar;