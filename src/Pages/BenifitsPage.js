import React, { useEffect } from 'react'
import Benifits from '../Components/Benifits'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Home from '../Components/Home'

const BenifitsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <React.Fragment>
      <Header />
      <Home />
      <Benifits />
      <Footer />
    </React.Fragment>
  )
}

export default BenifitsPage
