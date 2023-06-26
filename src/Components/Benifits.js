import React from 'react'
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

const Benifits = () => {
  const control = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      control.start('visible')
    }
  }, [control, inView])

  return (
    <section className='benifits' id='benifits'>
      <h1 className='heading'>
        <span>benifits</span>
      </h1>

      <motion.div
        className='box-container'
        ref={ref}
        variants={annimationVariant}
        initial='hidden'
        animate={control}
      >
        <div className='box'>
          <div className='image'>
            <img src='images/f-img-1.jpg' alt='' />
          </div>
          <div className='content'>
            <img src='images/icon-1.png' alt='' />
            <h3>body building</h3>
            <p>THEY GO STRAIGHT TO THE MUSCLE AND BLOOD</p>
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
              It is easily absorbed by the body and is known for its fast action
            </p>
          </div>
        </div>

        <div className='box'>
          <div className='image'>
            <img src='images/f-img-3.jpg' alt='' />
          </div>
          <div className='content'>
            <img src='images/hey2.png' alt='' />
            <h3>Easy Consuption</h3>
            <p>It is Easy to consume</p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Benifits
