import React from 'react'
import "./Navbar.scss"
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className='navbar'>
      {/* Siderbar */}
      <div className='wrapper'>
        <span>Harsh kumar</span>
        <div className='social'>
          <a href="#" className='facebook'><FaFacebookF /></a>
          <a href="#" className='instagram'><FaInstagram /></a>
          <a href="#" className='linkedin'><FaLinkedinIn /></a>
          <a href="#" className='x'><FaXTwitter /></a>

        </div>
      </div>
    </div>
  )
}

export default Navbar