import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './pages/NavBar';
import './App.css';

import Contact from './components/Contact'; 

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
    <div className="container">
    <NavBar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/contact" exact element={<Contact />} />
          </Routes>
          {/* <Footer /> */}
        </div>
        </BrowserRouter>
    )
  }
}