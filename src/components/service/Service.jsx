import React from 'react'
import './service.css'
import {AiOutlineBranches} from 'react-icons/ai'

const Service = () => {
  return (
    <section id='service'>
    <h5>What I Offer</h5>
    <h2>Service</h2>
    <div className='container service__container'>
      <article className='service'>
        <div className='service__head'>
          <h3>UI/UX Design</h3>
        </div>
        <ul className='service__list'>
          <li>
            <AiOutlineBranches className='service__list-icon'/>
            <p>lorem, ipsum dolar sit amet consectetur elit.</p>
          </li>
          <li>
            <AiOutlineBranches className='service__list-icon'/>
            <p>lorem, ipsum dolar sit amet consectetur elit.</p>
          </li>
          <li>
            <AiOutlineBranches className='service__list-icon'/>
            <p>lorem, ipsum dolar sit amet consectetur elit.</p>
          </li>
          <li>
            <AiOutlineBranches className='service__list-icon'/>
            <p>lorem, ipsum dolar sit amet consectetur elit.</p>
          </li>
        </ul>
      </article>
      {/* Design Graphic */}
      <article className='service'>
        <div className='service__head'>
          <h3>Design Graphic / Blender 3D</h3>
        </div>
        <ul className='service__list'>
          <li>
            <AiOutlineBranches className='service__list-icon'/>
            <p>lorem, ipsum dolar sit amet consectetur elit.</p>
          </li>
          <li>
            <AiOutlineBranches className='service__list-icon'/>
            <p>lorem, ipsum dolar sit amet consectetur elit.</p>
          </li>
          <li>
            <AiOutlineBranches className='service__list-icon'/>
            <p>lorem, ipsum dolar sit amet consectetur elit.</p>
          </li>
          <li>
            <AiOutlineBranches className='service__list-icon'/>
            <p>lorem, ipsum dolar sit amet consectetur elit.</p>
          </li>
          <li>
            <AiOutlineBranches className='service__list-icon'/>
            <p>lorem, ipsum dolar sit amet consectetur elit.</p>
          </li>
          <li>
            <AiOutlineBranches className='service__list-icon'/>
            <p>lorem, ipsum dolar sit amet consectetur elit.</p>
          </li>
        </ul>
      </article>
      {/* identity brand */}
      <article className='service'>
        <div className='service__head'>
          <h3>identity brand</h3>
        </div>
        <ul className='service__list'>
          <li>
            <AiOutlineBranches className='service__list-icon'/>
            <p>lorem, ipsum dolar sit amet consectetur elit.</p>
          </li>
          <li>
            <AiOutlineBranches className='service__list-icon'/>
            <p>lorem, ipsum dolar sit amet consectetur elit.</p>
          </li>
          <li>
            <AiOutlineBranches className='service__list-icon'/>
            <p>lorem, ipsum dolar sit amet consectetur elit.</p>
          </li>
          <li>
            <AiOutlineBranches className='service__list-icon'/>
            <p>lorem, ipsum dolar sit amet consectetur elit.</p>
          </li>
          <li>
            <AiOutlineBranches className='service__list-icon'/>
            <p>lorem, ipsum dolar sit amet consectetur elit.</p>
          </li>
          <li>
            <AiOutlineBranches className='service__list-icon'/>
            <p>lorem, ipsum dolar sit amet consectetur elit.</p>
          </li>
          <li>
            <AiOutlineBranches className='service__list-icon'/>
            <p>lorem, ipsum dolar sit amet consectetur elit.</p>
          </li>
        </ul>
      </article>
    </div>
    </section>
  )
}

export default Service