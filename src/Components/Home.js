import React from 'react'
import './styles.css'
import { Fade } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

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
    <section className='home' id='home'>
      <div className='swiper home-slider'>
        <Fade>
          <Slide
            slide_number='slide1'
            prod_number='prod1'
            text='2 Orals + 2 Peptides'
          />
          <Slide
            slide_number='slide2'
            prod_number='prod2'
            text='4 Oral Assets'
          />
          <Slide
            slide_number='slide3'
            prod_number='prod3'
            text='4 Vials Assets'
          />
        </Fade>
      </div>
    </section>
  )
}

export default Home
