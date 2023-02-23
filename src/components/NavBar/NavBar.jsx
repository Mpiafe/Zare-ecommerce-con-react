import  "./navBar.css";
import { HiOutlineChatAlt2 }  from 'react-icons/hi';
import { AiOutlineUserSwitch }from 'react-icons/ai';
import CartWidget from "../CartWidget/CartWidget";





const NavBar = () => {
  return (
    <nav className="container">
     <img className="logo" src="/images/logoViaje.png"/>
      
       
       <form className="search">
        <input type="search"  placeholder="Que estas buscando??"/>
        <button className="btn" type="submit" >Search</button>
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