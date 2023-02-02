import React from 'react'
import './Home.css'

function Home() {
  return (
    <div className='page-container'>
        <h3>Dashboard </h3>
        <div className='home-cards-container summary-cards'>
            <div className='card home-card first-color'>
              <h3 className='card-title'>Branches</h3>
              <h3>6</h3>
            </div>
            <div className='card home-card second-color'>
              <h3 className='card-title'>Internet Accounts</h3>
              <h3>12</h3>
            </div>
            <div className='card home-card third-color'>
              <h3 className='card-title'>Firewalls</h3>
              <h3>7</h3>
            </div>
            <div className='card home-card fourth-color'>
              <h3 className='card-title'>Switches</h3>
              <h3>104</h3>
            </div>
            <div className='card home-card fifth-color'>
              <h3 className='card-title'>WLC</h3>
              <h3>5</h3>
            </div>
            <div className='card home-card sixth-color'>
              <h3 className='card-title'>Access Points</h3>
              <h3>670</h3>
            </div>
        </div>
        <h3>Overview</h3>
        <div className='home-cards-container'>
          <div className='table home-table'>
            
          </div>
        </div>
    </div>
  )
}

export default Home