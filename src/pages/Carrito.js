import React, {useContext} from 'react'
import CarContext from '../context/car/CarContext'

const Carrito = () => {

  const ctxCar = useContext(CarContext);
  const { car } = ctxCar;
  const Total = car.reduce((total, item) => total + item.precio, 0);
  


  
  return ( 
    
    <div className='carrito'>
      
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Nombre</th>
            <th>Colección</th>
            <th>Precio</th>
          </tr>
        </thead> 
        <tbody>
           {car.map((element)=>{
             return <tr key={element.id}>
             <td><img className='imgTable' alt={element.nombre} src={element.imagen} /></td>
             <td>{element.nombre}</td>
             <td>{element.coleccion}</td>
             <td>{element.precio}</td>
              </tr>
            })}
        </tbody>
      </table> 
        <h2>Total: {''}{Total}</h2>
    </div>
  )
}

export default Carrito
