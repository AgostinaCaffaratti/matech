import React from 'react'
import Hero from '../hero'
import Footer from '../Footer'
import Header from '../header'
import { Fragment } from 'react'

const Layout = (props) => {
  return (
    <Fragment>
    <Header/>
     {/* <div  style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/HerofondoDark.svg'})`, backgroundRepeat:'no-repeat',backgroundPosition:'right'}} >
    <div className='layout__hero'  >
    <Hero />
    </div>
    </div> */}
    {props.children}
      <Footer />

    </Fragment>
   
  )
}

export default Layout
