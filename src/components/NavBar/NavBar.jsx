import  "./navBar.css";
import { Link } from "react-router-dom";
import { HiOutlineChatAlt2 }  from 'react-icons/hi';
import { AiOutlineUserSwitch }from 'react-icons/ai';
import CartWidget from "../CartWidget/CartWidget";
import { BiSearchAlt }  from 'react-icons/bi';
import { BsShopWindow} from 'react-icons/bs'





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

       <div className="Ayuda">
       <HiOutlineChatAlt2/>
       <p>Ayuda</p>
       </div>

       <div className="MiCuenta">
       <AiOutlineUserSwitch/>
       <p>Mi cuenta</p>
       </div>


       <Link to="productos">
       <div className="Productos">
        <BsShopWindow/>
        <p>Productos</p>
       </div>
       </Link>
       
       <CartWidget/>
    
  </nav>
  )
}

export default NavBar;