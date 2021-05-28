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
  
  {/* <Carousel.Item>
    <img
      className="d-block w-100"
      src={process.env.PUBLIC_URL + '/assets/application-development.gif'}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={process.env.PUBLIC_URL + '/assets/application-development.gif'}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item> */}
</Carousel>
  )
}

export default Slider
