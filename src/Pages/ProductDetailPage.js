import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Home from '../Components/Home'
import ProductDetail from '../Components/ProductDetail'

const ProductDetailPage = ({ type }) => {
  useEffect(() => {
    window.scrollTo(0, 500)
  }, [])
  const { id } = useParams()
  console.log('id', id)
  return (
    <React.Fragment>
      <Header />
      <Home />
      <ProductDetail type={type} id={id} />
      <Footer />
    </React.Fragment>
  )
}

export default ProductDetailPage
