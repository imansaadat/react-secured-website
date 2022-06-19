import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { SiDatabricks } from 'react-icons/si'
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  const [navbar, setNavbar] = useState(false)

  const handleNavbar = () => {
    setNavbar(!navbar)
  }

  const removeNavbar = () => {
    if (window.scrollY >= 400) {
      setNavbar(false)
    }
  }
  window.addEventListener('scroll', removeNavbar)

  return (
    <div className='nav' name='nav'>
      <div className='container'>
        <div className='logo'>
          <SiDatabricks className='icon' />
          <h1>Secured</h1>
        </div>
        <nav className='navbar'>
          <ul className={navbar ? 'nav_list active' : 'nav_list'}>
            <li><Link to='/'>home</Link></li>
            <li><Link to='/recovery'>recovery</Link></li>
            <li><Link to='/cloud'>cloud</Link></li>
            <li><Link to='/contact'>contact</Link></li>
          </ul>
        </nav>
        <button className='btn'>Sign in</button>
        <div className='hamMenu' onClick={handleNavbar}>
          {navbar ? (<FaTimes className='FaTimes' />) : (<FaBars className='icon' />)}
        </div>
      </div>
    </div>
  )
}

export default Navbar