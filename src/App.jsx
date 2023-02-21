import './App.css'
import ItemContainer from './components/ItemsContainer/ItemContainer';
import NavBar from  './components/NavBar/NavBar';


const App= () => {
 

  return (
    <div>
      
      <NavBar />
     
      <h1>De Viaje</h1>
      <h2>Tienda de accesorios de viaje</h2>
      <ItemContainer txtsaludo = "Hola Pia!!!!"/>
    </div>
  )
}

export default App
