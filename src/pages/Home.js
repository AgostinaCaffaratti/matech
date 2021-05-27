import React from 'react'
import CaseStudies from '../components/caseStudies';
import Footer from '../components/Footer';
import Header from '../components/header';
import Hero from '../components/hero';
import Menu from '../components/Menu';
import OurServices from '../components/ourServices';
import OurValues from '../components/ourValues';

const Home = () => {
  return (
    <div>
      <Header />
   <Hero />   
   <OurServices />
   <CaseStudies/>
   <OurValues />
   <Footer />
   <Menu/>
    </div>
  )
}

export default Home 