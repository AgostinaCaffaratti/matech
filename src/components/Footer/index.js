import React from 'react'
import './style.scss'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__img">
        <img src={process.env.PUBLIC_URL + '/assets/LogoHorizontal.png'} alt="Logo" />
      </div>
      <div className="footer__follow">
        <div className="footer__follow__links">
          <h4>Follow Us</h4>
          <div className="footer__follow__links__icons">
            <img src={process.env.PUBLIC_URL + '/assets/InLink.svg'} alt="LinkedinLink" />
            <img src={process.env.PUBLIC_URL + '/assets/twLink.svg'} alt="LinkedinLink" />
            <img
              className="footer__follow__links__icons--m"
              src={process.env.PUBLIC_URL + '/assets/MeLink.svg'}
              alt="LinkedinLink"
            />
          </div>
        </div>
        <div className="footer__mail" >
          <p>info@matechstudios.com</p>
        </div>
        <button>CONTACT US</button>
      </div>
      <div className="footer__pages">
 <div className="footer__pages__site"   >
        <h4>Site map</h4>
        <p>Home</p>
        <p>Our Services</p>
        <p>Case Studies</p>
        <p>About Us</p>
        <p>Contact Us</p>
      </div>
      <div className="footer__pages__services">
        <h4>Our Services</h4>
        <p>Solution Development</p>
        <p>Quality Engineering</p>
        <p>Business Processes</p>
        <p>Solution Integration</p>
        <p>DevOps Mentality</p>
      </div>
      </div>     
      <p className="footer__rights">All rights reserved MATECH studios 2021</p>
    </div>
  )
}

export default Footer
