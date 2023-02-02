import React from 'react'
import { useState } from 'react'
import './AddBranch.css'
import {addBranch} from './../Utils/api.js'

function AddBranch() {
  const initialValues = {
    name:"",
    branch_code: "",
    location:"",
	  contact: ""
  }
  const [branch,setBranch] = useState(initialValues)

  const setBranchValue = (event)=>{
    setBranch({...branch, [event.target.name]:event.target.value})
    console.log(branch)
  }
  const saveBranch = async (e)=>{
    e.preventDefault()
    const result = await addBranch(branch)
  }

  return (
    <div className='add-page-container'>
      <div className='add-form-container card'>
        <form className='add-form'>
        <h2>ADD BRANCH OFFICE</h2>
        <div className='sub-form-element'>
              <div >
                <label>Name</label>
                <input name='name' onChange={e=>setBranchValue(e)}></input>
              </div>
              <div>
                <label>Branch Code</label>
                <input name='branch_code' onChange={e=>setBranchValue(e)}></input>
              </div>
          </div>
          <div className='form-element'>
          <label>Location</label>
          <input name='location' onChange={e=>setBranchValue(e)}></input>
          </div>
          <div className='form-element'>
          <label>Contact</label>
          <input name='contact' onChange={e=>setBranchValue(e)}></input>
          </div>
          <button className='save-btn button' onClick={e => saveBranch(e)}>Save</button>
        </form>
      </div>
    </div>
  )
}

export default AddBranch