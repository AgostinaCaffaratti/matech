import React from 'react'
import Value from './value'
import './style.scss'

const OurValues = () => {
  return (
    <div className="ourValues">
      <h2>OUR VALUES</h2>
      <div className="ourValues__items-container">
        <div className="ourValues__items-container__values-row">
        <div className="ourValues__items-container__values-row--item">

          <Value title={'Transparency'}  />
        </div>
          <Value title={'Continuous'} title2={'improvement'} />
        </div>
        <div className="ourValues__items-container__values-row" >
        <div className="ourValues__items-container__values-row--item">

          <Value title={'Passion '} />
        </div>

          <Value title={'Innovation'} />
        </div>
        <div className="ourValues__items-container__values-lastRow">

        <Value title={'Team spirit '} />
        </div>
      </div>
      <button>KNOW MORE</button>
    </div>
  )
}

export default OurValues
