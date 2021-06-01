import React from 'react'
import './style.scss'

const Items = ({imgDark,imgLight, title, description}) => {
  console.log()
  return (
    <div className='items'>
      <div className='items__img'>
        <img className='img-Dark' src={process.env.PUBLIC_URL + '/assets/gifs/' + imgDark} alt={imgDark}/> 
         <img className='img-Light' src={process.env.PUBLIC_URL + '/assets/gifs/' + imgLight} alt={imgLight}/>               
      </div>      
      <div className='items__info'>        
      <h4>{title} </h4>
      <p>{description} </p>
      </div>
    </div>
  )
}

export default Items