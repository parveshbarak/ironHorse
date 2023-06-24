import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { injectables, peptides, orals } from '../seeder'

const Injectables = ({ display }) => {
  return (
    <React.Fragment>
      <section
        className='products'
        id='injectableshere'
        style={{ display: `${display}` }}
      >
        <h1 className='heading'>
          <span>injectables</span>
        </h1>
        <div className='box-container'>
          {injectables.map((injectable) => (
            <Link to={`/injectables/${injectable.id}`}>
              <div className='box'>
                <img src={injectable.image} alt='' />
                <div className='content'>
                  <h2>{injectable.nickName}</h2>
                  <h3>{injectable.mg}</h3>
                </div>
              </div>
            </Link>
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
          <Link to={`/peptides/${peptide.id}`} className='injectables'>
            <div className='box'>
              <img src={peptide.image} alt='' />
              <div className='content'>
                <h2>{peptide.nickName}</h2>
                <h3>{peptide.mg}</h3>
              </div>
            </div>
          </Link>
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
          <Link to={`/orals/${oral.id}`} className='injectables'>
            <div className='box'>
              <img src={oral.image} alt='' />
              <div className='content'>
                <h2>{oral.nickName}</h2>
                <h3>{oral.mg}</h3>
              </div>
            </div>
          </Link>
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
    window.scrollTo(0, 1700)
  }
  const showPeptides = () => {
    setPeptides(true)
    setInjectables(false)
    setOrals(false)
    window.scrollTo(0, 1700)
  }
  const showOrals = () => {
    setOrals(true)
    setPeptides(false)
    setInjectables(false)
    window.scrollTo(0, 1700)
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
              <h2>injectables</h2>
            </div>
          </div>

          <div className='box' onClick={showOrals}>
            <img src='images/prod3.png' alt='' />
            <div className='content'>
              <h2>orals</h2>
            </div>
          </div>

          <div className='box' onClick={showPeptides}>
            <img src='images/prod2.png' alt='' />
            <div className='content'>
              <h2>peptides</h2>
            </div>
          </div>
        </div>
      </section>
      <Injectables display={injectables ? 'block' : 'none'} />
      <Orals display={orals ? 'block' : 'none'} />
      <Peptides display={peptides ? 'block' : 'none'} />
    </React.Fragment>
  )
}

export default Products
