import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../header'
import './style.scss'

const Hero = () => {
  return (
    <div className='hero'>
    <Header />
      <h1 className='hero__title'>EMBRACE TECHNOLOGY, CHANGE LIVES</h1>
      <p className='hero__p'>Improve people’s lives with the power of technology </p>
      <Link to='/contact-us'>
      <button className='hero__button'>CONTACT US</button>
      </Link>
    </div>
  )
}

export default Hero
