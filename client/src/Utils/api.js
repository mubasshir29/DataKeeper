import axios from 'axios'
const server = "http://localhost:9000"

export const addBranch = async (branch)=>{
    console.log("From API",branch)
    try{
        await axios.post(`${server}/new/branch`,branch)
        //console.log("Data sent")
    }
    catch(error){
        console.log("Error in sending data",error)
    }
}

export const getBranch = async (id)=>{
    try{
        const data = await axios.get(`${server}/branch/${id}`)
        //console.log("Data received", data)
    }
    catch(error){
        console.log("Error in getting data",error)
    }
}

export const getAllBranches = async ()=>{
    try{
        const response = await axios.get(`${server}/branch`)
        //console.log("Data received", response.data)
        return response.data
    }
    catch(error){
        console.log("Error in getting data",error)
    }
}

export const addInternetConnection = async (connection)=>{
    try{
        const response = await axios.post(`${server}/new/connection`,connection)
        // console.log("Response received", response.status)
        // console.log(response.data)
        return response;
    }
    catch(error){
        console.log("Error in getting data",error)
    }
}

export const getInternetDetails = async ()=>{
    try{
        const response = await axios.get(`${server}/internet`)
        // console.log("Getting internet details from backend")
        // console.log("Internet Data received", response.data)
        return response.data
    }
    catch(error){
        console.log("Error in getting data",error)
    }
}

export const addFirewall = async (newFirewall)=>{
    //console.log(newFirewall)
    try{
        const response = await axios.post(`${server}/new/firewall`,newFirewall)
        // console.log("Response received", response.status)
        //console.log("Response to Add Firewall",response.data)
        return response;
    }
    catch(error){
        console.log("Error in getting data",error)
    }
}
export const getFirewallDetails = async ()=>{
    try{
        const response = await axios.get(`${server}/firewall`)
        // console.log("Getting firewall details from backend")
        console.log("Firewall Data received", response.data)
        return response.data
    }
    catch(error){
        console.log("Error in getting data",error)
    }
}

export const addSwitch = async (newSwitch)=>{
    //console.log(newSwitch)
    try{
        const response = await axios.post(`${server}/new/switch`,newSwitch)
        console.log("Response received", response.status)
        //console.log("Response to Add Firewall",response.data)
        return response;
    }
    catch(error){
        console.log("Error in getting data",error)
    }
}