import React from 'react'
import Menu from '../Menu'


import './style.scss'

const Header = () => {
  return (
    <div className='header'>
      <div>
       <img src={process.env.PUBLIC_URL + "/assets/LogoHorizontal.png"} alt="logo" />
      </div>
      <Menu />            
    </div>
  )
}

export default Header
