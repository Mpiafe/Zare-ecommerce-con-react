import  "./navBar.css";


import CartWidget from "../CartWidget/CartWidget";



const NavBar = () => {
  return (
    <nav className="container">
      <h1>logo</h1>
       
       <form className="search">
        <input type="search"  placeholder="Que estas buscando??"/>
        <button className="btn" type="submit" >Search</button>
       </form>

       <p>Productos</p>
       <CartWidget/>
  </nav>
  )
}

export default NavBar;