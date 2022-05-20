import React from 'react'
import signuplogo from "./images/signuplogo.svg"
import horizontal from "./images/horizontal.svg"
import googleicon from "./images/googleicon.svg"
import eye from "./images/eye.svg"
import rightarrow from "./images/signuprightarrow.svg"
import Button from './Button'
import { Link } from 'react-router-dom'

const Signup2 = () => {
  return (
  <div className='signup2'>
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
        <div>
            <input type="text" />
            <span>Email</span>
        </div>
        <div>
            <input type="password" />
            <span>Password</span>
            <img src={eye} alt="" className='eye'/>
        </div>
        <div>
            <input type="password" />
            <span>Confirm Password</span>
            <img src={eye} alt="" className='eye2'/>
        </div>
        <Link to="/">
            <Button text="Sign Up" style={{backgroundColor:"#3E94FE",color:"#fff",borderRadius:"6px",border:"1px solid white", fontSize:"1.1rem"}} />
        </Link>
      
      <img src={rightarrow} alt="right" className='rightarrow'/>
  </div>
</div>
  )
}

export default Signup2