import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

const Header = () => {
  const [isClicked, setIsClicked] = useState(false)
  const [showProductType, setShowProductType] = useState(false)
  const menuClick = (e) => {
    setIsClicked((current) => !current)
  }
  const productsClick = (e) => {
    setShowProductType((current) => !current)
  }
  const handleClick = (e) => {
    menuClick()
    productsClick()

  }

  return (
    <header className='header'>
      <Link to='/' className='logo'>
        <img src="images/logo.png" alt="ironHorse"/>
      </Link>

      <div
        id='menu-btn'
        className={isClicked ? 'fas fa-times' : 'fas fa-bars'}
        onClick={menuClick}
      ></div>

      <nav className={isClicked ? 'navbar active' : 'navbar'}>
        <Link to='/' onClick={menuClick}>
          home
        </Link>
        <Link to='/about' onClick={menuClick}>
          about us
        </Link>
        <span className='showProductType' onClick={productsClick}>
          products <i class='fa fa-caret-down'></i>
        </span>
        <span
          id='productType'
          className={showProductType ? 'clicked' : 'notClicked'}
        >
          <Link to='/injectables' onClick={handleClick}>
            injectables
          </Link>
          <Link to='/orals' onClick={handleClick}>
            Orals
          </Link>
          <Link to='/peptides' onClick={handleClick}>
            Peptides
          </Link>
        </span>
        <Link to='/authenticity' onClick={menuClick}>
          check aunthenticity
        </Link>
        <a href='#contact' onClick={menuClick}>
          conatct us
        </a>
      </nav>
    </header>
  )
}

export default Header
