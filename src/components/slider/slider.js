import React from 'react'
import {Carousel} from 'react-bootstrap'
import Items from '../ourServices/Items'
import data from '../../data/OurServices.json'

const Slider = () => {
  return (
   <Carousel controls={false} indicators={false}>
{data.map( d => {
  return(
<Carousel.Item>
    <Items img={d.img} title={d.title} description={d.description} />
  </Carousel.Item>
  )
})}    
</Carousel>
  )
}

export default Slider
