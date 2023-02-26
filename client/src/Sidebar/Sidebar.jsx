import React from 'react'
import './Sidebar.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import {NavLink} from 'react-router-dom'

function Sidebar() {
  return (
    <div className='sidebar-container'>
        <div className='app-logo'><h1>Keep<span className='half-title'>Data</span></h1></div>
        <ul className='sidebar-list'>
            <li><NavLink to='/'><i className="bi bi-house-fill"></i> Home</NavLink></li>
            <li><NavLink to='/internet'><i className="bi bi-globe"></i> Internet Accounts</NavLink></li>
            <li><NavLink to='/firewall'><i className="bi bi-shield-shaded"></i> Firewalls</NavLink></li>
            <li><NavLink to='/switches'><i className="bi bi-hdd-network-fill"></i> Switches</NavLink></li>
            <li><NavLink to='/wireless'><i class="bi bi-wifi"></i> Wireless</NavLink></li>
            <li><NavLink to='/access-points'><i class="bi bi-router-fill"></i> Access Points</NavLink></li>
            <li><NavLink to='/diagrams'><i className="bi bi-diagram-3-fill"></i> Diagrams</NavLink></li>
            <li><NavLink to='/settings'><i className="bi bi-gear-fill"></i> Settings</NavLink></li>
        </ul>
    </div>
  )
}

export default Sidebar