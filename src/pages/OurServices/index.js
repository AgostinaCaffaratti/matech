import React from 'react'
import Layout from '../../components/Layout'
import data from '../../data/BussinesProcess.json'
import './style.scss'

const OurServices = () => {
  return (
    <Layout>
      {data.map((e) => {
        return (
          <div className="service-desc">
            <h3>{e.title}</h3>
            <p className="service-desc__subtitle">{e.subtitle}</p>
            <p>{e.description}</p>
          </div>
        )
      })}
    </Layout>
  )
}

export default OurServices
