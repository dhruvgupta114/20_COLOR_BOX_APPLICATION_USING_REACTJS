/* eslint-disable react/prop-types */
import React from 'react'

const Color = ({color,setColor}) => {
  return (
    <div className='color-item' style={{'--bg-color':color}} onClick={setColor}>
      
    </div>
  )
}

export default Color
