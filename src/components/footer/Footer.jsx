import React from 'react'
import './footer.css'
import { BsInstagram } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FaTelegramPlane } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer >
      <a href="#" className="footer__logo">ProjectNum17</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#exp">Expeirience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#testimonials">Other Information</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://instagram.com/old.kentucky?igshid=NDRkN2NkYzU=" target="__blank"> <BsInstagram /> </a>
        <a href="https://github.com/projectnum17" target="__blank"> <FaGithub /> </a>
        <a href="https://t.me/oldkentucky" target="__blank"> <FaTelegramPlane /> </a>
      </div>

      <div className="footer__copy">
        <small>&copy; ProjectNum17. Project of CV (made with the React library)</small>
      </div>
    </footer>


  )
}

export default Footer