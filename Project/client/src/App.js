import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import ContactDisplay from './components/ContactDisplay';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Footer from './components/Footer';
import InformationForm from './components/InformationForm';
import DisplayInfo from './components/DisplayInfo';
import Inventory from './components/inventory';
import InventoryDetail from './components/inventoryDetail';
import AddProduct from './components/addProduct';
import AdminDashboard from './components/adminDashboard';
import SupplierList from './components/SupplierList';
import AddSupplier from './components/AddSupplier';
import EditSupplier from './components/EditSupplier';
import IncomeList from './components/IncomeList';
import EditIncome from './components/EditIncome';
import EditExpense from './components/EditExpense';
import AddExpense from './components/AddExpense';
import ExpenseList from './components/ExpenseList';
import PrintPreviewIncome from './components/PrintPreviewIncome';
import PrintPreviewExpense from './components/PrintPreviewExpense';
import AddIncome from './components/AddIncome';
import PieChart from './components/pieChart';



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
          
   
          <Route path="/informationForm" exact element={<InformationForm />} />
          <Route path="/DisplayInfo/:id" exact element={<DisplayInfo />} />

          <Route path="/inventory" exact element={<Inventory />} />
          <Route path="/inventoryDetail" exact element={<InventoryDetail />} />
          <Route path="/addProduct" exact element={<AddProduct />} />
          <Route path="/adminDashboard" exact element={<AdminDashboard />} />

          <Route path="/SupplierList" exact element={<SupplierList/>}/>
          <Route path="/AddSupplier" exact element={<AddSupplier/>}/>
          <Route path="/EditSupplier/:id" exact element={<EditSupplier/>}/>

          <Route path="/AddIncome" exact element={<AddIncome/>}/>
          <Route path="/IncomeList" exact element={<IncomeList/>}/>
          <Route path="/EditIncome/:id" exact element={<EditIncome/>}/>
          <Route path="/pieChart" exact element={<PieChart/>}/>


          <Route path="/AddExpense" exact element={<AddExpense/>}/>
          <Route path="/ExpenseList" exact element={<ExpenseList/>}/>
          <Route path="/EditExpense/:id" exact element={<EditExpense/>}/>
          
          <Route path="/PrintPreviewIncome" exact element={<PrintPreviewIncome/>}/>

          <Route path="/PrintPreviewExpense" exact element={<PrintPreviewExpense/>}/>
          
          </Routes>
          {/* <Footer />  */}
          
        </div>
      </BrowserRouter>
    )
  }
}
