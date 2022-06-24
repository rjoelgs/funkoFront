import React from 'react'
import { Link } from 'react-router-dom'
import LoginRegistro from '../components/LoginRegistro'


const Login = () => {
  return (
    <div className='cajaFormulario'>
      <h1>Iniciar Sesión</h1>
      <LoginRegistro /> 
      <p>no tienes cuenta?{' '} <Link to='/registro'>Registrarse</Link></p>
    </div>
  ) 
}

export default Login
