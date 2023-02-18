import React from 'react'
import './AddSSID.css'
import { useState,useEffect,useContext } from 'react'
import {DataContext} from './../Utils/DataContextProvider.js'
import {addSSID} from './../Utils/api.js'
import { useNavigate } from 'react-router-dom'

function AddSSID() {
  const navigate = useNavigate()
  const {branches, wlc} = useContext(DataContext)

  const defaultValues = {
    branch: "",
    controller:"",
	  ssid:"",
    password: "",
    description: ""
  }

  const [newSSID, setNewSSID] = useState(defaultValues)

  const onValueChange = (e)=>{
    setNewSSID({...newSSID, [e.target.name]:e.target.value})
    //console.log(newSSID)
  }
  const onSave = async (e)=>{
    e.preventDefault()
    //console.log(newSSID)
    const response = await addSSID(newSSID)
    //console.log(response)
    if(response.status == 200){
      navigate('/settings')
    }
    else{
      window.alert("Error in adding firewall")
    }
  }

  return (
    <div className='add-page-container'>
      <div className='add-form-container card'>
        <form className='add-form'>
        <h2>ADD SSID</h2>
          <div className='form-element'>
          <label>Branch</label>
          <select name='branch' onChange={e => onValueChange(e)}>
                  <option defaultValue='' value=''>Select a branch</option>
                  {branches && branches.map((item,index) => (
                    <option key={index} value={item.branch_code}>{item.name}</option>
                  ))}
            </select>
          </div>
          <div className='form-element'>
          <label>Controller</label>
          <select name='controller' onChange={e => onValueChange(e)}>
                  <option defaultValue='' value=''>Select Controller</option>
                  {wlc && wlc.map((item,index) => {
                    if(newSSID.branch == item.branch){
                      return <option key={index} value={item.name}>{item.name}</option>
                    }
                  })}
            </select>
          </div>
          <div className='sub-form-element'>
              <div >
                <label>SSID</label>
                <input name='ssid' onChange={e => onValueChange(e)}></input>
              </div>
              <div>
                <label>Password</label>
                <input name='password' onChange={e => onValueChange(e)}></input>
              </div>
          </div>
          <div className='form-element'>
          <label>Description</label>
          <input name='description' onChange={e => onValueChange(e)}></input>
          </div>
          <button className='save-btn button' onClick={e=>onSave(e)}>Save</button>
        </form>
      </div>
    </div>
  )
}

export default AddSSID