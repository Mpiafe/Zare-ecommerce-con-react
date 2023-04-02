import  "./navBar.css";
import { Link } from "react-router-dom";
import { FaStore } from 'react-icons/fa'
import CartWidget from "../CartWidget/CartWidget";
import { BiSearchAlt }  from 'react-icons/bi';






const NavBar = () => {

  return (
   
    <nav className="container">
      <Link to= "/" >
        <img className="logo" src="/images/NuevoLogo.png"/>
      </Link>
       
          <form className="buscar">
            <input type="text"  placeholder="Que estas buscando??"/>
             <div className="btn">
              <BiSearchAlt/>
            </div>
          </form>

          
          <Link to="/productos">
             <div className="productos">
              <FaStore/>
              <p>Tienda</p>
             </div>
          </Link>
       
       <CartWidget/>
    
    </nav>
  )
}

export default NavBar;