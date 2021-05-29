import React, { useState } from 'react'
import Menu from '../Menu'


import './style.scss'

const Header = () => {

  const [header, setHeader] = useState(false)

  const changeBackground = () => {
    if(window.scrollY >= 10){
      setHeader(true)
    }else{
      setHeader(false)
    }
  }

  window.addEventListener('scroll', changeBackground)

  return (
    <div className={header ? 'header active' : 'header'}>
      <div>
       <img src={process.env.PUBLIC_URL + "/assets/LogoHorizontal.png"} alt="logo" />
      </div>
      <Menu />            
    </div>
  )
}

export default Header
