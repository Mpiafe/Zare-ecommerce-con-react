import  "./navBar.css";
import { HiOutlineChatAlt2 }  from 'react-icons/hi';
import { AiOutlineUserSwitch }from 'react-icons/ai';
import CartWidget from "../CartWidget/CartWidget";
import { BiSearchAlt }  from 'react-icons/bi';





const NavBar = () => {
  return (
    <nav className="container">
     <img className="logo" src="/images/NuevoLogo.png"/>
      
       
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
       
       <CartWidget/>
    
  </nav>
  )
}

export default NavBar;