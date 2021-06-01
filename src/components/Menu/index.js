import React, { useEffect, useState } from 'react'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import MenuDesk from '../menuDesk'
import './style.scss'
import {ReactComponent as Hamburger} from './Hamburger.svg'
import {ReactComponent as Twitter } from '../../Icons/twLink.svg'
import {ReactComponent as Medium } from '../../Icons/MeLink.svg'
import {ReactComponent as Linkedin } from '../../Icons/InLink.svg'
import ToggleButton from '../toggleButton'


const Menu = () => {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  useEffect(() => {
    document.addEventListener('mousedown', () => {
      setSidebar(false)
    })
  })
  console.log(sidebar)
 
  return (
    <Fragment>   
    <div>
 <div className="navBar">
       <Hamburger onClick={showSidebar} className='hamburger'/>
      </div> 
<nav className={sidebar ? 'menu active' : 'menu'} onClick={showSidebar}>  
      <div className="menu__logo">
        <img src={process.env.PUBLIC_URL + '/assets/LogoHorizontal.svg'} alt="logo" />
      </div>
      <div className="menu__section">
        <Link className="menu__section--link" to='/'>Home</Link>
      </div>
      <div className="menu__section">
        <Link className="menu__section--link" to='/our-services'>Our Services</Link>     
      </div>
      <div className="menu__section">
        <a className="menu__section--link" href='https://medium.com/@matechstudios' target='blank'>Case Studies</a>
      </div>
      <div className="menu__section">
        <Link className="menu__section--link" to='/about-us'>About Us</Link>
      </div>
      <div className="menu__section">
        <Link className="menu__section--link" to='/contact-us'>Contact Us</Link>
      </div>
      <div className="menu__section" >
        <div className="menu__section__icons" >
        <a href='https://www.linkedin.com/company/matech-studios/' target='blank'>
         <Linkedin className='icon' />
        </a>
        <a href='https://twitter.com' target='blank'>
         <Twitter className='icon' />
        </a>
        <a href='https://medium.com/@matechstudios' target='blank'>

          <Medium className='icon' />
        </a>
        </div>
        <div className='toggleButton'>
        <ToggleButton />
        </div>
      </div>
    </nav>
    </div>
    <MenuDesk  />
   
    </Fragment>
    
  )
}

export default Menu
