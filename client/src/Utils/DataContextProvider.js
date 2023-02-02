import React,{createContext,useEffect,useState} from 'react'
import Firewalls from '../Firewalls/Firewalls.jsx'
import { getAllBranches, getInternetDetails, getFirewallDetails } from './api.js'

const DataContext = createContext()

function DataContextProvider(props) {
    const [branches, setBranches] = useState()
    const [connections, setConnections] = useState()
    const [firewalls,setFirewalls] = useState()
    const [providers, setProviders] = useState(null)

    const getBranchDetails = async ()=>{
        const result = await getAllBranches()
        //console.log("All branches:",result)
        setBranches(result)
      }
    const getConnectionDetails = async ()=>{
        const result = await getInternetDetails()
        // console.log("All Connections:",result)
        setConnections(result)
      }
      const getFirewalls = async ()=>{
        const result = await getFirewallDetails()
        //console.log("Firewalls",result)
        setFirewalls(result)
      }
      useEffect(()=>{
        getBranchDetails()
        getConnectionDetails()
        getFirewalls()
      },[])
  return (
    <DataContext.Provider value={{branches,connections,firewalls}}>
        {props.children}
    </DataContext.Provider>
  )
}

export {DataContext ,DataContextProvider}