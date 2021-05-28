import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer'
import Header from '../../components/header'
import './style.scss'

const ErrorPage = () => {
  return (
    <div>
    <div style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/background404.svg'})`, backgroundRepeat:'no-repeat',backgroundPosition:'right'}}>
    <div className='headerError'>
      <Header />
    </div>
      <div className='heroError' >
      <h1  >404</h1>
      <h2 >SOMETHING´S MISSING</h2>
      <p >This page is missing or you assembled the link incorrectly. </p>    
     
      <button> <Link to='/'>GO BACK TO HOME</Link></button>
    </div>
    </div>
    <Footer />
    </div>
  )
}

export default ErrorPage
