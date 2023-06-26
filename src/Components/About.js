import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

const annimationVariant = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', bounce: 0.25, delay: 0.2, duration: 1.5 },
  },
  hidden: { opacity: 0, scale: 0.5 },
}

const About = () => {
  const control = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      control.start('visible')
    }
  }, [control, inView])

  return (
    <section className='about' id='about'>
      <div className='image'>
        <img src='images/about-img.jpg' alt='' />
      </div>
      <motion.div
        className='content'
        ref={ref}
        variants={annimationVariant}
        initial='hidden'
        animate={control}
      >
        <h3 className='title'>
          <span className='c-name'>We are a high-tech </span>
          laboratory to develop
          <span className='c-name'> new and innovative</span> formulas , focused
          on providing specific benefits for high-performance athletes.
        </h3>
        <p>
          We are convinced that it is of the utmost importance to put the best
          of ourselves into each of the formulations so that our end user can
          achieve the desired and expected body transformations.
        </p>
      </motion.div>
      <motion.div
        className='image2'
        ref={ref}
        variants={annimationVariant}
        initial='hidden'
        animate={control}
      >
        <img src='images/prod1.png' alt='' />
      </motion.div>
      <div className='content'>
        <h3 className='title'>
          Each of our products is made to meet the specific needs of athletes
          and
          <span className='c-name'> maximize the potential </span> that each one
          has within and thus lead them to meet their goals.
        </h3>
        <p>
          There is nothing more important to us than our consumers, it is for
          this reason that we are constantly innovating to offer them the best.
        </p>
      </div>
    </section>
  )
}

export default About
