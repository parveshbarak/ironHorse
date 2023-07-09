import React from 'react'
import './styles.css'
import { Fade } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import { Link } from 'react-router-dom'

const Slide = ({ slide_number, prod_number, text }) => {
  return (
    <React.Fragment>
      <div className={`slide ${slide_number}`}>
        <div className='content'>
          <img src={`../../images/${prod_number}.png`} alt='prod1' />
          <h3>{text}</h3>
        </div>
      </div>
    </React.Fragment>
  )
}

const Home = () => {
  return (
    <React.Fragment>
      <section className='home' id='home'>
        <div className='swiper home-slider'>
          <Fade>
            <Slide
              slide_number='slide1'
              prod_number='prod1'
            />
            <Slide
              slide_number='slide2'
              prod_number='prod4'
            />
            <Slide
              slide_number='slide3'
              prod_number='prod3'
            />
          </Fade>
        </div>
      </section>
      <section className='realFakeHeader' id='realFakeHeader'>
        <span class='realFake'>
          <h3>Know the differeneces between REAL and FAKE Products</h3>
          <Link to='/realFake' class='link'>
            Click here
          </Link>
        </span>
      </section>
    </React.Fragment>
  )
}

export default Home
