import React, {useContext} from 'react'
import PaypalButton from '../components/PaypalButton';
import CarContext from '../context/car/CarContext'
import UserContext from '../context/users/UserContext';
import { useNavigate } from 'react-router-dom';


const Carrito = () => {

  const ctxCar = useContext(CarContext);
  const userCtx = useContext(UserContext);
  const { car } = ctxCar;
  const Total = car.reduce((total, item) => total + item.precio, 0);
  const { authStatus }= userCtx;
  const navigate = useNavigate()


  
  return ( 
    
    <div className='carrito'>
    {car.length === 0? <h1>Agrege sus articulos al carrito</h1> :
    <>  
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
        <h3>Total: {''}{`$${Number(Total).toFixed(2)}`}</h3>
       {authStatus? <PaypalButton total={Total}/> : (<span onClick={()=>{navigate('/iniciar-sesion')}}>Inicia Sesión para poder comprar</span>)}
        </>
      }
      </div>
  )
}

export default Carrito
