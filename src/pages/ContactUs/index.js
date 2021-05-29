import React from 'react'
import Form from '../../components/form'
import Header from '../../components/header'
import Footer from '../../components/Footer'
import './style.scss'

const ContactUs = () => {
  return (
    <div >    
      <Header />    
      <div className='heroContactUs' >
      <h1 className='heroContactUs__title'>CONTACT MATECH STUDIOS</h1>
      <p className='heroContactUs__p'>Embrace the power of technology to improve people’s lives. </p>    
    </div>
    <Form/>   
     <Footer />
    </div>
  )
}
 export default ContactUs 