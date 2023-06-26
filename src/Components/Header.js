import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

const Header = () => {
  const [isClicked, setIsClicked] = useState(false)
  const menuClick = (e) => {
    setIsClicked((current) => !current)
  }
  return (
    <header className='header'>
      <Link to='/' className='logo'>
        {' '}
        <span>iron</span>Horse{' '}
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
        <Link to='/products' onClick={menuClick}>
          products
        </Link>
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
