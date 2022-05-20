import React from 'react'
import Button from './Button'
import logo from "./images/logo.svg"
import blueellipse from "./images/Ellipse-blue.svg"
import group from "./images/Group.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={group} alt="" className='shortcut' />
        <img src={logo} alt="logo" className='navbar-logo' /> 
        <div className='navlinks-wrapper'>
          <div>
            <span>Home</span>
            <img src={blueellipse} alt=""  className='blue-ellipse'/>
          </div>
          <div><span>List a property</span></div>
          <div><span>Blog</span></div>
          <div><span>FAQs</span></div>
        </div>
        <div className='navbar-btn'>
          <Link to="/signup">
                <Button text="Login" style={{padding: "8px 25px",backgroundColor:"white",color:"#3E94FE",borderRadius:"6px",border:"1px solid white"}} />
          </Link>
        </div>
        
    </div>
  )
}

export default Navbar