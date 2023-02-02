import React from 'react'
import './AddWireless.css'
import { useState,useEffect,useContext } from 'react'
import {DataContext} from './../Utils/DataContextProvider.js'

function AddWireless() {
  const {branches} = useContext(DataContext)
  return (
    <div className='add-page-container'>
      <div className='add-form-container card'>
        <form className='add-form'>
        <h2>ADD WIRELESS CONTROLLER</h2>
          <div className='form-element'>
          <label>Branch</label>
            <select name='branch'>
                <option defaultValue='' value=''>Select a branch</option>
                {branches && branches.map((item,index) => (
                  <option key={index} value={item.branch_code}>{item.name}</option>
                ))}
            </select>
          </div>
          <div className='form-element'>
          <label>Name</label>
          <input></input>
          </div>
          <div className='sub-form-element'>
              <div >
                <label>Model</label>
                <input></input>
              </div>
              <div>
                <label>Serial No</label>
                <input></input>
              </div>
          </div>
          <div className='sub-form-element'>
              <div >
                <label>Management IP</label>
                <input></input>
              </div>
              <div>
                <label>Software</label>
                <input></input>
              </div>
          </div>
          <div className='form-element'>
          <label>Support</label>
          <input></input>
          </div>
          <button className='save-btn button'>Save</button>
        </form>
      </div>
    </div>
  )
}

export default AddWireless