import React from 'react'
import '../asset/style/navbar.css'
function Navbar() {
  return (
    <div>
        <header className='header'>
            <a href="#" className='logo'>Portfolio</a>

            <nav className='navbar'>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Contact</a>
            </nav>
        </header>
    </div>
  )
}

export default Navbar
