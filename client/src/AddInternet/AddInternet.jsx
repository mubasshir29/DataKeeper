import React from 'react'
import { useState,useEffect,useContext } from 'react'
import './AddInternet.css'
import {addInternetConnection} from './../Utils/api.js'
import {DataContext} from './../Utils/DataContextProvider.js'
import { useNavigate } from 'react-router-dom'

function AddInternet() {
  const initialValues = {
    branch: "",
    isp:"",
    type: "",
    account_no: "",
    account_holder: "",
    bandwidth: "",
    support: "",
    comments: ""
  }
  const {branches} = useContext(DataContext)
  const [connection,setConnection] = useState(initialValues)
  const navigate = useNavigate()
  useEffect(()=>{
    
  },[])

  const setValues = (e)=>{
    setConnection({...connection,[e.target.name]:e.target.value})
  }
  const saveConnection = async (e)=>{
    e.preventDefault()
    //console.log(connection)
    const response = await addInternetConnection(connection)
    console.log(response.status)
    if(response.status == 200){
      navigate('/')
    }
    else{
      window.alert("There is an error")
    }
  }

  return (
    <div className='add-page-container'>
      <div className='add-form-container card'>
        <form className='add-form'>
        <h2>ADD INTERNET</h2>
          <div className='form-element'>
            <label>Branch</label>
              <select name='branch' onChange={e => setValues(e)}>
                <option defaultValue='' value=''>Select a branch</option>
                {branches && branches.map((item,index) => (
                  <option key={index} value={item.branch_code}>{item.name}</option>
                ))}
              </select>
          </div>
          <div className='sub-form-element'>
              <div >
                <label>ISP</label>
                <select name='isp' onChange={e => setValues(e)}>
                  <option value=''>Select Provider</option>
                  <option value='Etisalat'>Etisalat</option>
                  <option value='Du'>Du</option>
                </select>
              </div>
              <div>
                <label>Connection type</label>
                <select name='type' onChange={e => setValues(e)}>
                  <option value=''>Select Connection type</option>
                  <option value='Leased'>Leased line</option>
                  <option value='Shared'>Shared</option>
                </select>
              </div>
          </div>
          <div className='sub-form-element'>
              <div >
                <label>Account No</label>
                <input name='account_no' onChange={e => setValues(e)}></input>
              </div>
              <div>
                <label>Account holder</label>
                <input name='account_holder' onChange={e => setValues(e)}></input>
              </div>
          </div>
          <div className='form-element'>
            <label>Bandwidth</label>
            <input name='bandwidth' onChange={e => setValues(e)}></input>
          </div>
          <div className='form-element'>
            <label>Support</label>
            <input name='support' onChange={e => setValues(e)}></input>
          </div>
          <div className='form-element'>
            <label>Comments</label>
            <input name='comments' onChange={e => setValues(e)}></input>
          </div>
          <button className='save-btn button' onClick={e => saveConnection(e)}>Save</button>
        </form>
      </div>
      
    </div>
  )
}

export default AddInternet