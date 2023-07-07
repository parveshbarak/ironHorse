import React from 'react'
import { Link } from 'react-router-dom'
import Contact from './Contact'
import './styles.css'

const Footer = () => {
  return (
    <React.Fragment>
      <section className='footer'>
        <div className='box-container'>
          <div className='box'>
            <h3>quick links</h3>
            <Link to='/' className='links'>
              home
            </Link>
            <Link to='/about' className='links'>
              about us
            </Link>
            <Link to='/realFake' className='links'>
              Real vs Fake
            </Link>
            <Link to='/authenticity' className='links'>
              check authenticity
            </Link>
            <a href='#contact' className='links'>
              contact us
            </a>
          </div>
          <div className='box'>
          <h3>Address</h3>
          <p>Vogelrute 43,</p>
          <p>53879 Euskirchen</p>
          <p>Germany</p>
        </div>
          <Contact />
        </div>
      </section>

      <div className='credit'>
        <span>@ironhorsepharmacuticals</span> | all rights reserved!
      </div>
    </React.Fragment>
  )
}

export default Footer
