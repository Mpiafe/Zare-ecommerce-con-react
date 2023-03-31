import  "./Home.css";
import { BsCreditCard2BackFill} from 'react-icons/bs';
import { HiShoppingBag }  from 'react-icons/hi';
import { TbTruckDelivery} from 'react-icons/tb';
import { AiTwotoneLike } from 'react-icons/ai';


 
 const Home = () => {
   return (

    <aside className="avisos">
      
        <div className="iconos">
          <HiShoppingBag/>
          <p>Elegi lo que queres comprar</p>
          
          <TbTruckDelivery />
          <p>Elegi donde lo queres recibir</p>
          <BsCreditCard2BackFill />
          <p>Elegi como lo queres pagar</p>
          <AiTwotoneLike />
          <p>Recibilo y disfrutalo</p>
        </div> 

        
    </aside>
   )
 }
 
 export default Home