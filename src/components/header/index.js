import React, { useState } from 'react'
import { Link } from 'react-router-dom'
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
      <Link to='/'>
       <img src={process.env.PUBLIC_URL + "/assets/LogoHorizontal.svg"} alt="logo" />
      </Link>
      <Menu />            
    </div>
  )
}

export default Header
