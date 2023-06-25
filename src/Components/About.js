import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])
  return (
    <section className='about' id='about'>
      <div className='image'>
        <img src='images/about-img.jpg' alt='' />
      </div>
      <div data-aos='fade-left' className='content'>
        <h3 className='title'>
          <span className='c-name'>We are a high-tech </span>
          laboratory to develop
          <span className='c-name'> new and innovative</span> formulas , focused
          on providing specific benefits for high-performance athletes.
        </h3>
        <p>
          We are convinced that it is of the utmost importance to put the best
          of ourselves into each of the formulations so that our end user can
          achieve the desired and expected body transformations.
        </p>
      </div>
      <div data-aos='fade-right' className='image2'>
        <img src='images/prod1.png' alt='' />
      </div>
      <div data-aos='fade-left' className='content'>
        <h3 className='title'>
          Each of our products is made to meet the specific needs of athletes
          and
          <span className='c-name'> maximize the potential </span> that each one
          has within and thus lead them to meet their goals.
        </h3>
        <p>
          There is nothing more important to us than our consumers, it is for
          this reason that we are constantly innovating to offer them the best.
        </p>
      </div>
    </section>
  )
}

export default About
