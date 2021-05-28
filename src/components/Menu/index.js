import React, { useState } from 'react'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

const Menu = () => {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)
  return (
    <Fragment>   
    <div>
 <div className="navBar">
       <img src={process.env.PUBLIC_URL + '/assets/Hamburger.svg'} alt='hamburger-menu' onClick={showSidebar} />
      </div> 
<nav className={sidebar ? 'menu active' : 'menu'} onClick={showSidebar}>  
      <div className="menu__logo">
        <img src={process.env.PUBLIC_URL + '/assets/LogoHorizontal.png'} alt="logo" />
      </div>
      <div className="menu__section">
        <Link className="menu__section--link" to='/'>Home</Link>
      </div>
      <div className="menu__section">
        <Link className="menu__section--link" to='/our-services'>Our Services</Link>
      <div className="menu__section__services">
        <p>Solution Development</p>
        <p>Quality Engineering</p>
        <p>Business Processes</p>
        <p>Solution Integration</p>
        <p>DevOps Mentality</p>
      </div>
      </div>
      <div className="menu__section">
        <Link className="menu__section--link" to='/case-studies'>Case Studies</Link>
      </div>
      <div className="menu__section">
        <Link className="menu__section--link" to='/about-us'>About Us</Link>
      </div>
      <div className="menu__section">
        <Link className="menu__section--link" to='/contact-us'>Contact Us</Link>
      </div>
      <div className="menu__section" >
        <div className="menu__section__icons" >
          <img className="menu__section__icons--in" src={process.env.PUBLIC_URL + '/assets/InLink.svg'} alt="linkedinLogo" />
          <img src={process.env.PUBLIC_URL + '/assets/twLink.svg'} alt="twitterLogo" />
        </div>
      </div>
    </nav>
    </div>
   
    </Fragment>
    
  )
}

export default Menu
