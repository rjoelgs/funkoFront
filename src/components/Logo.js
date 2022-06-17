import React from 'react'
import svg from '../sources/hippopotamus-svgrepo-com.svg'

const Logo = () => {
  return (
    <div className='logo headerItem'>
      <img width='30px' src={svg} alt="hippopotamus" />  
      <h1>funkoLIFE</h1>
    </div>
  )
}

export default Logo
