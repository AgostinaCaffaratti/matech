import React from 'react'
import CaseStudies from '../../components/caseStudies';
import Hero from '../../components/hero';
import Layout from '../../components/Layout';
import OurServices from '../../components/ourServices';
import OurValues from '../../components/ourValues';
import './style.scss'


const Home = () => {
  return (
    <Layout>
     <div className='homeHero'  >    
    <Hero />
    </div>
 <OurServices />   
   <CaseStudies/>  
    </Layout>
         
   
  
   
    
  )
}

export default Home 