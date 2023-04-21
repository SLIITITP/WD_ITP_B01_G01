// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;




import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/dashboard';
import Deliver from './components/deliver';
import EmpDashboard from './components/empDashboard';
import EmpLogin from './components/empLogin';
import Employee from './components/employee';
import Finance from "./components/finance";
import Inventory from "./components/inventory";
import Login from './components/login';
import NavBar from './components/NavBar';
import Sales from './components/sales';
import Supplier from './components/supplier';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">

          <NavBar />
          <Routes>
            <Route path="/" exact element={<Login />} />
            <Route path="/dashboard" exact element={<Dashboard />} />
            <Route path="/deliver" exact element={<Deliver />} />
            <Route exact path="/empDashboard" element={<EmpDashboard />} />
            <Route path="/empLogin" element={<EmpLogin />} />
            <Route path="/employee" exact element={<Employee />} />
            <Route path="/finance" exact element={<Finance />} />
            <Route path="/sales" exact element={<Sales />} />
            <Route path="/supplier" exact element={<Supplier />} />
            <Route path="/inventory" exact element={<Inventory />} />
          </Routes>
          {/* <Footer /> */}
        </div>
      </BrowserRouter>
    )
  }
}







