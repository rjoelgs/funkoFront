import React from 'react'

const Tarjeta = ({data, carrito, setCarrito}) => {

  const {id, nombre, precio, imagen} = data;
  
  const funkoSeleccionado = {
    id,
    nombre,
    precio,
    imagen
  }
  

  const handleClick=(e)=> {
    setCarrito(...carrito, funkoSeleccionado);
  }

  return (
    <div className='tarjeta'>
        <img className='imgTarjeta' alt={data.nombre} src={data.imagen} />
        <hr/>
        <h3>{data.nombre}</h3>
        <h3>{data.precio}</h3>
        <h3>{data.coleccion}</h3>
        <button onClick={(e) => handleClick(e)}>Agregar al carrito...</button>
      
    </div>
  )
}

export default Tarjeta
