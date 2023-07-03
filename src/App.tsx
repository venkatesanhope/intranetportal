import React from 'react';
import logo from './logo.svg';
import './App.css';
import "./assets/css/animate.css";
import "./assets/css/sb-admin-2.min.css";
import Dashboard from './components/Dashboard/Dashboard';
import Sidebar from './components/Sidebar/Sidebar';
import Topbar from './components/Topbar/Topbar';
function App() {
  return (
    <div className="App">
      <div id="wrapper">
        <Sidebar></Sidebar>
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Topbar></Topbar>
            <div className="grid-container">
              <Dashboard></Dashboard>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
