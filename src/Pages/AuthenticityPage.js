import React, { useEffect } from 'react'
import Authenticity from '../Components/Authenticity'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Home from '../Components/Home'

const AuthenticityPage = () => {
  useEffect(() => {
    window.scrollTo(0, 500)
  }, [])
  return (
    <React.Fragment>
      <Header />
      <Home />
      <Authenticity />
      <Footer />
    </React.Fragment>
  )
}

export default AuthenticityPage
