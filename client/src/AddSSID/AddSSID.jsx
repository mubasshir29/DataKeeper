import React from 'react'
import './AddSSID.css'
import { useState,useEffect,useContext } from 'react'
import {DataContext} from './../Utils/DataContextProvider.js'

function AddSSID() {
  const {branches} = useContext(DataContext)
  return (
    <div className='add-page-container'>
      <div className='add-form-container card'>
        <form className='add-form'>
        <h2>ADD SSID</h2>
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
          <label>Controller</label>
          <input></input>
          </div>
          <div className='sub-form-element'>
              <div >
                <label>SSID</label>
                <input></input>
              </div>
              <div>
                <label>Password</label>
                <input></input>
              </div>
          </div>
          <div className='form-element'>
          <label>Description</label>
          <input></input>
          </div>
          <button className='save-btn button'>Save</button>
        </form>
      </div>
    </div>
  )
}

export default AddSSID