import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import ProductDetailPage from './Pages/ProductDetailPage'
import ProductsPage from './Pages/ProductsPage'
import AuthenticityPage from './Pages/AuthenticityPage'
import BenifitsPage from './Pages/BenifitsPage'
import AboutPage from './Pages/AboutPage'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/ironHorse' element={<HomePage />}></Route>
        <Route exact path='/products' element={<ProductsPage />}></Route>
        <Route exact path='/about' element={<AboutPage />}></Route>
        <Route exact path='/benifits' element={<BenifitsPage />}></Route>
        <Route
          exact
          path='/authenticity'
          element={<AuthenticityPage />}
        ></Route>
        <Route
          exact
          path='/injectables/:id'
          element={<ProductDetailPage type='injectables' />}
        ></Route>
        <Route
          exact
          path='/peptides/:id'
          element={<ProductDetailPage type='peptides' />}
        ></Route>
        <Route
          exact
          path='/orals/:id'
          element={<ProductDetailPage type='orals' />}
        ></Route>
      </Routes>
      <ToastContainer/>
    </Router>
  )
}

export default App
