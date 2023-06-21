import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Authenticity = () => {
  const [code, setCode] = useState('')
  const onSubmit = (e) => {
    e.preventDefault()
    console.log(code)
  }
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
          <form onSubmit={onSubmit}>
            <input
              type='string'
              name='code'
              className='code'
              placeholder='enter Auth code'
              id='code'
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
            <input type='submit' value='Check' className='btn' />
          </form>
        </div>
      </div>
    </section>
  )
}

export default Authenticity
