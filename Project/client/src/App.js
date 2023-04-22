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
import Inventory from './components/inventory';
import InventoryDetail from './components/inventoryDetail';
import AddProduct from './components/addProduct';
import AdminDashboard from './components/adminDashboard';
import SupplierList from './components/SupplierList';
import AddSupplier from './components/AddSupplier';



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

          <Route path="/inventory" exact element={<Inventory />} />
          <Route path="/inventoryDetail" exact element={<InventoryDetail />} />
          <Route path="/addProduct" exact element={<AddProduct />} />
          <Route path="/adminDashboard" exact element={<AdminDashboard />} />

          <Route path="/SupplierList" exact element={<SupplierList/>}/>
          <Route path="/AddSupplier" exact element={<AddSupplier/>}/>
          
     

          
          
          </Routes>
          {/* <Footer />  */}
          
        </div>
      </BrowserRouter>
    )
  }
}
