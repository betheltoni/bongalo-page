import React from 'react'
import Navbar from './Navbar'
import ellipse from "./images/Ellipse.svg"
import rightarrow from "./images/rightarrow.svg"
import leftarrow from "./images/leftarrow.svg"
import downarrow from "./images/downarrow.svg"
import blueellipse from "./images/Ellipse-blue.svg"
import destination from "./images/destination.svg"
import guest from "./images/guest.svg"
import arrival from "./images/arrival.svg"
import calender from "./images/calender.svg"
import Line from "./images/Line.svg"
import downwardarrow from "./images/downwardarrow.svg"
import Button from './Button'

const Header = () => {
  return (
    <div className='header'>
        <div className='overlay'>
            <Navbar/>
            <div className='header-content'>
              <div className='leftarrow'>
                <img src={ellipse} alt="" />
                <img src={leftarrow} alt="" className='left-arrow' />
              </div>
              <div className='rightarrow'>
                <img src={ellipse} alt="" />
                <img src={rightarrow} alt="" className='right-arrow'/>
              </div>
              <div className='header-text'>
              <h1>Travelling Africa for business or leisure? <span>Book</span> a place to stay <span>.</span></h1>
              </div>
            </div>
            <div className='downarrow'>
                <img src={ellipse} alt="" />
                <img src={blueellipse} alt="" className='blue-ellipse' />
                <img src={downarrow} alt="" className='down-arrow'/>
              </div>
            <div className='details'>
                <div>
                  <img src={destination} alt="" />
                  <h2>Destination</h2>
                  <p>Kigali,Rwanda</p>
                  <img src={Line} alt="" className='line' />
                  <img src={downwardarrow} alt="" className='downwardarrow' />
                </div>
                <div>
                  <img src={arrival} alt="" />
                  <img src={calender} alt="" className='calender-icon'/>
                  <h2>Arrival - Departure</h2>
                  <p>Wed, Oct 1 - Tue, Dec 10</p>
                  <img src={Line} alt="" className='line'/>
                  <img src={downwardarrow} alt="" className='downwardarrow'/>
                </div>
                <div>
                  <img src={guest} alt="" />
                  <h2>Guest</h2>
                  <p>5 Guests</p>
                  <img src={Line} alt=""  className='line'/>
                  <img src={downwardarrow} alt="" className='downwardarrow' />
                </div>
                <div>
                <Button text="Search" style={{padding: "15px 35px",backgroundColor:"#3E94FE",color:"#fff",borderRadius:"6px",border:"1px solid white"}} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header