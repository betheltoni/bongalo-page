import React, { useState } from 'react'
import Button from './Button'
import logo from "./images/logo.svg"
import blueellipse from "./images/Ellipse-blue.svg"
import group from "./images/Group.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [showSideNav, setShowSideNav] = useState(false)
  return (
    <div className='navbar'>
        
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
        <div className='mobile'>
          <button className='shortcut' onClick={()=>{setShowSideNav(true)}}>
            <img src={group} alt=""  />
          </button>
          <div className={showSideNav ? "sidenav" : "closed"}>
            <div className='sidenav-wrapper'>
              <button onClick={()=> {setShowSideNav(false)}} className="btn-close" >close</button>
              <ul>
                <li><a href="">Home</a></li>
                <li><a href="">List a property</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">FAQs</a></li>
              </ul>
          </div>
          </div>
        </div>
        
    </div>
  )
}

export default Navbar