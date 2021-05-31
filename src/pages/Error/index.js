import React from 'react'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer'
import Header from '../../components/header'
import './style.scss'

const ErrorPage = () => {
  return (
    <Fragment>
    <div className='error'>
    
    
      <Header />
   
      <div className='heroError' >
      <h1  >404</h1>
      <h2 >SOMETHING´S MISSING</h2>
      <p >This page is missing or you assembled the link incorrectly. </p>    
     
      <button> <Link to='/'>GO BACK TO HOME</Link></button>
    </div>
    </div>
    
    <Footer />
    </Fragment>
    
  )
}

export default ErrorPage
