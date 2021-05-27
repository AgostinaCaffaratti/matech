import React from 'react'
import Header from '../header'
import './style.scss'

const Hero = () => {
  return (
    <div className='hero'>
    <Header />
      <h1 className='hero__title'>EMBRACE TECHNOLOGY, CHANGE LIVES</h1>
      <p className='hero__p'>Improve people’s lives with the power of technology </p>
      <button className='hero__button'>CONTACT US</button>
    </div>
  )
}

export default Hero
