import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt=''/>
          </div>
          <h3>Identity Brand Design</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/JanuArt-cod' className='btn'>Github</a>
            <a href='https://www.youtube.com/watch?v=u9bTzMNqltw&list=PL462UAdE4dUeC_TomJ0OabVhuXdLQ6AYT' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        {/* 2 */}
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt=''/>
          </div>
          <h3>UI/UX Design</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/JanuArt-cod' className='btn'>Github</a>
            <a href='https://www.instagram.com/p/CIBN5jNh2at/' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        {/* 3 */}
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt=''/>
          </div>
          <h3>Blender 3D</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/JanuArt-cod' className='btn'>Github</a>
            <a href='https://www.instagram.com/p/CRRRX0dBRYW/' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        {/* 4 */}
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG4} alt=''/>
          </div>
          <h3>Programming</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/JanuArt-cod' className='btn'>Github</a>
            <a href='https://www.instagram.com/p/CIBN5jNh2at/' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        {/* 5 */}
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG5} alt=''/>
          </div>
          <h3>Design Graphic</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/JanuArt-cod' className='btn'>Github</a>
            <a href='https://www.instagram.com/p/CRRRX0dBRYW/' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        {/* 6 */}
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG6} alt=''/>
          </div>
          <h3>Vektor Design</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/JanuArt-cod' className='btn'>Github</a>
            <a href='https://www.youtube.com/watch?v=u9bTzMNqltw&list=PL462UAdE4dUeC_TomJ0OabVhuXdLQ6AYT' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio