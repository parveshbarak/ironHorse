import React, { useEffect } from 'react'
import About from '../Components/About'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Home from '../Components/Home'

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 500)
  }, [])
  return (
    <React.Fragment>
      <Header />
      <Home />
      <About />
      <Footer />
    </React.Fragment>
  )
}

export default AboutPage
