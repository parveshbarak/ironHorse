import React from 'react'
import { Link } from 'react-router-dom'

const Authenticity = () => {
  return (
    <section className='aunthenticity' id='aunthenticity'>
      <div className='information'>
        <span>aunthenticity check</span>
        <h3>test authenticity of your product!</h3>
        <img src='images/prod1.png' alt='prod1' />
      </div>

      <div className='plan basic'>
        <h3>authenticity Check</h3>
        <div className='info'>
          <p>
            We care about you and want you to consume only authentic product
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ipsa
            esse temporibus eaque illo voluptatem nostrum, at, quo nobis numquam
            aspernatur sunt fugiat veritatis dolorum hic tempora fugit
            consectetur officia?
          </p>
        </div>
        <div className='price'>Enter Auth Code</div>
        <div className='form'>
          <input
            type='string'
            name=''
            className='code'
            placeholder='enter Auth code from Box'
            id=''
          />
        </div>
        <Link to='#' className='btn'>
          Check
        </Link>
      </div>
    </section>
  )
}

export default Authenticity
