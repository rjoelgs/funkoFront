import React, {  useContext } from 'react'
import CarContext from '../context/car/CarContext'
import { useNavigate} from 'react-router-dom'

const Tarjeta = ({data}) => {

  const ctxCar = useContext(CarContext);
  const { addCar } = ctxCar;
  const navigate = useNavigate()
  
  const handleClick=(data)=> {
  
    addCar(data)
    
  }



  return (
    <div className='tarjeta'>
        <img className='imgTarjeta' alt={data.nombre} src={data.imagen} />
        <hr/>
        <h3>{data.nombre}</h3>
        <h3>{`$${Number(data.precio).toFixed(2)}`}</h3>
        <h3>{data.coleccion}</h3>
        <div className='botonesTarjeta'>
          <button onClick={() => handleClick(data)}>Agregar al carrito...</button>
          <button onClick={()=>{navigate(`/productos/${data.id}`)}}>... Ver más</button>
        </div>
      
    </div>
  )
}

export default Tarjeta
