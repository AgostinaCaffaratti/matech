import React, { useContext } from 'react'
import Context from '../../themeContext'
import './style.scss'
import{ReactComponent as Moon} from './Vector.svg'



const ToggleButton = () => {
  const {theme, setTheme} = useContext(Context)
  

  

  return (
   <label className="switch">
  <input type="checkbox" onClick={() => setTheme(theme==='Light' ? 'Dark' : 'Light')} />
   
  <span className="slider round">
  <div className='moon'>

  <Moon/>
  </div>  
  </span>
 
</label>
  )
}

export default ToggleButton
