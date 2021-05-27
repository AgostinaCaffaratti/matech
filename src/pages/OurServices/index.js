import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/header'
import Hero from '../../components/hero'
import data from '../../data/BussinesProcess.json'
import './style.scss'


const OurServices = () => {
  return (
    <div>
          <Header />
      <Hero />
{data.map( e => {
  return(
    
    <div className='service-desc'>
      <h3>{e.title}</h3>
      <p className='service-desc__subtitle'>{e.subtitle}</p>
      <p>{e.description}</p>
    </div>

  )
})}
<Footer />
    </div>
  )
}

export default OurServices
