import React, { useEffect } from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Home from '../Components/Home'
import ProductList from '../Components/ProductList'

const ProductListPage = ({ type }) => {
  useEffect(() => {
    window.scrollTo(0, 550)
  })
  return (
    <React.Fragment>
      <Header />
      <Home />
      <ProductList type={type}/>
      <Footer />
    </React.Fragment>
  )
}

export default ProductListPage
