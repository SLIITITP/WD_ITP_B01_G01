import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import ContactDisplay from './components/ContactDisplay';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Footer from './components/Footer';
import ProductCard from "./components/ProductCard";
import CartPage from "./components/cartPage";
import InformationForm from './components/InformationForm';
import DisplayInfo from './components/DisplayInfo';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">

          <NavBar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/contactdisplay/:id" exact element={<ContactDisplay />} />
            <Route path="/contact" exact element={<Contact />} />
            <Route exact path="/cart1" element={<ProductCard />} />
          <Route path="/cart" element={<CartPage />} />

          <Route path="/informationForm" exact element={<InformationForm />} />
          <Route path="/DisplayInfo/:id" exact element={<DisplayInfo />} />
          </Routes>
          {/* <Footer /> */}
        </div>
      </BrowserRouter>
    )
  }
}
