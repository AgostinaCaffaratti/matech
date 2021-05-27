import React from 'react'


import './style.scss'

const Header = () => {
  return (
    <div className='header'>
      <div>
       <img src={process.env.PUBLIC_URL + "/assets/LogoHorizontal.png"} alt="logo" />
      </div>
      <div className="header__hamburger">
       <img src={process.env.PUBLIC_URL + '/assets/Hamburger.svg'} alt='hamburger-menu' />
      </div>      
    </div>
  )
}

export default Header
