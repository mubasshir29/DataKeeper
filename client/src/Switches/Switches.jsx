import React,{useContext} from 'react'
import './Switches.css'
import n_switches from './../feed/Switches.json'
import {DataContext} from './../Utils/DataContextProvider.js'

function Switches() {
    const {switches,branches} = useContext(DataContext)
    console.log("Switches",switches)

    let Switches = []

    if(branches){
        branches.map(branch => {
            if(switches){
                let object = {"branch":branch.branch_code, "switches":[]}
                switches.map(sw => {
                        if(object.branch == sw.branch){
                            object.switches.push(sw)
                        }
                    }
                    )
                    Switches.push(object)
            }
        })
        console.log("New Switches Array",Switches)
    }

    //console.log(n_switches)
  return (
    <div className='page-container'>
      {Switches && Switches.map((entry,index) => {
            if(entry.switches.length > 0){
                return (<div className='branch'><h3 className='branch_title'>Branch: {entry.branch}</h3>
            <div className='branch_firewalls' key={index}>
            
                {/* // return(<div className='fw-card card'>
                //     <table className='fw-table table' key={index}>
                //         <tr>
                //             <th>Name</th>
                //             <td>{sw.switch_name}</td>
                //         </tr>
                //         <tr>
                //             <th>Model</th>
                //             <td>{sw.model}</td>
                //         </tr>
                //         <tr>
                //             <th>MGMT IP</th>
                //             <td>{sw.ip_address}</td>
                //         </tr>
                //         <tr>
                //             <th>Software</th>
                //             <td>{sw.software}</td>
                //         </tr>
                //         <tr>
                //             <th>Serial</th>
                //             <td>{sw.softserial_noware}</td>
                //         </tr>
                //     </table>
                //     </div>) */}
                <div>
                    <table className='switch-table'>
                        <thead>
                            <tr>
                                <th className='seq_no'>#</th>
                                <th>Name</th>
                                <th>Model</th>
                                <th>MGMT IP</th>
                                <th>Software</th>
                                <th>Serial</th>
                                <th>Support</th>
                            </tr>
                        </thead>
                        <tbody>
                        {entry.switches.map((sw,index)=>{
                            return(<tr>
                                <td >{index+1}</td>
                                <td>{sw.switch_name}</td>
                                <td>{sw.model}</td>
                                <td>{sw.ip_address}</td>
                                <td>{sw.software}</td>
                                <td>{sw.serial_no}</td>
                                <td>{sw.support}</td>
                            </tr>)
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>)
            }
        })}
    </div>
  )
}

export default Switches