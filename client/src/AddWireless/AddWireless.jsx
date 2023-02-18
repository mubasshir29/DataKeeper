import React from 'react'
import './AddWireless.css'
import {addWLC} from './../Utils/api.js'
import { useState,useEffect,useContext } from 'react'
import {DataContext} from './../Utils/DataContextProvider.js'
import {useNavigate} from 'react-router-dom'

function AddWireless() {
  const navigate = useNavigate()
  const {branches} = useContext(DataContext)
  const defaultValues = {
    branch: "",
    name:"",
	  model:"",
    serial: "",
    management_ip:"",
    software:"",
    support: ""
  }

  const [newController, setNewController] = useState(defaultValues)

  const onValueChange = (e)=>{
    setNewController({...newController, [e.target.name]:e.target.value})
    //console.log(newController)
  }
  const onSave = async (e)=>{
    e.preventDefault()
    //console.log(newController)
    const response = await addWLC(newController)
    // console.log(response)
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
        <h2>ADD WIRELESS CONTROLLER</h2>
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
              <div >
                <label>Management IP</label>
                <input name='management_ip' onChange={e => onValueChange(e)}></input>
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

export default AddWireless