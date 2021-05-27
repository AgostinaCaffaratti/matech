import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/header'
import './style.scss'

const ErrorPage = () => {
  return (
    <div>
      <Header />
      <div className='heroError'>
      <h1  >404</h1>
      <h2 >SOMETHING´S MISSING</h2>
      <p >This page is missing or you assembled the link incorrectly. </p>    
      <button>GO BACK TO HOME</button>
    </div>
    <Footer />
    </div>
  )
}

export default ErrorPage
