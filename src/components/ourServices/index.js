import React from 'react'
import Slider from '../slider/slider'
import './style.scss'

const OurServices = () => {
  return (
    <div className='ourServices'>
      <h2 >OUR SERVICES</h2>
      <div className='ourServices__service'>
       <Slider />
      </div>      
      <h3>Got a big idea? Let us help you turn your dream into software!</h3>
      <button>VIEW OUR SERVICES</button>
    </div>
  )
}

export default OurServices
