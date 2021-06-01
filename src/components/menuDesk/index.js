import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'
import {ReactComponent as Twitter } from '../../Icons/twLink.svg'
import {ReactComponent as Medium } from '../../Icons/MeLink.svg'
import {ReactComponent as Linkedin } from '../../Icons/InLink.svg'
import ToggleButton from '../toggleButton'


const MenuDesk = () => {
  return (
    <nav className="menuDesk">
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/our-services">Our Services</Link>        
      </div>
      <div>
        <a href="https://medium.com/@matechstudios" target='blank'>Case Studies</a>
      </div>
      <div>
        <Link to="/about-us">About Us</Link>
      </div>
      <div>
        <Link to="/contact-us">Contact Us</Link>
      </div>
      <div className="menuDesk__icons">
        <a href="https://www.linkedin.com/company/matech-studios/" target="blank">
          <Linkedin className='icon' />
        </a>
        <a href="https://twitter.com" target="blank">
         <Twitter className='icon' />
        </a>
        <a href="https://medium.com/@matechstudios" target="blank">
         <Medium className='icon' />
        </a>
      </div>
      <div className='toggleButton'>
        <ToggleButton />
        </div>
    </nav>
  )
}

export default MenuDesk
