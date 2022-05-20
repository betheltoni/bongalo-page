import React from 'react'
import availability from "./images/availability.svg"
import satisfaction from "./images/satisfaction.svg"
import support from "./images/support.svg"
import digitalocean from "./images/digitalocean.svg"
import twilio from "./images/twilio.svg"
import google from "./images/google.svg"
import enkap from "./images/enkap.svg"

const About = () => {
  return (
    <div>
        <div className='about'>
            <div className='availabilty'>
                <img src={availability} alt="" />
                <h2>Availability</h2>
                <p>We know how hard it can be finding a perfect home to rent, especially when moving to a new country; so we are available 24/7 for your inquiries about the best places to stay. You’ll find the best places to stay on our platform without stress.</p>
            </div>
            <div className='satisfaction'>
                <img src={satisfaction} alt="" />  
                <h2>Client Satisfaction</h2>
                <p>Whether you are on a budget or travelling for a; conference, seminar, vacation, we got you covered. Plus, you can pay easily with your mobile wallet from any country in Africa in addition to the other payment methods available on our system.</p>
            </div>
            <div className='support'>
                <img src={support} alt="" />
                <h2>Support</h2>
                <p>We’re available to support you as you book and set out on your trip across the continent. Our experienced support team ensures your experience stays awesome all the way on your trip and even beyond. Count on us for our 24/7 support service.</p>
            </div>
        </div>
        <div className='sponsors'>
            <h1>Powered By</h1>
            <div className='sponsors-wrapper'>
                <div>
                    <img src={digitalocean} alt="" />
                </div>
                <div>
                <img src={twilio} alt="" /> 
                </div>
                <div>
                <img src={google} alt="" /> 
                </div>
                <div>
                    <img src={enkap} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default About