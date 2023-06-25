import React, { useEffect, useState } from 'react'
import { authCodes } from '../seeder'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Authenticity = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])
  const [btn, setBtn] = useState('check')
  const [code, setCode] = useState('')
  const onSubmit = async (e) => {
    e.preventDefault()
    setBtn('Checking')
    if (authCodes.has(code)) {
      toast.success('Product is ironHorse orignal', {
        position: toast.POSITION.BOTTOM_RIGHT,
      })
    } else {
      toast.error('Product is not Orignal', {
        position: toast.POSITION.BOTTOM_RIGHT,
      })
    }
    setBtn('Chcek')
  }
  return (
    <section className='aunthenticity' id='aunthenticity'>
      <div data-aos='fade-left'  className='information'>
        <h3>test authenticity of your product!</h3>
        <img src='images/prod1.png' alt='prod1' />
      </div>

      <div data-aos='fade-right' className='plan basic'>
        <h3>authenticity Check</h3>
        <div className='info'>
          <p>
            We care about you and want you to consume only authentic product
          </p>
          <p>
            Scratch the Box and enter the code from box in the below field to check if your product is an ironhorse orignal or not!
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
            <input type='submit' value={btn} className='btn' />
          </form>
        </div>
      </div>
    </section>
  )
}

export default Authenticity
