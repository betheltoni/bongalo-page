import React from 'react'
import Featuredcities from './Featuredcities'
import Featuredplaces from './Featuredplaces'
import Experiences from './Experiences'
import About from './About'


const Hero = () => {
  return (
    <div className='hero'>
        <Featuredcities/>
        <Featuredplaces/>
        <Experiences/>
        <About/>
    </div>
  )
}

export default Hero