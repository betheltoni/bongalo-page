import React from 'react'
import memorial from "./images/memorial.svg"
import nirvana from "./images/nirvana.svg"
import anastasia from "./images/anastasia.svg"
import mountain from "./images/mountain.svg"
import experiencesfooter from "./images/experiencesfooter.svg"
import featuredplacesarrow from "./images/featuredplacesarrow.svg"

const Experiences = () => {
  return (
    <div>
        <div className='experiences'>
            <h1>Some Amazing Experiences</h1>
            <div className='experiences-wrapper'>
                <div >
                    <img src={memorial} alt="" className='memorial'/>
                    <p>Kigali Genocie Memorial</p>
                    <img src={experiencesfooter} alt="" />
                </div>
                <div >
                    <img src={mountain} alt="" className='mountain' />
                    <p>Mountain View</p>
                    <img src={experiencesfooter} alt="" />
                </div>
                <div >
                    <img src={anastasia} alt="" className='anastasia' />
                    <p>Anastasia Paradise</p>
                    <img src={experiencesfooter} alt="" />
                </div>
                <div > 
                    <img src={nirvana} alt="" className='nirvana'/>
                    <p>Nirvana Heights</p>
                    <img src={experiencesfooter} alt="" className='nirvana-footer'/>
                    <img src={featuredplacesarrow} alt="" className='arrow' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experiences