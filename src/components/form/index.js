import React from 'react'
import industries from '../../data/industries.json'
import emailjs from 'emailjs-com'



import './style.scss'




const Form = () => {
 

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_09s1osg', 'template_vd30f9d', e.target, 'user_j12Gmfl2v7Rw2vfvA1wx0')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

  return (
    <form className='form' onSubmit={sendEmail}>

     <div className='form__sec'>
      <label>Full name*</label>
      <input required type='Text' name='fullName' placeholder='Write your full'  />      
    </div>
    
    <div className='form__sec'>
      <label>Email*</label>
      <input required type='Email' name='email'  placeholder='example@yourcom'  />      
    </div>   

    <div className='form__sec'>
      <label>Name of your company*</label>
      <input required type='Text' name='company'  placeholder='Your company'   />      
    </div>   

    <div className='form__sec'>
      <label>Industry*</label>
     
      <select required type='select' name='industry'   >
       {industries.map( (e, index) => {
        return(<option key={index} value={e}>{e}</option>)      
      })}
      </select>
    </div>     

    <div className='form__sec'>
      <p>Size of the company *</p>

      <div className='form__sec--rad'>
      <input required type='radio' name='size' value='1 to 10 employees'  ></input> 
      <label>1 to 10 employees</label>
      </div>

      <div className='form__sec--rad'>
      <input required type='radio' name='size' value='10 to 50 employees'  ></input> 
      <label>10 to 50 employees</label>
      </div>

      <div className='form__sec--rad'>
      <input required type='radio' name='size' value='More than 100 employees' ></input> 
      <label>More than 100 employees</label>
      </div>      
       </div>

      <div className='form__sec'>
      <label>Message</label>
      <textarea required name="message"  cols="40" rows="5" placeholder='Message'></textarea>
      </div>

<div className='form__sec-button'>
      <button >SEND</button>  
</div>

   
    </form>
  )
}

export default Form
