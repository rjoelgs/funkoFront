
import React, {useEffect, useState} from 'react'
import clienteAxios from '../config/axios'
import Tarjeta from './Tarjeta'


const Tops = () => {

  const getTops = async()=>{
    try{
     const resp = await clienteAxios.get('/api/funkos?top=true')
     setTopFunkos(resp.data)
     console.log(resp.data)
    }catch(error){
      console.log(error)
    }
  }

  useEffect(()=>{
    getTops()
  },[])

  const [topFunkos, setTopFunkos]= useState([])

  return (
    <section>
      <h2>Mas Vendidos</h2>
        <div className='tops'>
           {topFunkos.map((funko)=>(
          <Tarjeta key={funko.id} data={funko}/>
            ))}
        </div>

    </section>
  )
}

export default Tops
