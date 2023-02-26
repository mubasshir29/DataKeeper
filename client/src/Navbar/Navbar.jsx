import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='logo-container'>
            
        </div>
        <div className='navtabs-container'>
            <button className='button gradient-6'>
                Login
            </button>
            <button className='button gradient-6'>
                Profile
            </button>
        </div>
    </div>
  )
}

export default Navbar