import React from 'react'
import Hero from '../../components/hero'
import Layout from '../../components/Layout'
import data from '../../data/BussinesProcess.json'
import './style.scss'

const OurServices = () => {
  return (
    <Layout>
    <div className='ourServicesHero'>
    <Hero />
    </div>
    
      {data.map((e, index) => {
        return (
          <div className="service-desc">  
          <img src={process.env.PUBLIC_URL + '/assets/' + e.img} alt={e.img} />     
          <div className={'text-' + index}>
            <h3>{e.title}</h3>
            <p className="service-desc__subtitle">{e.subtitle}</p>
            <p>{e.description}</p>
          </div>   
          </div>
        )
      })}
    </Layout>
  )
}

export default OurServices
