import React,{createContext,useEffect,useState} from 'react'
import Firewalls from '../Firewalls/Firewalls.jsx'
import { getAllBranches, getAllInternetDetails, getAllFirewallDetails,getAllWlcDetails,getAllSwitchDetails } from './api.js'

const DataContext = createContext()

function DataContextProvider(props) {
    const [branches, setBranches] = useState()
    const [connections, setConnections] = useState()
    const [firewalls,setFirewalls] = useState()
    const [providers, setProviders] = useState(null)
    const [wlc, setWlc] = useState(null)
    const [switches, setSwitches] = useState(null)

    const getBranchDetails = async ()=>{
        const result = await getAllBranches()
        //console.log("All branches:",result)
        setBranches(result)
      }
    const getConnectionDetails = async ()=>{
        const result = await getAllInternetDetails()
        // console.log("All Connections:",result)
        setConnections(result)
      }
      const getFirewalls = async ()=>{
        const result = await getAllFirewallDetails()
        //console.log("Firewalls",result)
        setFirewalls(result)
      }
      const getSwitches = async ()=>{
        const result = await getAllSwitchDetails()
        //console.log("Switches",result)
        setSwitches(result)
      }

      const getWlc = async ()=>{
        const result = await getAllWlcDetails()
        //console.log("Firewalls",result)
        setWlc(result)
      }
      useEffect(()=>{
        getBranchDetails()
        getConnectionDetails()
        getFirewalls()
        getWlc()
        getSwitches()
      },[])
  return (
    <DataContext.Provider value={{branches,connections,firewalls,wlc,switches}}>
        {props.children}
    </DataContext.Provider>
  )
}

export {DataContext ,DataContextProvider}