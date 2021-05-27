import React from 'react'

const Value = ({title, title2}) => {
  return (
    <div>
      <svg
        width="auto"
        height="auto"
        viewBox="0 0 182 210"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text x="50%" y="50%" alignment-baseline="middle" text-anchor="middle" fill='#ffffff'  style={{fontFamily:'Sarabun', fontWeight:'bold' }}>
         <tspan x="50%" >{title}</tspan>
        <tspan x="50%" dy="1.2em">{title2}</tspan>
        </text>
        <path
          d="M1 159.341V53.4406L90.8865 1.15686L180.773 53.4406V159.341L90.8865 208.315L1 159.341Z"
          stroke="#79FFBD"
          stroke-width="2"
        />
      </svg>
    </div>
  )
}

export default Value
