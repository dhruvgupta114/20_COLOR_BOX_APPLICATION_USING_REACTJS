import { useEffect, useState } from 'react'
import Color from './component/Color'
import './App.css'
import { IoMdSettings } from "react-icons/io";

function App() {
  const colors = ["#2d3436","#4834d4","#be2edd","#f9ca24","#6ab04c","#30336b"]


  const setTheme = (color) =>{
    document.documentElement.style.setProperty('--bg-color', color)
  }



  useEffect(()=>{
    const currentColor = localStorage.getItem('color')
    setTheme(currentColor)
  },[])

  const setColor = (e) =>{
    const currentColor = e.target.style.getPropertyValue('--bg-color')
    setTheme(currentColor)
    localStorage.setItem('color',currentColor)
  }

  

  return (
    <>
    <div className="App">
    <div className='color-picker'>
        <button ><IoMdSettings /></button>
        <h1 className='heading'>Pick Color</h1>
        <div className="color-list">
          {colors.map((color,index)=> <Color key={index} setColor = {setColor} color = {color}/>)}
        </div>
      </div>
    </div>
    </>
  )
}

export default App
