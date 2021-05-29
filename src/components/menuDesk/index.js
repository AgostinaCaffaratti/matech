import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

const MenuDesk = () => {
  return (
    <nav className="menuDesk">
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/our-services">Our Services</Link>
        {/* <div className="menuDesk_section__services">
        <p>Solution Development</p>
        <p>Quality Engineering</p>
        <p>Business Processes</p>
        <p>Solution Integration</p>
        <p>DevOps Mentality</p>
      </div> */}
      </div>
      <div>
        <Link to="/">Case Studies</Link>
      </div>
      <div>
        <Link to="/about-us">About Us</Link>
      </div>
      <div>
        <Link to="/contact-us">Contact Us</Link>
      </div>

      <div className="menuDesk__icons">
        <a href="https://www.linkedin.com/company/matech-studios/" target="blank">
          <img src={process.env.PUBLIC_URL + '/assets/InLink.svg'} alt="linkedinLogo" />
        </a>
        <a href="https://twitter.com" target="blank">
          <img src={process.env.PUBLIC_URL + '/assets/twLink.svg'} alt="twitterLogo" />
        </a>
        <a href="https://medium.com/@matechstudios" target="blank">
          <img src={process.env.PUBLIC_URL + '/assets/meLink.svg'} alt="twitterLogo" />
        </a>
      </div>
    </nav>
  )
}

export default MenuDesk
