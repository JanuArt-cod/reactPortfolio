import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSosial from './HeaderSosial'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hallo I'm</h5>
        <h1>Januart Ramdhani</h1>
        <h3 className="text-light">Design Graphic</h3>
        <h3 className="text-light">Design UI/UX</h3>
        <CTA/>
        <HeaderSosial/>

        <div className='me'>
          <img src={ME} alt="me"/>
        </div>
        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header