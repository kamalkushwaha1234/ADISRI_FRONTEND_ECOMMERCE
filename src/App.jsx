import { useEffect, useState } from 'react'
import './App.css'
import gsap from 'gsap'
import Home from './Screen/Home'
import Section from './Screen/Section'
function App() {

  useEffect(()=>{

   
  },[])
    return (
    <>
    <div className='home'>
     <Home/>
     </div>
     <div className='home transition-all duration-700 section-scroll '>

     <Section/>
     </div>
    </>
  )
}

export default App
