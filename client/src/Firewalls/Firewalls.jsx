import React,{useContext} from 'react'
import './Firewalls.css'
import {DataContext} from './../Utils/DataContextProvider.js'

function Firewalls() {
    const {branches,firewalls} = useContext(DataContext)
    console.log(firewalls)
    let firewallArray = []

    if(branches){
        branches.map(branch => {
            if(firewalls){
                let object = {"branch":branch.branch_code, "firewalls":[]}
                firewalls.map(fw => {
                        if(object.branch == fw.branch){
                            object.firewalls.push(fw)
                        }
                    }
                    )
                    firewallArray.push(object)
            }
        })
        console.log("New Firewall Array",firewallArray)
    }

  return (
    <div className='page-container'>
        {firewallArray.map(entry => {
            if(entry.firewalls.length > 0){
            return (<div className='branch'><h3 className='branch_title'>Branch: {entry.branch}</h3>
            <div className='branch_firewalls'>
            {entry.firewalls.map((fw,index)=>{
                return(<div className='fw-card card'>
                    <table className='fw-table table' key={index}>
                        <tr>
                            <th>Name</th>
                            <td>{fw.name}</td>
                        </tr>
                        <tr>
                            <th>Model</th>
                            <td>{fw.model}</td>
                        </tr>
                        <tr>
                            <th>MGMT IP</th>
                            <td>{fw.management_ip}</td>
                        </tr>
                        <tr>
                            <th>Software</th>
                            <td>{fw.software}</td>
                        </tr>
                    </table>
                    </div>)
            })}
            </div>
        </div>)
            }    
    })}
    </div>
  )
}

export default Firewalls