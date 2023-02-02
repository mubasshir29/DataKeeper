import React from 'react'
import './Wireless.css'
import wlc from './../feed/WLC.json'
import aps from './../feed/AccessPoints.json'
import ssid from './../feed/SSID.json'

function Wireless() {
    console.log(wlc)
  return (
    <div className='page-container'>
        {wlc.map(entry => {
            return (<div className='branch'><h3 className='branch_title'>Branch: {entry.branch}</h3>
            <div className='branch_controllers'>
                <h4 className='sub-title'>Wireless Controller</h4>
            {entry.controllers.map(wlc=>{
                return(<div className='wireless-card card'>
                    <table className='wireless-table table'>
                        <tr>
                            <th>Name</th>
                            <td>{wlc.name}</td>
                        </tr>
                        <tr>
                            <th>Model</th>
                            <td>{wlc.model}</td>
                        </tr>
                        <tr>
                            <th>Mgmt IP</th>
                            <td>{wlc.ip}</td>
                        </tr>
                    </table>
                    </div>)
            })}
            <h4 className='sub-title'>SSIDs</h4>
            {ssid.map(wifi => {
                if(wifi.branch === entry.branch){
                    return(<div className='wireless-ssid-card'>
                        <table className='wireless-ssid-table'>
                            <tr>
                                <th>SSID</th>
                                <th>Password</th>
                            </tr>
                            {wifi.ssids.map(item => {
                                return(<tr>
                                    <td>{item.name}</td>
                                    <td>{item.password}</td>
                                </tr>)
                            })}
                        </table>
                    </div>)
                }
            })}
            </div>
        </div>)
        })}
    </div>
  )
}

export default Wireless