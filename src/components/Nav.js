import React, {useContext, useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import UserContext from '../context/users/UserContext';
import logoutImg from '../sources/logout-svgrepo-com.svg';
import Logo from './Logo';




const Nav = () => {
  const location = useLocation();
  const urlActual = location.pathname;

  const ctx = useContext(UserContext);
  const {logout, authStatus} = ctx

  const [logoutMessage, setLogoutMessage]= useState(false)

  return (
    <>
        <nav>
          <Logo />
          <Link to='/productos' className={`${urlActual === '/productos'? 'active' : null}`}>Productos</Link>

          {authStatus  ? (<>
          
          <Link to='/carrito' className={`${urlActual === '/carrito'? 'active' : null}`}>Carrito</Link>
          {!logoutMessage? <img alt="logout" onMouseOver={()=>{setLogoutMessage(true)}} onMouseOut={()=>{setLogoutMessage(!logoutMessage)}} src={logoutImg} />
                          : <h2 className='logout' onMouseOut={()=>{setLogoutMessage(false)}} onClick={()=>{logout()}}>logout</h2>}
          
          </>) : (<>
          <Link to='/carrito' className={`${urlActual === '/carrito'? 'active' : null}`}>Carrito</Link>
          <Link to='/iniciar-sesion' className={`${urlActual === '/iniciar-sesion'? 'active' : null}`}>Iniciar Sesion</Link>
        
          </>)} 
        </nav>
    </>
  )
}

export default Nav
