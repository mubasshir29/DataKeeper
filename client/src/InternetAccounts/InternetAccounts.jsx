import React,{useContext} from 'react'
import './InternetAccounts.css'
import Internet from './../feed/InternetAccounts.json'
import {DataContext} from './../Utils/DataContextProvider.js'
import { useState } from 'react'

function InternetAccounts() {
    const {connections} = useContext(DataContext)
    //console.log(connections)
    const {branches} = useContext(DataContext)
    //console.log(branches)

    let internet = []

    if(branches){
        branches.map(branch => {
            if(connections){
                let object = {"branch":branch.branch_code, "internet_accounts":[]}
                connections.map(connection => {
                        if(object.branch == connection.branch){
                            object.internet_accounts.push(connection)
                        }
                    }
                    )
                    internet.push(object)
            }
        })
        console.log("New Internet Array",internet)
    }
  return (
    <div className='page-container'>
        { internet && internet.map(entry => {
            if(entry.internet_accounts.length > 0){
            return (<div className='branch'><h3 className='branch_title'>Branch: {entry.branch}</h3>
                <div className='branch_accounts'>
                {entry.internet_accounts.map(account=>{
                    return(<div className='account-card card'>
                        <table className='account_table table'>
                            <tr>
                                <th>Provider</th>
                                <td>{account.isp}</td>
                            </tr>
                            <tr>
                                <th>Account No</th>
                                <td>{account.account_no}</td>
                            </tr>
                            <tr>
                                <th>Account holder</th>
                                <td>{account.account_holder}</td>
                            </tr>
                            <tr>
                                <th>Bandwidth</th>
                                <td>{account.bandwidth}</td>
                            </tr>
                            <tr>
                                <th>Support</th>
                                <td>{account.support}</td>
                            </tr>
                            <tr>
                                <th>Comments</th>
                                <td>{account.comments}</td>
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

export default InternetAccounts