import React from 'react'
import { Link } from 'react-router-dom'
import Slider from '../slider/slider'
import data from '../../data/OurServices.json'
import './style.scss'
import Items from './Items'

const OurServices = () => {
  return (
    <div className='ourServices'>
      <h2 >OUR SERVICES</h2>
      <div className='ourServices__service'>
       <Slider />
      </div>
      <div className='ourServices__services'>

         {data.map( e => {
           return (
           <Items imgDark={e.img} title={e.title} description={e.description} imgLight={e.imgL} />
           )
         })}   
      </div>
      <h3>Got a big idea? Let us help you turn your dream into software!</h3>      
      <button><Link to='/our-services'>VIEW OUR SERVICES</Link></button>
    </div>
  )
}

export default OurServices
