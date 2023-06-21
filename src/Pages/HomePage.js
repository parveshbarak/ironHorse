import React, { useEffect } from 'react'
import About from '../Components/About'
import Authenticity from '../Components/Authenticity'
import Benifits from '../Components/Benifits'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Home from '../Components/Home'

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <React.Fragment>
      <Header />
      <Home />
      <About />
      <Benifits />
      <Authenticity />
      <Footer />
    </React.Fragment>
  )
}

export default HomePage
