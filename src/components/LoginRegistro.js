import React, {useContext, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import UserContext from '../context/users/UserContext'



const LoginRegistro = () => {

  const userCtx = useContext(UserContext)
	const { loginUser, handleChange2, loginData, verifyingToken, authStatus  } = userCtx

  const navigate = useNavigate()


  useEffect(() => {
	if(authStatus){	
    verifyingToken()
  	navigate('/carrito')}
   
	
	}, [authStatus])

  if (authStatus) return null


  const sendData = (event) => {
		event.preventDefault()
		loginUser(loginData)
	}



  return (
    
    <form onSubmit={(e) => sendData(e)}>
      <div className='form-group'>
        <label htmlFor='email'>Email</label>
        <input id='email' name='email' onChange={(e)=>{handleChange2(e)}} type="email" />
      </div>
      <div className='form-group'>
        <label htmlFor='password'>Password</label>
        <input id='password' name='password' onChange={(e)=>{handleChange2(e)}} type="password" />
      </div> 
    <button type='submit'>Iniciar Sesión</button>
  </form>
  )
}

export default LoginRegistro
