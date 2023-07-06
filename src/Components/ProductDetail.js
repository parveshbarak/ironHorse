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
          <img src={`../` + arr[id - 1].image} alt='' />
        </div>
        <div className='box box2'>
          <div className='content'>
            <h1>{arr[id - 1].nickName}</h1>
            <h3>
              {arr[id - 1].fullName} - {arr[id - 1].mg}
            </h3>
            <div className='detail'>
              {arr[id - 1].detail.map((d) => {
                return (
                  <div className={d.heading === 'Composition' ? 'dc' : 'd'}>
                    <h3>{d.heading}</h3>
                    <div>
                      {d.description.map((ad) => {
                        return <p>{ad}</p>
                      })}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetail

//scroll down on products
