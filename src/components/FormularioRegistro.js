import React, { useContext } from 'react'
import UserContext from '../context/users/UserContext'

const FormularioRegistro = () => {

  const userCtx = useContext(UserContext)
  const { registerUser, data, authStatus, handleChange } = userCtx

  const sendData = (event) => {
		event.preventDefault()
		registerUser(data)
	}

  return (
    <form onSubmit={(e) => {
      sendData(e)
    }}>
        <div className='form-group'>
            <label htmlFor='nombre'>Nombre</label>
            <input 	required onChange={(e) => {handleChange(e)}} name='username'  type='text' className='form-control' id='nombre' placeholder='Nombre' />
        </div>
        <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input  required onChange={(e) => {handleChange(e)}} name='email'  type='email' className='form-control' id='email' placeholder='Email' />
        </div>
        <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input required onChange={(e) => {handleChange(e)}} name='password' type='password' className='form-control' id='password' placeholder='Password' />
        </div>
        <button type='submit' className='btn btn-primary'>Registrar</button>
      
    </form>
  )
}

export default FormularioRegistro
