import React from 'react'
import './style.scss'

const Items = ({img, title, description}) => {
  console.log()
  return (
    <div className='items'>
      <div className='items__img'>
        <img src={process.env.PUBLIC_URL + '/assets/' + img} alt='Application-development gif' />
      </div>
      <div className='items__info'>        
      <h4>{title} </h4>
      <p>{description} </p>
      </div>
    </div>
  )
}

export default Items