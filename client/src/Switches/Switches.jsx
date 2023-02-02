import React from 'react'
import './Switches.css'
import switches from './../feed/Switches.json'

function Switches() {
  console.log(switches)
  return (
    <div className='page-container'>
      {switches.map(entry => {
            return (<div className='branch'><h3 className='branch_title'>Branch: {entry.branch}</h3>
            <div className='branch_firewalls'>
            {entry.switches.map(sw=>{
                return(<div className='fw-card card'>
                    <table className='fw-table table'>
                        <tr>
                            <th>Name</th>
                            <td>{sw.switch_name}</td>
                        </tr>
                        <tr>
                            <th>Model</th>
                            <td>{sw.model}</td>
                        </tr>
                        <tr>
                            <th>MGMT IP</th>
                            <td>{sw.ip_address}</td>
                        </tr>
                        <tr>
                            <th>Software</th>
                            <td>{sw.software}</td>
                        </tr>
                        <tr>
                            <th>Serial</th>
                            <td>{sw.softserial_noware}</td>
                        </tr>
                    </table>
                    </div>)
            })}
            </div>
        </div>)
        })}
    </div>
  )
}

export default Switches