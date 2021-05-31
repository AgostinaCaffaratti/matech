import React,{useState} from 'react'
import industries from '../../data/industries.json'


import './style.scss'

const initializeData = {
  fullName:'',
  email:'',
  company:'',
  industry:'',
  size:'1 to 10 employees',  
  message:''  
}
const Form = () => {
  const [data, setData] = useState(initializeData)

  const handleChange = (e) => {
    const { name, value } = e.target
    setData({
      ...data,
      [name]: value,
    })
  }

  const HandleSubmitt = (e) => {
    e.preventDefault()   
   console.log(data)    
    setData(initializeData)    
  }
  return (
    <form className='form'>

     <div className='form__sec'>
      <label>Full name*</label>
      <input type='Text' name='fullName' value={data.fullName} placeholder='Write your full' onChange={handleChange} />      
    </div>
    
    <div className='form__sec'>
      <label>Email*</label>
      <input type='Email' name='email' value={data.email} placeholder='example@yourcom' onChange={handleChange} />      
    </div>   

    <div className='form__sec'>
      <label>Name of your company*</label>
      <input type='Text' name='company' value={data.company} placeholder='Your company'  onChange={handleChange} />      
    </div>   

    <div className='form__sec'>
      <label>Industry*</label>
     
      <select type='select' name='industry' value={data.industry}  onChange={handleChange} >
       {industries.map( e => {
        return(<option value={e}>{e}</option>)      
      })}
      </select>
    </div>     

    <div className='form__sec'>
      <p>Size of the company *</p>

      <div className='form__sec--rad'>
      <input type='radio' name='size' value={data.size} onChange={handleChange} ></input> 
      <label>1 to 10 employees</label>
      </div>

      <div className='form__sec--rad'>
      <input type='radio' name='size' value={data.size} onChange={handleChange} ></input> 
      <label>10 to 50 employees</label>
      </div>

      <div className='form__sec--rad'>
      <input type='radio' name='size' value={data.size} onChange={handleChange} ></input> 
      <label>More than 100 employees</label>
      </div>      
       </div>

      <div className='form__sec'>
      <label>Message</label>
      <textarea name="message" value={data.message} onChange={handleChange} cols="40" rows="5" placeholder='Message'></textarea>
      </div>

<div className='form__sec-button'>
      <button onClick={HandleSubmitt}>SEND</button>  
</div>

   
    </form>
  )
}

export default Form
