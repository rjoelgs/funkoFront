import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Nav = () => {
  const location = useLocation()
  const urlActual = location.pathname
  
  return (
    <>
        <nav>
          <Link to='/'><h2 className={`${urlActual === '/'? 'active' : null}`}>Home</h2></Link>
          <Link to='/productos'><h2 className={`${urlActual === '/productos'? 'active' : null}`}>Productos</h2></Link>
          <Link to='/registro'><h2 className={`${urlActual === '/registro'? 'active' : null}`}>Crear Usuario</h2></Link>
          <Link to='/iniciar-sesion'><h2 className={`${urlActual === '/iniciar-sesion'? 'active' : null}`}>Iniciar Sesion</h2></Link>
          <Link to='/carrito'><h2 className={`${urlActual === '/carrito'? 'active' : null}`}>Carrito</h2></Link>
        </nav>
    </>
  )
}

export default Nav
