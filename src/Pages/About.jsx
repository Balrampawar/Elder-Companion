import React from 'react'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import "../Css/about.css"
import Chatbot from '../components/ChatBot'
import StatsSection from '../components/StatsSection'

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="about-1">
        <h1>About Us</h1>
        <div className='about-1-text'>

        <p>Service with care is the motto” of oldcare. Our constant endeavour is to ingrain the values of “ Service before Self ”and to inculcate the importance of duty to fellow beings before expecting their rights.</p>
        <StatsSection/>
        {/* <img src="https://images.unsplash.com/photo-1576765608866-5b51046452be?q=80&w=2078&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
        </div>
       
      </div>
      <div className="about-2">
        <h1>How We Work Here <br /><button>Contact Us &rarr;</button></h1>
        <p>At <strong>Elderly Companion </strong>, we provide compassionate support and meaningful companionship to seniors, enhancing their independence and well-being. Our dedicated caregivers assist with daily activities, engage in conversations, and create a warm, safe environment tailored to individual needs.</p>
      </div>
     
      <div className="about-3">
        <h1>Meet our Team</h1>
        <div className="about-3-cards">
          <div className="card">
            <h3>NAME</h3>
            <p>Member</p>
          </div>
          <div className="card">
            <h3>NAME</h3>
            <p>Member</p>
          </div>
          <div className="card">
            <h3>NAME</h3>
            <p>Member</p>
          </div>
          <div className="card">
            <h3>NAME</h3>
            <p>Member</p>
          </div>
        </div>
      </div>
     <Newsletter />
     <Footer />
     <Chatbot/>
    </div>
  )
}

export default About