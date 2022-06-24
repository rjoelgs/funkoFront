import React from 'react'
import FormularioRegistro from '../components/FormularioRegistro'
import { Link } from 'react-router-dom'


const Register = () => {
  return (
    <div className='cajaFormulario'>
      <h1>Registro de Usuario</h1>
      <FormularioRegistro /> 
      <p>ya tienes cuenta?{' '} <Link to='/iniciar-sesion'>iniciar sesion</Link></p>
    </div>
  ) 
}

export default Register
