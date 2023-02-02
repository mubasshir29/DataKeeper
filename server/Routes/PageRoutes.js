import express from 'express'
import {getHomeData, addBranch,getBranchDetails,addInternetConnection,getInternetDetails,getFirewallDetails,addFirewall} from './../Controllers/pageController.js'
const pageRouter = express.Router()

pageRouter.get('/',getHomeData)
pageRouter.get('/branch',getBranchDetails)
pageRouter.get('/branch/:id',getBranchDetails)
pageRouter.post('/new/branch',addBranch)

pageRouter.get('/internet',getInternetDetails)
pageRouter.get('/internet/:id',getInternetDetails)
pageRouter.post('/new/connection',addInternetConnection)

pageRouter.get('/firewall',getFirewallDetails)
pageRouter.get('/firewall/:id',getFirewallDetails)
pageRouter.post('/new/firewall',addFirewall)

export default pageRouter;