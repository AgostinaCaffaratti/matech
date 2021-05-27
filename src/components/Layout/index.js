import React from 'react'
import Hero from '../hero'
import Footer from '../Footer'

const Layout = (props) => {
  return (
    <div className='layout' >
    <div className='layout__hero' style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/HerofondoDark.svg'})`}} >
    <Hero />
    </div>
    {props.children}
      <Footer />
    </div>
  )
}

export default Layout
