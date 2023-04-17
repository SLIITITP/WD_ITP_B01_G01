import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import "./App.css"
import "./index.css"

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
    <div className="container">
          <Routes>
            <Route path="/" exact element={<Home />} />
            
          </Routes>
          {/* <Footer /> */}
        </div>
        </BrowserRouter>
    )
  }
}