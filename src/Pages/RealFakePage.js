import React, { useEffect } from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Home from '../Components/Home'
import RealFake from '../Components/RealFake'

const RealFakePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <React.Fragment>
      <Header />
      <Home />
      <RealFake />
      <Footer />
    </React.Fragment>
  )
}

export default RealFakePage
