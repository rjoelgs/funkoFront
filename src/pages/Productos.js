import React, { useContext, useEffect } from 'react';
import Tarjeta from '../components/Tarjeta';
import FunkoContext from '../context/funkos/FunkoContext';



const Productos = () => {

  const ctx = useContext(FunkoContext);
  const { getFunkos, funkos } = ctx;

  useEffect(() => {
		getFunkos();
    console.log('funkos', funkos);
	},[])

  

  return (
    <div className='productos'>
     {funkos.map((funko)=>{
      return <Tarjeta key={funko.id} data={funko}/>
     })}
    </div>
  )
}

export default Productos
