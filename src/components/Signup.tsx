import React from 'react'
import signuplogo from "./images/signuplogo.svg"
import horizontal from "./images/horizontal.svg"
import googleicon from "./images/googleicon.svg"
import rwanda from "./images/rwanda.svg"
import downarrow from "./images/signupdownarrow.svg"
import rightarrow from "./images/signuprightarrow.svg"
import Button from './Button'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='signup'>
        <div className='signup-header'>
            <img src={signuplogo} alt="" className='signuplogo' />
        </div>
        <div className='signup-container'>
            <div className='google'>
                <img src={googleicon} alt="" />
                <span>  Continue with Google</span>
                <img src={horizontal} alt=""  className='horizontal'/>
            </div>
            <div className='signup-text'>  
                <h2>Get Started</h2>
                <p>Kindly fill in the sign up details</p>
            </div>
            <div className='detail-wrapper'>
                <div>
                    <input type="text" />
                    <span>Firstname</span>
                </div>
                <div>
                    <input type="text" />
                    <span>Lastname</span>
                </div>
            </div>
            <div className='detail-wrapper2'>
                <div>
                    <input type="text"  className='region' />
                    <span className='region-text'>+250</span>
                    <img src={rwanda} alt=""  className='rwanda'/>
                    <img src={downarrow} alt="" className='downarrow'/>
                </div>
                <div>
                    <input type="text"  className='phone'/>
                    <span>Phone Number</span>
                </div>
            </div>
            <Link to="/signup2">
                <Button text="Continue" style={{backgroundColor:"#3E94FE",color:"#fff",borderRadius:"6px",border:"1px solid white", fontSize:"1.1rem"}} />
            </Link>
            
            <img src={rightarrow} alt="right" className='rightarrow'/>
        </div>
    </div>
  )
}

export default Signup