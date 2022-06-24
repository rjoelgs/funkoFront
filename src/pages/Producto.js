import React, {useEffect, useContext} from 'react'
import { useParams } from 'react-router-dom'
import FunkoContext from '../context/funkos/FunkoContext';



const Producto = () => {
    const { id } = useParams();
    console.log(id)

    const ctx = useContext(FunkoContext);
    const { getFunko, funko } = ctx;


    useEffect(()=>{
        getFunko(id)
    },[])

  return (
    <div className='tarjetaDetalle'>
    {funko && (<>
      <img className='imgDetalle' alt='imgDetalle' src={funko.imagen} />
      <div>
        <h2>Nombre:{' '}<span>{funko.nombre}</span></h2>
        <h2>colección:{' '}<span>{funko.coleccion}</span></h2>
        <h2 className='descripcion'>descripción: {' '}{funko.descripcion}</h2>
        <h2>precio: {''}<span>{`$${Number(funko.precio).toFixed(2)}`}</span></h2>
      </div>
    </>

    )}
    
    </div>

  )
}

export default Producto
