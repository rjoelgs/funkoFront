import React from 'react'
import { useNavigate } from 'react-router-dom'




const Header = () => {

  const navigate = useNavigate()

  return (
    <header>
      <div>
        <span className='headerItem'>The Mandalorian</span>
        <p className='headerItem'>From Star Wars: The Mandalorian is The Child with Cup as a stylized Pop! vinyl bobblehead from Funko!</p>
        <h2 className='headerItem'>$350</h2> 
        <button className='headerItem' onClick={()=>{navigate('productos/62a4107e9de057d509ebfcb7')}}>Ver mas...</button> 
        <img id='imgTop' alt='top' src='https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSysuNUQlkzyniX2wG9GXhBOm9BK-yFhqYI6vAVfoujZTz9YJ71Qx14-WYfT_zQH7fVcSNBuroRfOpP&usqp=CAc' />
        <img id='fondo' alt='fondo' src='https://www.latercera.com/resizer/R3pb95xktGNvj-10L5RDBohi278=/800x0/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/RGYLQWSTE5B5PAQPHUQ4GKGQRM.jpg' />
      </div>

    </header>
  )
}

export default Header
