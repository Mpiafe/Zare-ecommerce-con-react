import  "./navBar.css";
import { Link } from "react-router-dom";



const NavBar = () => {

  return (
   <div className="nav-container">
    <nav className="navbar">
      <h1 className="navbar-logo">DeViaje Store</h1>
      <Link className="seeCarrito" to= {"/CartWidget"}>🛒</Link>
    </nav>
   </div>
    
  )
}

export default NavBar;