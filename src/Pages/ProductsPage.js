import React, { useEffect } from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Home from '../Components/Home'
import Products from '../Components/Products'

const ProductsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <React.Fragment>
      <Header />
      <Home />
      <Products />
      <Footer />
    </React.Fragment>
  )
}

export default ProductsPage
