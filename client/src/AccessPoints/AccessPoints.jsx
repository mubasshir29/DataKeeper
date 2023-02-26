import React,{useContext} from 'react'
import "./AccessPoints.css"
import {DataContext} from './../Utils/DataContextProvider.js'

function AccessPoints() {
    const {ap,branches} = useContext(DataContext)
    console.log(ap)
    console.log(branches)
  return (
    <div className='page-container'>
        {branches && branches.map(branch =>{
            return <div className='branch-ap-table'>
            <h3 className='branch_title'>{branch.name}</h3>    
            <table className='ap-table'>
                <thead>
                    <tr className='ap-table-head'>
                        <th>Name</th>
                        <th>Model</th>
                        <th>Serial</th>
                        <th>MAC Address</th>
                        <th>IP Address</th>
                        <th>Controller</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {ap && ap.map((router,index)=>{
                        if(branch.branch_code == router.branch){
                            return(
                            <tr>
                                <td>{router.name}</td>
                                <td>{router.model}</td>
                                <td>{router.serial}</td>
                                <td>{router.mac_address}</td>
                                <td>{router.management_ip}</td>
                                <td>{router.controller}</td>
                                <td>{router.description}</td>
                            </tr>
                            )
                        }
                    })}
                </tbody>
            </table>
            </div>
        })}
    </div>
  )
}

export default AccessPoints