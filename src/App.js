import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import ProductDetailPage from './Pages/ProductDetailPage'
import AuthenticityPage from './Pages/AuthenticityPage'
import BenifitsPage from './Pages/BenifitsPage'
import AboutPage from './Pages/AboutPage'
import { ToastContainer } from 'react-toastify'
import RealFakePage from './Pages/RealFakePage'
import ProductListPage from './Pages/ProductListPage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<HomePage />}></Route>
        <Route exact path='/injectables' element={<ProductListPage type='injectables'/>}></Route>
        <Route exact path='/orals' element={<ProductListPage type='orals'/>}></Route>
        <Route exact path='/peptides' element={<ProductListPage type='peptides'/>}></Route>
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
        <Route
          exact
          path='/realFake'
          element={<RealFakePage />}
        ></Route>
      </Routes>
      <ToastContainer/>
    </Router>
  )
}

export default App
