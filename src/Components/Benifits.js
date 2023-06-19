import React from 'react'
import { Link } from 'react-router-dom'

const Benifits = () => {
  return (
    <section className='benifits' id='benifits'>
      <h1 className='heading'>
        <span>benifits</span>
      </h1>

      <div className='box-container'>
        <div className='box'>
          <div className='image'>
            <img src='images/f-img-1.jpg' alt='' />
          </div>
          <div className='content'>
            <img src='images/icon-1.png' alt='' />
            <h3>body building</h3>
            <p>THEY GO STRAIGHT TO THE MUSCLE AND BLOOD</p>
            <Link to='' className='btn'>
              read more
            </Link>
          </div>
        </div>

        <div className='box second'>
          <div className='image'>
            <img src='images/f-img-2.jpg' alt='' />
          </div>
          <div className='content'>
            <img src='images/hey.none' alt='' />
            <h3>Fast Action and Absorbtion</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Similique, atque.
            </p>
            <Link to='' className='btn'>
              read more
            </Link>
          </div>
        </div>

        <div className='box'>
          <div className='image'>
            <img src='images/f-img-3.jpg' alt='' />
          </div>
          <div className='content'>
            <img src='images/hey2.png' alt='' />
            <h3>Easy Consuption</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Similique, atque.
            </p>
            <Link to='' className='btn'>
              read more
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Benifits
