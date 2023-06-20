import React from 'react'
import { injectables, peptides, orals } from '../seeder'

const ProductDetail = ({ type, id }) => {
  let arr
  if (type === 'injectables') arr = injectables
  else if (type === 'peptides') arr = peptides
  else arr = orals
  return (
    <section className='product-detail' id='product-detail'>
      <h1 className='heading'>
        <span>ironHorse product-detail</span>
      </h1>
      <div className='box-container'>
        <div className='box box1'>
          <img src={`../`+arr[id-1].image} alt='' />
          <p>Here we will print Id of the product :- {id} </p>
        </div>
        <div className='box box2'>
          <div className='content'>
            <h3>{arr[id-1].heading}</h3>
            <span>{arr[id-1].description}</span>
            <div className="detail">
            {arr[id-1].detail.map((d) => {
              return(<div className="d">
              <h3>{d.heading}</h3>
              <p>{d.description}</p>
              </div>)
            })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetail
