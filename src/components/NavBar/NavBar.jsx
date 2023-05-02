import  "./navBar.css";
import { Link } from "react-router-dom";



const NavBar = () => {

  return (
   <div className="nav-container">
    <nav className="navbar">
      <Link className="navbar-logo" to= {"/"}>
        <img src= "./images/logo.jpg"/>
      </Link>
      <Link className="seeCarrito" to= {"/Cart"}>🛒</Link>
    </nav>
   </div>
    
  )
}



export default NavBar;