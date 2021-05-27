import React from 'react'
import './style.scss'

const Menu = () => {
  return (
    <div className="menu">
      <div className="menu__logo">
        <img src={process.env.PUBLIC_URL + '/assets/LogoHorizontal.png'} alt="logo" />
      </div>
      <div className="menu__section">
        <p>Home</p>
      </div>
      <div className="menu__section">
        <p>Our Services</p>
      <div className="menu__section__services">
        <p>Solution Developmen</p>
        <p>Quality Engineering</p>
        <p>Business Processes</p>
        <p>Solution Integration</p>
        <p>DevOps Mentality</p>
      </div>
      </div>
      <div className="menu__section">
        <p>Case Studies</p>
      </div>
      <div className="menu__section">
        <p>About Us</p>
      </div>
      <div className="menu__section">
        <p>Contact Us</p>
      </div>
      <div className="menu__section" >
        <div className="menu__section__icons" >
          <img className="menu__section__icons--in" src={process.env.PUBLIC_URL + '/assets/InLink.svg'} alt="linkedinLogo" />
          <img src={process.env.PUBLIC_URL + '/assets/twLink.svg'} alt="twitterLogo" />
        </div>
      </div>
    </div>
  )
}

export default Menu
