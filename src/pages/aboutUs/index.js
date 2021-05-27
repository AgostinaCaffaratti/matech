import React from 'react'
import Header from '../../components/header'
import Hero from '../../components/hero'
import Footer from '../../components/Footer'
import data from '../../data/aboutUs.json'
import './style.scss'

const AboutUs = () => {
  return (
    <div>
      <Header />
      <Hero />
      <div className='aboutUs'>
 {data.map((e) => {
        return (
          <div className='aboutUs__card'>
            <h2>{e.title}</h2>
            {e.description1 && <p className='aboutUs__card--desc'>{e.description1}</p>}
            {e.description2 && <p>{e.description2}</p>}
            {e.description &&
              e.description.map((d) => {
                return (
                  <p className='aboutUs__card--val'>
                    <b>{d.bold}</b>
                    {d.text}
                  </p>
                )
              })}
          </div>
        )
      })}
      </div>
     
      <Footer />
    </div>
  )
}

export default AboutUs
