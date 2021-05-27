import React from 'react'
import CaseStudies from '../components/caseStudies'
import Layout from '../components/Layout'
import OurServices from '../components/ourServices'
import OurValues from '../components/ourValues'

const Home = () => {
  return (
    <div>
      <Layout>
        <OurServices />
        <CaseStudies />
        <OurValues />
      </Layout>
    </div>
  )
}

export default Home
