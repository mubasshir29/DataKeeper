import React from 'react'
import './AddAP.css'
import { useState,useEffect,useContext } from 'react'
import {DataContext} from './../Utils/DataContextProvider.js'

function AddAP() {
  const {branches} = useContext(DataContext)
  return (
    <div className='add-page-container'>
      <div className='add-form-container card'>
        <form className='add-form'>
        <h2>ADD ACCESS POINT</h2>
        <div className='sub-form-element'>
              <div >
                <label>Branch</label>
                <select name='branch'>
                  <option defaultValue='' value=''>Select a branch</option>
                  {branches && branches.map((item,index) => (
                    <option key={index} value={item.branch_code}>{item.name}</option>
                  ))}
            </select>
              </div>
              <div>
                <label>Controller</label>
                <input></input>
              </div>
          </div>
          <div className='form-element'>
          <label>AP Name</label>
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
              <div>
                <label>Management IP</label>
                <input></input>
              </div>
              <div>
                <label>MAC Address</label>
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

export default AddAP