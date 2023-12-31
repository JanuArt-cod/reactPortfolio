import React from 'react'
import './footer.css'
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <div className='footer__logos'>
        <a href='#' className='footer__logo'>Januart Ramdhani</a>
      </div>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#service'>Service</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#qoutes'>Qoutes</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__sosial'>
        <a href='https://www.instagram.com/januart02/'><AiFillFacebook/></a>
        <a href='https://www.facebook.com/jancoek.januar'><AiFillInstagram/></a> 
      </div>
      <div className='footer__copyright'>
        <small>&copy; Januart Ramdhani. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer