import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About Image"/>
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5 className='experience'>Experience</h5>
              <small>4+ Years Working</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5 className='clients'>Clients</h5>
              <small>90+ Worldwide</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5 className='projects'>Projects</h5>
              <small>50+ Completed</small>
            </article>
          </div>
          <p>I am a person who is usually called Januart. I have a lot of skills that can be shown while being work. One of the skills that I have, I can operate a computer and are familiar with various
          Graphic design software, UI/UX, programmers, and 2D/3D animation. And I also has optimal physical abilities and is always neat, diligent and organized at work.</p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About