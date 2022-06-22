import React, {  useContext } from 'react'
import CarContext from '../context/car/CarContext'

const Tarjeta = ({data}) => {

  const ctxCar = useContext(CarContext);
  const { addCar } = ctxCar;
  
  const handleClick=(data)=> {

    addCar(data)
    
  }



  return (
    <div className='tarjeta'>
        <img className='imgTarjeta' alt={data.nombre} src={data.imagen} />
        <hr/>
        <h3>{data.nombre}</h3>
        <h3>{data.precio}</h3>
        <h3>{data.coleccion}</h3>
        <button onClick={() => handleClick(data)}>Agregar al carrito...</button>
        <button>... Ver más</button>
      
    </div>
  )
}

export default Tarjeta
