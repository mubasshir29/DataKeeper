import branchModel from './../Models/AddBranch.js'
import internetConnectionModel from './../Models/internetConnectionModel.js'
import firewallModel from './../Models/FirewallModel.js'
import switchModel from './../Models/SwitchModel.js'


export const getHomeData = (req,res)=>{
    
}

export const addBranch = async (req,res)=>{
    //console.log("Data received at backend")
    //console.log(req.body)
    try{
        const newBranch = branchModel(req.body)
        await newBranch.save()
        console.log("New branch added Successfully")
        res.status(200).json(newBranch)
    }
    catch(error){
        console.log("Error:",error)
    }
}

export const getBranchDetails = async (req,res)=>{
    try{
        if(req.params.id){
            const id = req.params.id
            const branch = branchModel.findOne({branch_code:id})
            res.status(200).json(branch)
        }
        else{
            const branches = await branchModel.find()
            // console.log("Request received at backend")
            // console.log(branches)
            res.status(200).json(branches)
        }
    }
    catch(error){
        console.log("Error:",error)
    }
}

export const addInternetConnection = async (req,res)=>{
    console.log("Data received at backend")
    console.log(req.body)
    try{
        const newConnection = internetConnectionModel(req.body)
        await newConnection.save()
        console.log("New Connection added Successfully")
        res.status(200).json(newConnection)
    }
    catch(error){
        console.log("Error:",error)
    }
}
export const getInternetDetails = async (req,res)=>{
    console.log("Request for internet details")
    try{
        if(req.params.id){
            const id = req.params.id
            const connection = internetConnectionModel.findOne({branch_code:id})
            res.status(200).json(connection)
        }
        else{
            const connections = await internetConnectionModel.find()
            // console.log("Request received at backend")
            // console.log(connections)
            res.status(200).json(connections)
        }
    }
    catch(error){
        console.log("Error:",error)
    }
}

export const addFirewall = async (req,res)=>{
    console.log("Data received at backend")
    console.log(req.body)
    try{
        const newFirewall = firewallModel(req.body)
        await newFirewall.save()
        console.log("New Firewall added Successfully")
        res.status(200).json(newFirewall)
    }
    catch(error){
        console.log("Error:",error)
    }
}
export const getFirewallDetails = async (req,res)=>{
    console.log("Request for Firewall details")
    try{
        if(req.params.id){
            const id = req.params.id
            const connection = firewallModel.findOne({branch_code:id})
            res.status(200).json(connection)
        }
        else{
            const firewalls = await firewallModel.find()
            // console.log("Request received at backend")
            // console.log(firewalls)
            res.status(200).json(firewalls)
        }
    }
    catch(error){
        console.log("Error:",error)
    }
}

export const addSwitch = async (req,res)=>{
    console.log("Data received at backend")
    console.log(req.body)
    try{
        const newSwitch = switchModel(req.body)
        await newSwitch.save()
        console.log("New Switch added Successfully")
        res.status(200).json(newSwitch)
    }
    catch(error){
        console.log("Error:",error)
    }
}
export const getSwitchDetails = async (req,res)=>{
    console.log("Request for Firewall details")
    try{
        if(req.params.id){
            const id = req.params.id
            const connection = firewallModel.findOne({branch_code:id})
            res.status(200).json(connection)
        }
        else{
            const firewalls = await firewallModel.find()
            // console.log("Request received at backend")
            // console.log(firewalls)
            res.status(200).json(firewalls)
        }
    }
    catch(error){
        console.log("Error:",error)
    }
}