import React from 'react'
import './AddSwitches.css'
import {addSwitch} from './../Utils/api.js'
import { useState,useEffect,useContext } from 'react'
import {DataContext} from './../Utils/DataContextProvider.js'
import {useNavigate} from 'react-router-dom'

function AddSwitches() {
  const navigate = useNavigate()
  const defaultValue = {
    branch:"",
    switch_name:"",
    ip_address:"",
    model:"",
    serial_no:"",
    software:"",
    support:""
  }
  const {branches} = useContext(DataContext)
  const [newSwitch,setNewSwitch] = useState(defaultValue)

  const onValueChange = (e)=>{
    setNewSwitch({...newSwitch, [e.target.name]:e.target.value})
    //console.log(newSwitch)
  }
  const onSave = async (e)=>{
    e.preventDefault()
    //console.log(newSwitch)
    const response = await addSwitch(newSwitch)
    console.log(response)
    if(response.status == 200){
      navigate('/')
    }
    else{
      window.alert("Error in adding firewall")
    }
  }
  return (
    <div className='add-page-container'>
      <div className='add-form-container card'>
        <form className='add-form'>
        <h2>ADD SWITCH</h2>
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
          <label>Name</label>
          <input name='switch_name' onChange={e => onValueChange(e)}></input>
          </div>
          <div className='sub-form-element'>
              <div >
                <label>Model</label>
                <input name='model' onChange={e => onValueChange(e)}></input>
              </div>
              <div>
                <label>Serial No</label>
                <input name='serial_no' onChange={e => onValueChange(e)}></input>
              </div>
          </div>
          <div className='sub-form-element'>
              <div >
                <label>Management IP</label>
                <input name='ip_address' onChange={e => onValueChange(e)}></input>
              </div>
              <div>
                <label>Software</label>
                <input name='software' onChange={e => onValueChange(e)}></input>
              </div>
          </div>
          <div className='form-element'>
          <label>Support</label>
          <input name='support' onChange={e => onValueChange(e)}></input>
          </div>
          <button className='save-btn button' onClick={e=>onSave(e)}>Save</button>
        </form>
      </div>
    </div>
  )
}

export default AddSwitches