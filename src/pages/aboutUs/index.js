import React from 'react'
import data from '../../data/aboutUs.json'
import './style.scss'
import Layout from '../../components/Layout'
import Hero from '../../components/hero'

const AboutUs = () => {
  return (
    <Layout>
    <div className='aboutUsHero'>
<Hero />
    </div>
      <div className='aboutUs'>  
      <div className='aboutUs__desk'>      
      <div className='aboutUs__desk--item'>
      <h2>Our Purpose (WHY)</h2>
      <p>Embrace the power of technology to improve people’s lives. </p>
      <h2>Our Vision (WHAT)</h2>
      <p>Top-notch technology company actively impacting people’s lives. </p>    
      </div>
      <img src={process.env.PUBLIC_URL + '/assets/AboutUsPorpDesk.png'} alt='PoprImg' />
      </div>    
 {data.map((e, index) => {
        return (
          
<div className={'text-' + index}>
 <div className='aboutUs__card'>
           {e.img && <img src={process.env.PUBLIC_URL + '/assets/' + e.img} alt={e.img} />}
           <div className={'desc-' + index}>
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

 
</div>
           
          
          </div>

         
        )
      })}
      </div>
    </Layout>
      
     
     
  )
}

export default AboutUs
