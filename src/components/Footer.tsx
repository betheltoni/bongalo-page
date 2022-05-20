import React from 'react'
import Button from './Button'
import logo from "./images/logo.svg"
import footericons from "./images/footericons.svg"
import copyright from "./images/copyright.svg"
import payment from "./images/payment.svg"
import envelope from "./images/envelope.svg"

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-header'>
            <div className='logo-wrapper'>
                <img src={logo} alt="" className='logo' />
            </div>
            <div className='form'>
                <p><strong>Enter your email to subscribe to our newsletter</strong></p>
                <input type="text" placeholder='Enter Email Address' />
                <img src={envelope} alt=""  className='envelope'/>
                <Button text="Subscribe" style={{backgroundColor:"#3E94FE",color:"#fff",borderRadius:"6px", fontSize:"1.1rem"}} />
            </div>
        </div>
        <div className='footer-wrapper'>
            <div className='about'>
                <h3>ABOUT BONGALO</h3>
                <p>About us</p>
                <p>Company</p>
                <p>Career</p>
                <p>Press Release</p>
            </div>
            <div className='links'>
                <h3>LINKS</h3>
                <p>Blog</p>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
            </div>
            <div className='contacts'>
                <h3>CONTACTS</h3>
                <p className='address'>CONTACT 4th Floor, Fairview Building KG 622 St, Kigali, Rwanda</p>
                <p>6th Floor CamCull Building Comm Ave, Bamenda, Cameroon </p>
                <p>Cameroon info@bongalo.co</p>
            </div>
            <div className='join-us'>
                <h3>JOIN US ON</h3>
                <img src={footericons} alt="" />
            </div>
        </div>
        <img src={copyright} alt="" className='copyright' />
        <img src={payment} alt="" className='payment'/>
        
    </div>
  )
}

export default Footer