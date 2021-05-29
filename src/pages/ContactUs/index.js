import React from 'react'
import Form from '../../components/form'
import Header from '../../components/header'
import Footer from '../../components/Footer'
import './style.scss'

const ContactUs = () => {
  return (
    <div >    
      <Header />
      <div className='contactUs'>
      <div className='contactUs__heroContactUs' >
      <h1 className='contactUs__heroContactUs__title'>CONTACT MATECH STUDIOS</h1>
      <p className='contactUs__heroContactUs__p'>Reach us and change the World</p>    
    </div>
    <Form/>   
      </div>          
     <Footer />
    </div>
  )
}
 export default ContactUs 