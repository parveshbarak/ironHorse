import React from 'react'
import { Link } from 'react-router-dom'
import { injectables, orals, peptides } from '../seeder'

const ProductList = ({type}) => {
    let arr
    if (type === 'injectables') arr = injectables
    else if (type === 'peptides') arr = peptides
    else arr = orals
    return (
        <React.Fragment>
          <section
            className='products'
            style={{ display: 'block' }}
          >
            <h1 className='heading'>
              <span>{type}</span>
            </h1>
            <div className='box-container'>
              {arr.map((ele) => (
                <Link to={`/${type}/${ele.id}`}>
                  <div className='box'>
                    <img src={ele.image} alt='' />
                    <div className='content'>
                      <h2>{ele.nickName}</h2>
                      <h3>{ele.mg}</h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </React.Fragment>
      )
}

export default ProductList
