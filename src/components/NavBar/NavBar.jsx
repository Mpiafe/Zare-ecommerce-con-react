import  "./navBar.css";


import CartWidget from "../CartWidget/CartWidget";



const NavBar = () => {
  return (
    <nav className="container">
        <p>logo</p>
  
        <p>Productos</p>
        
        <CartWidget/>
    </nav>
  )
}

export default NavBar;