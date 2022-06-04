import React from 'react'
import Featuredcities from './Featuredcities'
// import Featuredplaces from './Featuredplaces'
// import Experiences from './Experiences'
import About from './About'
import Carousel1 from './Carousel1'
import Carousel2 from './Carousel2'


const Hero = () => {
  return (
    <div className='hero'>
        <Featuredcities/>
        <Carousel1/>
        <Carousel2/>
        <About/>
    </div>
  )
}

export default Hero