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
        <span>Highlights</span>
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
            <img src='images/h1.jpeg' alt='' />
          </div>
          <div className='content'>
            <h3>Super micronised winny</h3>
            <p>
              Iron horse winny is painless, smooth and easy to inject. There
              will be no syringe blockage problem
            </p>
          </div>
        </div>

        <div className='box second'>
          <div className='image'>
            <img src='images/h2.jpeg' alt='' />
          </div>
          <div className='content'>
            <h3>No lump problem </h3>
            <p>
              All our injections are painless and smooth . Iron horse guarantees
              you there will be no lump formation after injecting our projects .
              Make sure to clean injection site with alcohol swap before
              injecting
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Benifits
