import React from 'react'
import './AddAP.css'
import { useState,useEffect,useContext } from 'react'
import {DataContext} from './../Utils/DataContextProvider.js'
import {addAP} from './../Utils/api.js'
import { useNavigate } from 'react-router-dom'

function AddAP() {
  const navigate = useNavigate()

  const defaultValues = {
    branch: "",
    controller:"",
    name:"",
	  model:"",
    serial: "",
    management_ip:"",
    mac_address:"",
    description: ""
  }
  const [newAP,setNewAP] = useState(defaultValues)
  const {branches, wlc} = useContext(DataContext)
  //console.log(wlc)

  const onValueChange = (e)=>{
    setNewAP({...newAP, [e.target.name]:e.target.value})
    //console.log(newAP)
  }
  const onSave = async (e)=>{
    e.preventDefault()
    //console.log(newAP)
    const response = await addAP(newAP)
    // // console.log(response)
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
        <h2>ADD ACCESS POINT</h2>
        <div className='sub-form-element'>
              <div >
                <label>Branch</label>
                <select name='branch' onChange={e => onValueChange(e)}>
                  <option defaultValue='' value=''>Select a branch</option>
                  {branches && branches.map((item,index) => (
                    <option key={index} value={item.branch_code}>{item.name}</option>
                  ))}
            </select>
              </div>
              <div>
                <label>Controller</label>
                <select name='controller' onChange={e => onValueChange(e)}>
                  <option defaultValue='' value=''>Select Controller</option>
                  {wlc && wlc.map((item,index) => {
                    if(newAP.branch == item.branch){
                      return <option key={index} value={item.name}>{item.name}</option>
                    }
                    
                  })}
                </select>
              </div>
          </div>
          <div className='form-element'>
          <label>AP Name</label>
          <input name='name' onChange={e => onValueChange(e)}></input>
          </div>
          <div className='sub-form-element'>
              <div >
                <label>Model</label>
                <input name='model' onChange={e => onValueChange(e)}></input>
              </div>
              <div>
                <label>Serial No</label>
                <input name='serial' onChange={e => onValueChange(e)}></input>
              </div>
          </div>
          <div className='sub-form-element'>
              <div>
                <label>Management IP</label>
                <input name='management_ip' onChange={e => onValueChange(e)}></input>
              </div>
              <div>
                <label>MAC Address</label>
                <input name='mac_address' onChange={e => onValueChange(e)}></input>
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

export default AddAP