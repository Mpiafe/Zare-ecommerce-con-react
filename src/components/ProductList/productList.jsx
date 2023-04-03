import Card from "../Card/Card";


const ProductList = ({ productos }) => {
  console.log (productos)
  return (
    <div>
      {productos.map((producto) => (
      <Card key={producto.id} producto={producto}/>
      ))}
    </div>
  )}


export default ProductList;
