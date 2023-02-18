import React,{useEffect} from 'react'
import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './Settings.css'
import {getAllBranches} from './../Utils/api.js'
import { useContext } from 'react'
import {DataContext} from './../Utils/DataContextProvider.js'

function Settings() {
  const {branches} = useContext(DataContext)
  //console.log("Branches: ",branches)
  return (
    <div className='page-container'>
        <div className='settings-page-container'>
              <div className='settings-add-buttons'>
              <NavLink to='/add-branch'>
                    <div className='add-card settings-btn'>
                      <div className='add-card-title'>
                        <i className="bi bi-globe"></i>
                        <h3>Add Branch</h3>
                      </div>
                      <p>Add a new branch location</p>
                    </div>
                    </NavLink>
                  <NavLink to='/add-internet'>
                    <div className='add-card settings-btn'>
                      <div className='add-card-title'>
                        <i className="bi bi-globe"></i>
                        <h3>Add Internet</h3>
                      </div>
                      <p>Add a new internet connection</p>
                    </div>
                    </NavLink>
                  <NavLink to='/add-firewall'>
                    <div className='add-card settings-btn'>
                      <div className='add-card-title'>
                      <i className="bi bi-shield-shaded"></i>
                        <h3>Add Firewall</h3>
                      </div>
                      <p>Add a new internet connection</p>
                    </div>
                    </NavLink>
                  <NavLink to='/add-switches'>
                    <div className='add-card settings-btn'>
                      <div className='add-card-title'>
                        <i className="bi bi-hdd-network-fill"></i>
                        <h3>Add Switch</h3>
                      </div>
                      <p>Add a new internet connection</p>
                    </div>
                    </NavLink>
                  <NavLink to='/add-wireless'>
                    <div className='add-card settings-btn'>
                      <div className='add-card-title'>
                        <i className="bi bi-router-fill"></i>
                        <h3>Add WLC</h3>
                      </div>
                      <p>Add a new wireless controller</p>
                    </div>
                  </NavLink>
                  <NavLink to='/add-ap'>
                    <div className='add-card settings-btn'>
                      <div className='add-card-title'>
                      <i className="bi bi-modem-fill"></i>
                        <h3>Add AP</h3>
                      </div>
                      <p>Add a new wireless AP</p>
                    </div>
                  </NavLink>
                  <NavLink to='/add-ssid'>
                    <div className='add-card settings-btn'>
                      <div className='add-card-title'>
                      <i className="bi bi-wifi"></i>
                        <h3>Add SSID</h3>
                      </div>
                      <p>Add a new wireless SSID</p>
                    </div>
                  </NavLink>
                  <NavLink to='/add-diagram'>
                    <div className='add-card settings-btn'>
                      <div className='add-card-title'>
                        <i className="bi bi-diagram-3-fill"></i>
                        <h3>Add Diagram</h3>
                      </div>
                      <p>Add a new internet connection</p>
                    </div>
                    </NavLink>
              </div>
        </div>
    </div>
  )
}

export default Settings