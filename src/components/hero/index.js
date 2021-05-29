import React from 'react'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

const Hero = () => {
  return (
    <Fragment> 
    <div className='hero'>
      <h1 className='hero__title'>EMBRACE TECHNOLOGY, CHANGE LIVES</h1>
      <p className='hero__p'>Improve people’s lives with the power of technology </p>
      <Link to='/contact-us'>
      <button className='hero__button'>CONTACT US</button>
      </Link>
    </div>
    </Fragment>
   
  )
}

export default Hero
