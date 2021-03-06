import React, { Fragment } from 'react'
import data from '../../data/CaseStudies.json'
import './style.scss'

const CaseStudies = () => {
  return (
    <div className="caseStudies">
      <h2>CASE STUDIES</h2>
      <div className="caseStudies__items-container">
        {data.map((c, index) => {
          return (
            <Fragment>
              <div key={index} className="caseStudies__items-container--text">
                <img
                  className="img-dark"
                  src={process.env.PUBLIC_URL + '/assets/' + c.img}
                  alt={c.img}
                />
                <div className={'Card text-' + index}>
                  <h3>{c.title}</h3>
                  <p className="subtitle">{c.subtitle}</p>
                  <p>{c.description}</p>
                  <button>READ CASE STUDY</button>
                </div>
              </div>
              <a href="https://medium.com/@matechstudios" target="blank">
                <button className="caseStudies__items-container--button">READ CASE STUDY</button>
              </a>
            </Fragment>
          )
        })}
        <button className="caseStudies__items-container--button-cases">
        <a href="https://medium.com/@matechstudios" target="blank">
          VIEW ALL CASE STUDIES
        </a>
        </button>
      </div>
    </div>
  )
}

export default CaseStudies
