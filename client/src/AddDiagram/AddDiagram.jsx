import React from 'react'
import './AddDiagram.css'

function AddDiagram() {
  return (
    <div className='add-page-container'>
      <div className='add-form-container card'>
        <form className='add-form'>
        <h2>ADD DIAGRAM</h2>
          <div className='form-element'>
          <label>Branch</label>
          <input></input>
          </div>
          <div className='form-element'>
          <label>PDF File</label>
          <input type='file'></input>
          </div>
          <button className='save-btn button'>Save</button>
        </form>
      </div>
    </div>
  )
}

export default AddDiagram