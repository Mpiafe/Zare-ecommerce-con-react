import  "./navBar.css";
import { Link } from "react-router-dom";
import { HiOutlineChatAlt2 }  from 'react-icons/hi';
import { GiLightBackpack }from 'react-icons/gi';
import CartWidget from "../CartWidget/CartWidget";
import { BiSearchAlt }  from 'react-icons/bi';
import { MdLuggage } from 'react-icons/md'





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


       <div className="mochilas">
       <GiLightBackpack/>
       <p>Mochilas</p>
       </div>


       <Link to="/productos">
       <div className="valijas">
        <MdLuggage/>
        <p>Valijas</p>
       </div>
       </Link>
       
       <CartWidget/>
    
  </nav>
  )
}

export default NavBar;