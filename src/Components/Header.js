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
      <Link to='#' className='logo'>
        {' '}
        <span>iron</span>Horse{' '}
      </Link>

      <div
        id='menu-btn'
        className={isClicked ? 'fas fa-times' : 'fas fa-bars'}
        onClick={menuClick}
      ></div>

      <nav className={isClicked ? 'navbar active' : 'navbar'}>
        <Link to='/'>home</Link>
        <Link to='/about'>about</Link>
        <Link to='/benifits'>benifits</Link>
        <Link to='/authenticity'>aunthenticity</Link>
        <a href='#contact'>conatct us</a>
        <Link to='/products'>products</Link>
      </nav>
    </header>
  )
}

export default Header
