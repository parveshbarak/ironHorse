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
        </div>
        <div className='box box2'>
          <div className='content'>
            <span>ironHorse orignal</span>
            <h3>{type}</h3>
            <p>Here we will print Id of the product :- {id} </p>
            <p>Here we will print Id of the product :- {id} </p>
            <p>Here we will print Id of the product :- {id} </p>
            <p>Here we will print Id of the product :- {id} </p>
            <p>Lorem</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetail
