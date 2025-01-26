import React from 'react'
import logo from '../assets/stayxi_logo-removebg-preview.png'
import '../components/Navbar.css'

function Navbar() {
  return (
    <>
    <span className='container'>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="options">
        <ul>
          <li>HOME</li>
          <li>SERVICES</li>
          <li>BOOKINGS</li>
          <li>EXPLORE</li>
        </ul>
        <div className="button">
          <button>Register</button>
          <button>Sign In</button>
        </div>
      </div>
    </span>
    </>
  )
}

export default Navbar
