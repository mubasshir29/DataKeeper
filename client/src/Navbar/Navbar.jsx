import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='logo-container'>
            
        </div>
        <div className='navtabs-container'>
            <button className='button'>
                Login
            </button>
            <button className='button'>
                Profile
            </button>
        </div>
    </div>
  )
}

export default Navbar