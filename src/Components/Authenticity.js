import React, { useState } from 'react'
import { authCodes } from '../seeder'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

const annimationVariant = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', bounce: 0.25, duration: 1.5 },
  },
  hidden: { opacity: 0, scale: 0.5 },
}

const Authenticity = () => {
  const control = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      control.start('visible')
    }
  }, [control, inView])

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
      <motion.div
        className='information'
        ref={ref}
        variants={annimationVariant}
        initial='hidden'
        animate={control}
      >
        <h3>test authenticity of your product!</h3>
        <img src='images/h2.jpeg' alt='prod1' />
      </motion.div>

      <div className='plan basic'>
        <h3>authenticity Check</h3>
        <div className='info'>
          <p>
            We care about you and want you to consume only authentic product
          </p>
          <p>
            Scratch the Box and enter the code from box in the below field to
            check if your product is an ironhorse orignal or not!
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
