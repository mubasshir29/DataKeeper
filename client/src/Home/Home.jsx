import React,{useContext} from 'react'
import './Home.css'
import {DataContext} from './../Utils/DataContextProvider.js'
import chart from './../chart_2.png'
import {NavLink} from 'react-router-dom'
import { PieChart } from 'react-minimal-pie-chart';
import DonutChart from 'react-donut-chart';

function Home() {
  const {connections,branches,firewalls,wlc,switches,ssid,ap} = useContext(DataContext)
  console.log(wlc)
  return (
    <div className='page-container'>
        <h3>Dashboard </h3>
        <div className='home-cards-container summary-cards'>
              <NavLink>
                <div className='card home-card first-color gradient-6'>
                  <h3 className='card-title'>Branches</h3>
                  <h3>{branches && branches.length}</h3>
                </div>
              </NavLink>
              <NavLink to='/internet'>
                <div className='card home-card gradient-6'>
                  <h3 className='card-title'>Internet Accounts</h3>
                  <h3>{connections && connections.length}</h3>
                </div>
              </NavLink>
              
              <NavLink to='/firewall'>
              <div className='card home-card gradient-6'>
                <h3 className='card-title'>Firewalls</h3>
                <h3>{firewalls && firewalls.length}</h3>
              </div>
              </NavLink>
            <NavLink to='/switches'>
              <div className='card home-card gradient-6'>
                <h3 className='card-title'>Switches</h3>
                <h3>{switches && switches.length}</h3>
              </div>
            </NavLink>
            <NavLink to='/wireless'>
              <div className='card home-card gradient-6'>
                <h3 className='card-title'>Wireless Controller</h3>
                <h3>{wlc && wlc.length}</h3>
              </div>
            </NavLink>
            <NavLink to='/access-points'>
              <div className='card home-card gradient-6'>
                <h3 className='card-title'>Access Points</h3>
                <h3>{ap && ap.length}</h3>
              </div>
            </NavLink>
        </div>
        <h3>Overview</h3>
        <div className='home-cards-container charts-container'>
          <div className='one-chart'>
            <h3>Internet</h3>
            <img className='chart' src={chart}></img>
          </div>
          <div className='one-chart'>
            <h3>Firewalls</h3>
            <img className='chart' src={chart}></img>
          </div>
          <div className='one-chart'>
            <h3>Switches</h3>
            <img className='chart' src={chart}></img>
          </div>
          <div className='one-chart'>
            <h3>Access Points</h3>
            <img className='chart' src={chart}></img>
          </div>
        </div>
    </div>
  )
}

export default Home