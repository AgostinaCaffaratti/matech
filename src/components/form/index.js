import React from 'react'

import './style.scss'

const Form = () => {
  return (
    <form className='form'>

     <div className='form__sec'>
      <label>Full name*</label>
      <input type='Text' placeholder='Write your full' />      
    </div>
    
    <div className='form__sec'>
      <label>Email*</label>
      <input type='Email' placeholder='example@yourcom' />      
    </div>   

    <div className='form__sec'>
      <label>Name of your company*</label>
      <input type='Text' placeholder='Your company' />      
    </div>   

    <div className='form__sec'>
      <label>Industry*</label>
      <select type='select'  >
      <option value="Choose">Choose</option>
      </select>
    </div>     

    <div className='form__sec'>
      <p>Size of the company *</p>

      <div className='form__sec--rad'>
      <input type='radio'></input> 
      <label>1 to 10 employees</label>
      </div>

      <div className='form__sec--rad'>
      <input type='radio'></input> 
      <label>10 to 50 employees</label>
      </div>

      <div className='form__sec--rad'>
      <input type='radio'></input> 
      <label>More than 100 employees</label>
      </div>      
       </div>

      <div className='form__sec'>
      <label>Message</label>
      <textarea name="Text1" cols="40" rows="5" placeholder='Message'></textarea>
      </div>

      <button>SEND</button>  

   
    </form>
  )
}

export default Form
