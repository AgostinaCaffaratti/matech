import React, { Fragment } from 'react'
import data from '../../data/CaseStudies.json'
import './style.scss'

const CaseStudies = () => {
  return (
    <div className='caseStudies'>
      <h2>CASE STUDIES</h2>
      <div className='caseStudies__items-container'>
        {data.map( (c,index) => {
          return(
            <Fragment>
            <div key={index} className='caseStudies__items-container--text'>            
              <h3>{c.title}</h3>
              <p className='subtitle'>{c.subtitle}</p>
              <p>{c.description}</p>
            </div>
              <button>READ CASE STUDY</button>
            </Fragment>
          )
        })}
      </div>
    </div>
  )
}

export default CaseStudies
