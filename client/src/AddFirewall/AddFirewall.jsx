import React from 'react'
import { useState,useEffect,useContext } from 'react'
import './AddFirewall.css'
import {DataContext} from './../Utils/DataContextProvider.js'
import {addFirewall} from './../Utils/api.js'
import { useNavigate } from 'react-router-dom'

function AddFirewall() {
  const initialValues = {
    name:"",
	  model:"",
    serial:"",
    management_ip:"",
    software:"",
    support:""
  }
  const {branches} = useContext(DataContext)
  const [firewall,setFirewall] = useState(initialValues)
  const navigate = useNavigate()

  const setValues = (e)=>{
    setFirewall({...firewall, [e.target.name]:e.target.value})
    console.log(firewall)
  }

  const saveFirewall = async (e)=>{
    e.preventDefault()
    const response = await addFirewall(firewall)
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
        <h2>ADD FIREWALL</h2>
          <div className='form-element'>
          <label>Branch</label>
          <select name='branch' onChange={e => setValues(e)}>
                <option defaultValue='' value=''>Select a branch</option>
                {branches && branches.map((item,index) => (
                  <option key={index} value={item.branch_code}>{item.name}</option>
                ))}
              </select>
          </div>
          <div className='form-element'>
          <label>Name</label>
          <input name='name' onChange={e => setValues(e)}></input>
          </div>
          <div className='sub-form-element'>
              <div >
                <label>Model</label>
                <input name='model' onChange={e => setValues(e)}></input>
              </div>
              <div>
                <label>Serial No</label>
                <input name='serial' onChange={e => setValues(e)}></input>
              </div>
          </div>
          <div className='sub-form-element'>
              <div >
                <label>Management IP</label>
                <input name='management_ip' onChange={e => setValues(e)}></input>
              </div>
              <div>
                <label>Software</label>
                <input name='software' onChange={e => setValues(e)}></input>
              </div>
          </div>
          <div className='form-element'>
          <label>Support</label>
          <input name='support' onChange={e => setValues(e)}></input>
          </div>
          <button className='save-btn button' onClick={e=>saveFirewall(e)}>Save</button>
        </form>
      </div>
    </div>
  )
}

export default AddFirewall