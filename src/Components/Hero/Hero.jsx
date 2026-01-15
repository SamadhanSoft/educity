import React from 'react'
import dark_arrow from '../../assets/dark-arrow.png'
import './Hero.css'


const Hero = () => {
  return (
    <div className='hero'>
       <div className='hero-text'>
        <h1>We Ensure better education for a better world</h1>
        <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.</p>
        <button className='get-started btn'>Explore more <img src={dark_arrow} width="20px" alt="" /></button>
       </div>
    </div>
  )
}

export default Hero
