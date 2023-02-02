import logo from './logo.svg';
import './App.css';
import Navbar from './../src/Navbar/Navbar'
import {Routes, Route} from 'react-router-dom'
import Sidebar from './Sidebar/Sidebar';
import Home from './Home/Home';
import InternetAccounts from './InternetAccounts/InternetAccounts';
import Firewalls from './Firewalls/Firewalls'
import Switches from './Switches/Switches';
import Wireless from './Wireless/Wireless';
import Settings from './Settings/Settings';
import AddInternet from './AddInternet/AddInternet';
import AddWireless from './AddWireless/AddWireless';
import AddFirewall from './AddFirewall/AddFirewall';
import AddSwitches from './AddSwitches/AddSwitches';
import AddAP from './AddAP/AddAP';
import AddSSID from './AddSSID/AddSSID';
import AddDiagram from './AddDiagram/AddDiagram';
import AddBranch from './AddBranch/AddBranch';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='main'>
        <Sidebar/>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/internet' element={<InternetAccounts/>}/>
          <Route exact path='/firewall' element={<Firewalls/>}/>
          <Route exact path='/switches' element={<Switches/>}/>
          <Route exact path='/wireless' element={<Wireless/>}/>
          <Route exact path='/settings' element={<Settings/>}/>
          <Route exact path='/add-internet' element={<AddInternet/>}/>
          <Route exact path='/add-firewall' element={<AddFirewall/>}/>
          <Route exact path='/add-wireless' element={<AddWireless/>}/>
          <Route exact path='/add-ap' element={<AddAP/>}/>
          <Route exact path='/add-ssid' element={<AddSSID/>}/>
          <Route exact path='/add-switches' element={<AddSwitches/>}/>
          <Route exact path='/add-diagram' element={<AddDiagram/>}/>
          <Route exact path='/add-branch' element={<AddBranch/>}/>
        </Routes>
      </div>
      
    </div>
  );
}

export default App;
