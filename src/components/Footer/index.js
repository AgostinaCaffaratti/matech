import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

const Footer = () => {
  return (
    <Fragment>
<div className="footer">
      <div className="footer__img-mob">
        <img src={process.env.PUBLIC_URL + '/assets/LogoHorizontal.png'} alt="Logo" />
      </div>
      <div className="footer__img-desk">
        <img src={process.env.PUBLIC_URL + '/assets/LogoVertical.svg'} alt="Logo" />
      </div>
      <div className="footer__follow">
        <div className="footer__follow__links">
          <h4>Follow Us</h4>
          <div className="footer__follow__links__icons">
            <a href="https://www.linkedin.com/company/matech-studios/" target="blank">
              <img src={process.env.PUBLIC_URL + '/assets/InLink.svg'} alt="LinkedinLink" />
            </a>
            <a href="https://twitter.com" target="blank">
              <img src={process.env.PUBLIC_URL + '/assets/twLink.svg'} alt="twitterLink" />
            </a>
            <a href="https://medium.com/@matechstudios" target="blank">
              <img
                className="footer__follow__links__icons--m"
                src={process.env.PUBLIC_URL + '/assets/MeLink.svg'}
                alt="LinkedinLink"
              />
            </a>
          </div>
        </div>
        <div className="footer__mail">
          <p>info@matechstudios.com</p>
        </div>
        <Link to='/contact-us'>
        <button>CONTACT US</button>
        </Link>
      </div>
      <div className="footer__pages">
        <div className="footer__pages__services">
          <h4>Our Services</h4>
          <p>Solution Development</p>
          <p>Quality Engineering</p>
          <p>Business Processes</p>
          <p>Solution Integration</p>
          <p>DevOps Mentality</p>
        </div>
      </div>
    </div>
      <div className="footer__rights">
        <p>All rights reserved MATECH studios 2021</p>
      </div>
    </Fragment>
    
  )
}

export default Footer
