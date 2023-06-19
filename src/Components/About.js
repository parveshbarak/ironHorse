import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section className='about' id='about'>
      <div className='image'>
        <img src='images/about-img.jpg' alt='' />
      </div>

      <div className='content'>
        <span>about us</span>
        <h3 className='title'>
          WITH <span className='c-name'>ironHorse</span> ACHIEVES THE ATHLETIC BODY
        </h3>
        <p>
          We are an expert laboratory in developing new and innovative formulas
          by implementing the best technology, in order to encourage
          high-performance athletes to meet their goals by providing them with
          specific benefits.
        </p>
        <div className='box-container'>
          <div className='box'>
            <h3>
              <i className='fas fa-check'></i>Peptides
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
              enim.
            </p>
          </div>
          <div className='box'>
            <h3>
              <i className='fas fa-check'></i>Injectables
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
              enim.
            </p>
          </div>
          <div className='box'>
            <h3>
              <i className='fas fa-check'></i>Orals
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
              enim.
            </p>
          </div>
          <div className='box'>
            <h3>
              <i className='fas fa-check'></i>Healthy Life
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
              enim.
            </p>
          </div>
        </div>
        <Link to='#' className='btn'>
          read more
        </Link>
      </div>
    </section>
  )
}

export default About
