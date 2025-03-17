import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter'
import ChatBot from '../components/ChatBot'
import "../Css/Home.css"

const Home = () => {
  return (
    <>
    <Navbar/>
    <div className="home-1">
      <p>Welcome to Our</p>
        <h1>Elder <br />Companion </h1>
        <p>We provide support and shelter for elderly individuals in need. Join us in making a difference.</p>
        <button>Get Involved</button>
    </div>
    <Newsletter/>
    <Footer/>
    <ChatBot/>
    </>
  )
}

export default Home