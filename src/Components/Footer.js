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
              about
            </Link>
            <Link to='/benifits' className='links'>
              benifits
            </Link>
            <Link to='/authenticity' className='links'>
              authenticity
            </Link>
            <a href='#contact' className='links'>
              contact us
            </a>
            <Link to='/products' className='links'>
              products
            </Link>
          </div>

          <div className='box'>
            <h3>How to reach</h3>
            <p>
              <i className='fas fa-phone'></i> +011-456-7890
            </p>
            <p>
              <i className='fas fa-phone'></i> =91-2922-923333
            </p>
            <p>
              <i className='fas fa-envelope'></i> prateek@gmail.com
            </p>
            <p>
              <i className='fas fa-map'></i> delhi, india - 124404
            </p>
          </div>

          <Contact/>
        </div>
      </section>

      <div className='credit'>
        created by <span>hey its just example</span> | all rights reserved!
      </div>
    </React.Fragment>
  )
}

export default Footer
