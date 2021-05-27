import React from 'react'
import data from '../../data/OurServices.json'
import './style.scss'

const OurServices = () => {
  return (
    <div className='ourServices'>
      <h2 >OUR SERVICES</h2>
      <div className='ourServices__service'>
        {data.map((service,index) => {
        return (
          <div key={index} className='ourServices__service__item' >
            <img src={process.env.PUBLIC_URL + '/assets/' + service.img} alt={service.img}></img>
            <h4>{service.title}</h4>
            <p>{service.description}</p>
          </div>
        )
      })}
      </div>
      
      <h3>Got a big idea? Let us help you turn your dream into software!</h3>
      <button>VIEW OUR SERVICES</button>
    </div>
  )
}

export default OurServices
