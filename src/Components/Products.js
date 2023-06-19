import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { injectables, peptides, orals } from '../seeder'

const Injectables = ({ display }) => {
  return (
    <React.Fragment>
      <section
        className='products'
        id='injectables'
        style={{ display: `${display}` }}
      >
        <h1 className='heading'>
          <span>injectables</span>
        </h1>
        <div className='box-container'>
          {injectables.map((injectable) => (
            <div className='box'>
              <img src={injectable.image} alt='' />
              <div className='content'>
                <span>ironHorse orignal</span>
                <h3>{injectable.heading}</h3>
                <div className='share'>
                  <Link
                    to={`/injectables/${injectable.id}`}
                    className='injectables'
                  >
                    show details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </React.Fragment>
  )
}

const Peptides = ({ display }) => {
  return (
    <section
      className='products'
      id='peptides'
      style={{ display: `${display}` }}
    >
      <h1 className='heading'>
        <span>peptides</span>
      </h1>

      <div className='box-container'>
        {peptides.map((peptide) => (
          <div className='box'>
            <img src={peptide.image} alt='' />
            <div className='content'>
              <span>ironHorse orignal</span>
              <h3>{peptide.heading}</h3>
              <div className='share'>
                <Link to={`/peptides/${peptide.id}`} className='injectables'>
                  show details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

const Orals = ({ display }) => {
  return (
    <section className='products' id='orals' style={{ display: `${display}` }}>
      <h1 className='heading'>
        <span>orals</span>
      </h1>

      <div className='box-container'>
        {orals.map((oral) => (
          <div className='box'>
            <img src={oral.image} alt='' />
            <div className='content'>
              <span>ironHorse orignal</span>
              <h3>{oral.heading}</h3>
              <div className='share'>
                <Link to={`/orals/${oral.id}`} className='injectables'>
                  show details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

const Products = () => {
  const [injectables, setInjectables] = useState(false)
  const [peptides, setPeptides] = useState(false)
  const [orals, setOrals] = useState(false)
  const showInjectables = () => {
    setInjectables(true)
    setPeptides(false)
    setOrals(false)
  }
  const showPeptides = () => {
    setPeptides(true)
    setInjectables(false)
    setOrals(false)
  }
  const showOrals = () => {
    setOrals(true)
    setPeptides(false)
    setInjectables(false)
  }
  return (
    <React.Fragment>
      <section className='products' id='products'>
        <h1 className='heading'>
          <span>ironHorse products</span>
        </h1>

        <div className='box-container'>
          <div className='box' onClick={showInjectables}>
            <img src='images/prod1.png' alt='' />
            <div className='content'>
              <span>ironHorse orignal</span>
              <h3>injectables</h3>
              <div className='share'>
                <Link to='' className='injectables'>
                  {' '}
                  View Collection{' '}
                </Link>
              </div>
            </div>
          </div>

          <div className='box' onClick={showPeptides}>
            <img src='images/prod2.png' alt='' />
            <div className='content'>
              <span>ironHorse orignal</span>
              <h3>peptides</h3>
              <div className='share'>
                <Link to='' className='peptides'>
                  {' '}
                  View Collection{' '}
                </Link>
              </div>
            </div>
          </div>

          <div className='box' onClick={showOrals}>
            <img src='images/prod3.png' alt='' />
            <div className='content'>
              <span>ironHorse orignal</span>
              <h3>orals</h3>
              <div className='share'>
                <Link to='' className='orals'>
                  {' '}
                  View Collection{' '}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Injectables display={injectables ? 'block' : 'none'} />
      <Peptides display={peptides ? 'block' : 'none'} />
      <Orals display={orals ? 'block' : 'none'} />
    </React.Fragment>
  )
}

export default Products
